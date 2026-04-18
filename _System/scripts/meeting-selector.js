#!/usr/bin/env node
/**
 * meeting-selector.js
 *
 * Pairs Granola vs Fathom meeting files from Second Brain/raw/meeting-raw/{granola,fathom}/
 * and writes the higher-scoring version to Meeting Notes/{Company}/{Project}/.
 *
 * Scoring rubric (from _System/identity.yaml):
 *   transcript_completeness: 0.30
 *   summary_quality:         0.25
 *   action_items:            0.25
 *   technical_accuracy:      0.15
 *   metadata_richness:       0.05
 *
 * Usage:
 *   VAULT_ROOT="/path/to/vault" node meeting-selector.js
 *
 * Run hourly via scheduled-tasks MCP or cron.
 */

const fs = require('fs');
const path = require('path');

// ------- config -------
const VAULT_ROOT = process.env.VAULT_ROOT || path.join(process.env.HOME, 'Documents/Obsidian Vault');
const RAW_GRANOLA = path.join(VAULT_ROOT, 'Second Brain/raw/meeting-raw/granola');
const RAW_FATHOM  = path.join(VAULT_ROOT, 'Second Brain/raw/meeting-raw/fathom');
const MEETING_NOTES = path.join(VAULT_ROOT, 'Meeting Notes');
const UNMATCHED = path.join(MEETING_NOTES, '_Unmatched');
const LOG_FILE = path.join(VAULT_ROOT, 'Second Brain/_System/meeting-selector.log');
const PROJECT_MAPPING = path.join(VAULT_ROOT, 'project-mapping.md');

const WEIGHTS = {
  transcript_completeness: 0.30,
  summary_quality:         0.25,
  action_items:            0.25,
  technical_accuracy:      0.15,
  metadata_richness:       0.05,
};

// ------- helpers -------
const log = (...args) => {
  const line = `[${new Date().toISOString()}] ${args.join(' ')}`;
  console.log(line);
  try { fs.appendFileSync(LOG_FILE, line + '\n'); } catch (e) {}
};

const readFile = p => { try { return fs.readFileSync(p, 'utf8'); } catch { return ''; } };
const listMd   = d => { try { return fs.readdirSync(d).filter(f => f.endsWith('.md')); } catch { return []; } };

// normalize title for pairing: lowercase, strip date/time, strip tool suffix, collapse whitespace
function normalizeTitle(filename) {
  return filename
    .replace(/\.md$/, '')
    .replace(/^\d{4}-\d{2}-\d{2}\s*[-—]?\s*/, '')      // strip leading date
    .replace(/\s*\[(Granola|Fathom)\]\s*$/i, '')       // strip tool tag
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

// extract timestamp from filename (YYYY-MM-DD prefix) — returns Date or null
function extractDate(filename) {
  const m = filename.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!m) return null;
  return new Date(`${m[1]}-${m[2]}-${m[3]}T12:00:00Z`);
}

// parse YAML-ish frontmatter block
function parseFrontmatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return {};
  const out = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^(\w[\w_-]*):\s*(.*)$/);
    if (kv) out[kv[1]] = kv[2].replace(/^['"]|['"]$/g, '');
  }
  return out;
}

// ------- scoring -------
function scoreTranscript(text) {
  // length-based signal — longer transcripts typically more complete
  // normalize: 0 at 0 chars, 1.0 at 15k+ chars
  const body = text.replace(/^---\n[\s\S]*?\n---/, '');
  const len = body.length;
  if (len === 0) return 0;
  if (len >= 15000) return 1.0;
  return Math.min(1.0, len / 15000);
}

function scoreSummary(text) {
  // presence and size of a Summary/Overview section
  const m = text.match(/##+\s*(Summary|Overview|TL;?DR|Key Points|Key takeaways)[\s\S]*?(?=##|$)/i);
  if (!m) return 0;
  const summaryLen = m[0].length;
  // 0 at <50 chars, 1.0 at 1500+ chars
  if (summaryLen < 50) return 0.1;
  return Math.min(1.0, summaryLen / 1500);
}

function scoreActionItems(text) {
  // count action items — explicit markers + checkbox list items
  const m = text.match(/##+\s*(Action Items?|To[- ]?Dos?|Next Steps?)[\s\S]*?(?=##|$)/i);
  if (!m) return 0;
  const checkboxes = (m[0].match(/^\s*- \[[ x]\]/gm) || []).length;
  const bullets = (m[0].match(/^\s*[-*] /gm) || []).length;
  const items = Math.max(checkboxes, bullets);
  if (items === 0) return 0.2; // section exists but empty
  // 0.3 at 1 item, 1.0 at 8+
  return Math.min(1.0, 0.3 + (items - 1) * 0.1);
}

function scoreTechnicalAccuracy(text) {
  // heuristic: signal terms relevant to Mac's work (Salesforce, Apex, LWC, MCP, etc.)
  // spelled correctly and in context
  const techTerms = [
    /salesforce/i, /apex/i, /lwc/i, /lightning/i, /flow builder/i, /mcp\b/i,
    /litify/i, /cretelligent/i, /harvey/i, /nbcu/i, /agentforce/i, /agent force/i,
    /data cloud/i, /einstein/i, /supabase/i, /vercel/i, /sanity/i, /clockify/i
  ];
  let hits = 0;
  for (const re of techTerms) if (re.test(text)) hits++;
  // 0 at 0 hits, 1.0 at 8+
  return Math.min(1.0, hits / 8);
}

function scoreMetadataRichness(text) {
  const fm = parseFrontmatter(text);
  const keys = Object.keys(fm);
  // expected fields: attendees, duration, type, source, meeting_id, date
  const valuable = ['attendees','duration','meeting_id','call_id','source','date','type','granola_link','fathom_link'];
  const hits = valuable.filter(k => fm[k]).length;
  return Math.min(1.0, hits / 6);
}

function scoreFile(filepath) {
  const text = readFile(filepath);
  if (!text) return null;
  const scores = {
    transcript_completeness: scoreTranscript(text),
    summary_quality:         scoreSummary(text),
    action_items:            scoreActionItems(text),
    technical_accuracy:      scoreTechnicalAccuracy(text),
    metadata_richness:       scoreMetadataRichness(text),
  };
  let total = 0;
  for (const [k, w] of Object.entries(WEIGHTS)) total += scores[k] * w;
  return { total, scores, textLen: text.length };
}

// ------- project routing (lightweight — full routing already happens upstream;
// we route the winner to the same destination as the existing downstream processor would) -------
function loadProjectMapping() {
  const text = readFile(PROJECT_MAPPING);
  const projects = [];
  // minimal regex parse — pulls project header, meeting folder, keywords
  const re = /###\s+([^\n]+)\n[\s\S]*?\*\*Meeting Folder:\*\*\s*`([^`]+)`[\s\S]*?\*\*Keywords:\*\*\s*([^\n]+)/g;
  let m;
  while ((m = re.exec(text))) {
    projects.push({
      name: m[1].trim(),
      folder: m[2].trim().replace(/\/$/, ''),
      keywords: m[3].split(',').map(s => s.trim().toLowerCase()).filter(Boolean)
    });
  }
  return projects;
}

function routeToProject(filename, text, projects) {
  const haystack = (filename + ' ' + text.slice(0, 4000)).toLowerCase();
  let best = { score: 0, folder: null };
  for (const proj of projects) {
    let score = 0;
    for (const kw of proj.keywords) {
      if (kw && haystack.includes(kw)) score++;
    }
    if (score > best.score) best = { score, folder: proj.folder, name: proj.name };
  }
  return best.score > 0 ? best.folder : null;
}

// ------- pair & select -------
function pair() {
  const projects = loadProjectMapping();
  const granolaFiles = listMd(RAW_GRANOLA);
  const fathomFiles  = listMd(RAW_FATHOM);

  log(`Scanning: granola=${granolaFiles.length} fathom=${fathomFiles.length}`);

  // index fathom by normalized title + date
  const fathomIndex = new Map();
  for (const f of fathomFiles) {
    const key = `${normalizeTitle(f)}|${(extractDate(f) || '').toString().slice(0,10)}`;
    fathomIndex.set(key, f);
  }

  const results = [];

  for (const g of granolaFiles) {
    const gDate = extractDate(g);
    const gKey = `${normalizeTitle(g)}|${(gDate || '').toString().slice(0,10)}`;
    const matchedFathom = fathomIndex.get(gKey);

    const gPath = path.join(RAW_GRANOLA, g);
    const gScore = scoreFile(gPath);

    let winner, loserFile, loserSource;
    if (matchedFathom) {
      const fPath = path.join(RAW_FATHOM, matchedFathom);
      const fScore = scoreFile(fPath);
      if (!gScore && !fScore) continue;
      if (!fScore) { winner = { src: 'granola', file: g, path: gPath, score: gScore }; loserFile = null; }
      else if (!gScore) { winner = { src: 'fathom', file: matchedFathom, path: fPath, score: fScore }; loserFile = null; }
      else if (gScore.total >= fScore.total) {
        winner = { src: 'granola', file: g, path: gPath, score: gScore };
        loserFile = matchedFathom; loserSource = 'fathom'; loserScore = fScore;
      } else {
        winner = { src: 'fathom', file: matchedFathom, path: fPath, score: fScore };
        loserFile = g; loserSource = 'granola'; loserScore = gScore;
      }
      fathomIndex.delete(gKey);
    } else {
      winner = { src: 'granola', file: g, path: gPath, score: gScore };
    }

    processWinner(winner, projects, results, loserFile, loserSource);
  }

  // any fathom files without a granola pair
  for (const [, f] of fathomIndex.entries()) {
    const fPath = path.join(RAW_FATHOM, f);
    const fScore = scoreFile(fPath);
    if (!fScore) continue;
    processWinner({ src: 'fathom', file: f, path: fPath, score: fScore }, projects, results);
  }

  log(`Processed ${results.length} meetings`);
  return results;
}

function processWinner(winner, projects, results, loserFile, loserSource) {
  const text = readFile(winner.path);
  const projectFolder = routeToProject(winner.file, text, projects);
  const destFolder = projectFolder
    ? path.join(VAULT_ROOT, projectFolder)
    : UNMATCHED;

  // strip tool suffix for clean filename in Meeting Notes
  const cleanName = winner.file.replace(/\s*\[(Granola|Fathom)\]\s*(\.md)$/i, '$2');
  const destPath = path.join(destFolder, cleanName);

  try {
    fs.mkdirSync(destFolder, { recursive: true });
    // write only if missing or source newer — do not overwrite existing selected notes (immutability)
    if (!fs.existsSync(destPath)) {
      // prepend a small header noting selection
      const header = `---\nselected_from: ${winner.src}\nselected_at: ${new Date().toISOString()}\nselected_score: ${winner.score.total.toFixed(3)}\n---\n\n`;
      const body = text.replace(/^---\n[\s\S]*?\n---\n?/, ''); // strip existing frontmatter, preserve body
      // merge frontmatters: keep source frontmatter + selection metadata
      const sourceFm = text.match(/^---\n[\s\S]*?\n---/);
      let out;
      if (sourceFm) {
        // inject selection fields into existing fm
        const merged = sourceFm[0].replace(/^---\n/, `---\nselected_from: ${winner.src}\nselected_at: ${new Date().toISOString()}\nselected_score: ${winner.score.total.toFixed(3)}\n`);
        out = merged + text.slice(sourceFm[0].length);
      } else {
        out = header + text;
      }
      fs.writeFileSync(destPath, out);
      log(`WROTE winner=${winner.src} score=${winner.score.total.toFixed(3)} -> ${destPath.replace(VAULT_ROOT, '')}`);
    } else {
      log(`SKIP existing=${destPath.replace(VAULT_ROOT, '')}`);
    }
  } catch (e) {
    log(`ERROR writing ${destPath}: ${e.message}`);
  }

  results.push({
    meeting: winner.file,
    winner: winner.src,
    winner_score: winner.score.total.toFixed(3),
    loser: loserSource || null,
    destination: destFolder.replace(VAULT_ROOT, ''),
  });
}

// ------- entry -------
if (require.main === module) {
  if (!fs.existsSync(VAULT_ROOT)) {
    console.error(`VAULT_ROOT does not exist: ${VAULT_ROOT}`);
    process.exit(1);
  }
  fs.mkdirSync(path.dirname(LOG_FILE), { recursive: true });
  fs.mkdirSync(RAW_GRANOLA, { recursive: true });
  fs.mkdirSync(RAW_FATHOM, { recursive: true });
  const results = pair();
  console.log(JSON.stringify(results, null, 2));
}

module.exports = { pair, scoreFile, WEIGHTS };
