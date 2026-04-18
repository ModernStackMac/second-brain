#!/usr/bin/env node
/**
 * story-sync.js  (v4.1)
 *
 * Pulls active stories from Linear (MSS + HM) and Jira (F2) and writes them to:
 *   - Second Brain/Action-Tracker.md (auto-sync section)
 *   - Second Brain/wiki/projects/{project-path}/stories-{ws}.md (per-project)
 *
 * v4.1 changes:
 *   - PROJECT_SLUG_MAP: cetera → f2-cetera (aligns with clients→projects merge).
 *
 * v4 changes:
 *   - Filter covers Jira-native statuses (Internal QA, Developer Review, Review,
 *     To Do, Blocked, etc.) — nothing active falls through anymore.
 *   - PROJECT_SLUG_MAP groups projects into subfolders (internal/meadow, etc.)
 *     and collapses aliases (Meadow + Capacity Planning → one project).
 *   - renderStoryEntry prefers story.summary (LLM-written "Next action") over
 *     firstSentences() raw excerpt; falls back when summary is absent.
 *   - pruneStale walks project dirs recursively (nested groupings).
 *
 * v3 changes:
 *   - Enriched story output: description excerpt, parent epic, latest comment
 *   - Per-story block has Context / Epic / Latest-activity lines
 *   - Prune-key bug fixed (v2): uses bare ticket id on both write and read sides
 *   - Source tag: jira for F2, linear-{ws} for Linear workspaces
 *   - Archive filename uses bare id
 *
 * Sync-and-prune: stories that no longer match the active filter are moved to
 *   Second Brain/raw/archived-stories/{project}/{id}.md
 *
 * Filter:
 *   status ∈ active_statuses (identity.yaml filters.story_sync.active_statuses)
 *   OR
 *   (status = Backlog AND (priority ∈ {Urgent, High}
 *                          OR cycle = @current
 *                          OR updatedAt > now - 14d))
 *
 * Identity filter: assignee email ∈ identity.yaml owner.emails.*
 *                  OR assignee name ∈ owner.aliases
 *
 * Usage:
 *   VAULT_ROOT="/path/to/vault" node story-sync.js
 *
 * Keys:
 *   - Linear MSS: via existing MCP (this script defers MSS pulls to Claude Code session)
 *   - Linear HM:  via Keychain entry LINEAR_HIGHMEADOW_API_KEY
 *   - Jira F2:    via existing MCP
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const https = require('https');

const VAULT_ROOT = process.env.VAULT_ROOT || path.join(process.env.HOME, 'Documents/Obsidian Vault');
const IDENTITY_PATH = path.join(VAULT_ROOT, 'Second Brain/_System/identity.yaml');
const ACTION_TRACKER = path.join(VAULT_ROOT, 'Second Brain/Action-Tracker.md');
const STORIES_OUT_DIR = path.join(VAULT_ROOT, 'Second Brain/wiki/projects');
const ARCHIVE_DIR = path.join(VAULT_ROOT, 'Second Brain/raw/archived-stories');
const LOG_FILE = path.join(VAULT_ROOT, 'Second Brain/_System/story-sync.log');

const AUTO_SYNC_BEGIN = '<!-- BEGIN AUTO-SYNC -->';
const AUTO_SYNC_END   = '<!-- END AUTO-SYNC -->';

// ------- utils -------
const log = (...a) => {
  const line = `[${new Date().toISOString()}] ${a.join(' ')}`;
  console.log(line);
  try { fs.appendFileSync(LOG_FILE, line + '\n'); } catch {}
};

function loadIdentity() {
  const text = fs.readFileSync(IDENTITY_PATH, 'utf8');
  const emails = [];
  const aliases = [];
  text.replace(/primary:\s*(\S+)/g, (_, e) => emails.push(e));
  text.replace(/^\s*-\s+(\S+@\S+)/gm, (_, e) => emails.push(e));
  text.replace(/aliases:\n([\s\S]*?)\n\s*\w/, (_, block) => {
    block.split('\n').forEach(l => {
      const m = l.match(/^\s*-\s+(.+)$/);
      if (m) aliases.push(m[1].trim());
    });
  });
  return { emails: [...new Set(emails)], aliases: [...new Set(aliases)] };
}

function keychainGet(service) {
  try {
    return execSync(`security find-generic-password -a "$USER" -s "${service}" -w`, { encoding: 'utf8' }).trim();
  } catch (e) {
    log(`Keychain miss for ${service}: ${e.message}`);
    return null;
  }
}

function identityMatch(identity, assignee) {
  if (!assignee) return false;
  const email = (assignee.email || '').toLowerCase();
  const name  = (assignee.name || '').toLowerCase();
  if (identity.emails.some(e => e.toLowerCase() === email)) return true;
  if (identity.aliases.some(a => a.toLowerCase() === name)) return true;
  return false;
}

function passesFilter(story) {
  // Linear-native + Jira-native active/work-in-flight statuses. Anything that
  // represents work Mac still owns and hasn't closed should pass.
  const active = [
    // Linear
    'Todo','Unstarted','Started','In Progress','In progress','in progress',
    // Jira common
    'To Do','Open','Selected for Development','In Review','Review',
    'Developer Review','Code Review','Peer Review',
    'Internal QA','QA','In QA','Testing','Ready for QA',
    'Blocked','On Hold',
  ];
  const s = (story.status || '').trim();
  if (active.some(a => a.toLowerCase() === s.toLowerCase())) return true;
  if (/backlog/i.test(s)) {
    if (['Urgent','High'].includes(story.priority)) return true;
    if (story.inCurrentCycle) return true;
    if (story.updatedAt) {
      const updated = new Date(story.updatedAt);
      const ageDays = (Date.now() - updated.getTime()) / 86400000;
      if (ageDays <= 14) return true;
    }
  }
  return false;
}

// Project name → vault folder path. Lets us collapse aliases (Meadow +
// Capacity Planning → single meadow project) and group related projects under
// subfolders (internal/, client-work/, etc.).
const PROJECT_SLUG_MAP = {
  // Internal products
  'meadow':                'internal/meadow',
  'capacity-planning':     'internal/meadow',
  'capacity-planning-mss': 'internal/meadow',
  'flex-dash':             'internal/flex-dash',
  'flexdash':              'internal/flex-dash',
  'high-meadow-website':   'internal/high-meadow-website',
  'highmeadow-website':    'internal/high-meadow-website',
  'hm-website':            'internal/high-meadow-website',
  // F2 client engagements — keep flat
  'mai-crm-build':         'mai',
  'mai':                   'mai',
  'cetera':                'f2-cetera',
  'f2-cetera':             'f2-cetera',
  'lnw':                   'lnw',
};

function mapProjectSlug(rawSlug) {
  return PROJECT_SLUG_MAP[rawSlug] || rawSlug;
}

// ------- text helpers -------
function firstSentences(text, n = 2, maxChars = 280) {
  if (!text) return '';
  // strip markdown noise
  const cleaned = text
    .replace(/```[\s\S]*?```/g, ' ')       // code fences
    .replace(/`[^`]*`/g, ' ')              // inline code
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ') // images
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1') // links → text
    .replace(/[#*_>]/g, '')                // md markers
    .replace(/\s+/g, ' ')
    .trim();
  if (!cleaned) return '';
  // sentence split: . ? ! followed by space/upper or end
  const parts = cleaned.match(/[^.!?]+[.!?]?/g) || [cleaned];
  let out = parts.slice(0, n).join(' ').trim();
  if (out.length > maxChars) out = out.slice(0, maxChars - 1).trimEnd() + '…';
  return out;
}

function oneLineTitle(s) {
  return (s || '').replace(/\s+/g, ' ').trim();
}

// ------- Linear HM via direct GraphQL -------
function linearQuery(apiKey, query) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({ query });
    const req = https.request({
      hostname: 'api.linear.app',
      path: '/graphql',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': apiKey,
        'Content-Length': Buffer.byteLength(body),
      },
    }, res => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch (e) { reject(e); }
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

async function fetchLinearHM(identity) {
  const key = keychainGet('LINEAR_HIGHMEADOW_API_KEY');
  if (!key) { log('Linear HM skip — no key'); return []; }

  const q = `
    query {
      viewer {
        email
        assignedIssues(first: 100) {
          nodes {
            identifier title description url
            state { name type }
            priorityLabel
            cycle { number isActive }
            project { name description }
            team { name }
            parent { identifier title description }
            updatedAt
            assignee { email name }
            comments(first: 5, orderBy: updatedAt) {
              nodes {
                body
                user { name }
                createdAt
              }
            }
          }
        }
      }
    }
  `;
  const resp = await linearQuery(key, q);
  if (resp.errors) { log('Linear HM errors', JSON.stringify(resp.errors)); return []; }
  const nodes = resp.data?.viewer?.assignedIssues?.nodes || [];
  return nodes.map(n => ({
    workspace: 'HM',
    id: n.identifier,
    title: n.title,
    description: n.description || '',
    url: n.url,
    status: n.state?.name,
    stateType: n.state?.type,
    priority: n.priorityLabel,
    inCurrentCycle: !!n.cycle?.isActive,
    cycleNumber: n.cycle?.number,
    project: n.project?.name || 'Unassigned',
    projectDescription: n.project?.description || '',
    team: n.team?.name,
    parent: n.parent ? { id: n.parent.identifier, title: n.parent.title, description: n.parent.description || '' } : null,
    updatedAt: n.updatedAt,
    assignee: n.assignee,
    comments: (n.comments?.nodes || []).map(c => ({
      body: c.body || '',
      author: c.user?.name || 'Unknown',
      at: c.createdAt,
    })),
  }))
  .filter(s => identityMatch(identity, s.assignee))
  .filter(passesFilter);
}

// ------- output writers -------
function slugify(s) { return (s || 'unassigned').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }

function sourceTag(ws) {
  return ws === 'F2' ? 'jira' : `linear-${ws.toLowerCase()}`;
}

function renderStoryEntry(s) {
  // entry in the stories-*.md file — multi-line with enriched context
  const pri = s.priority ? ` \`${s.priority}\`` : '';
  const head = `- [${s.id}](${s.url}) — ${oneLineTitle(s.title)}${pri} [Status:: ${s.status}] [Priority:: ${s.priority || 'None'}] [Updated:: ${s.updatedAt?.slice(0,10) || ''}]`;

  // Prefer LLM-written actionable summary (populated by Claude-side sync) over
  // raw description excerpt. Falls back to first-2-sentences if not provided.
  const summary = (s.summary && s.summary.trim()) ? s.summary.trim() : null;
  const ctx = summary || firstSentences(s.description, 3, 420);
  const ctxLabel = summary ? 'Next action' : 'Context';

  const epic = s.parent
    ? `Epic: [${s.parent.id}] ${oneLineTitle(s.parent.title)}${s.parent.description ? ' — ' + firstSentences(s.parent.description, 1, 140) : ''}`
    : null;
  const lastComment = (s.comments && s.comments.length)
    ? (() => {
        const c = [...s.comments].sort((a,b) => new Date(b.at) - new Date(a.at))[0];
        const snippet = firstSentences(c.body, 1, 180);
        return snippet ? `Latest (${c.author}, ${c.at?.slice(0,10)}): ${snippet}` : null;
      })()
    : null;

  const sub = [];
  if (ctx) sub.push(`    - **${ctxLabel}:** ${ctx}`);
  if (epic) sub.push(`    - **${epic}**`);
  if (lastComment) sub.push(`    - **${lastComment}**`);

  return sub.length ? `${head}\n${sub.join('\n')}` : head;
}

function writeStoriesToProjectPages(stories) {
  const groups = {};
  for (const s of stories) {
    const key = `${s.workspace}|${slugify(s.project)}`;
    (groups[key] ||= []).push(s);
  }

  const currentlySynced = new Set();

  for (const [key, list] of Object.entries(groups)) {
    const [ws, proj] = key.split('|');
    const mappedProj = mapProjectSlug(proj);
    const dir = path.join(STORIES_OUT_DIR, mappedProj);
    fs.mkdirSync(dir, { recursive: true });
    const file = path.join(dir, `stories-${ws.toLowerCase()}.md`);

    let body = `---\ntype: stories-sync\nworkspace: ${ws}\nproject: ${list[0].project}\nupdated: ${new Date().toISOString()}\nstory_count: ${list.length}\n---\n\n`;
    body += `# ${ws} Stories — ${list[0].project}\n\n`;
    body += `> Auto-synced by story-sync. Do not edit by hand — changes are overwritten.\n> Each entry includes ticket link + status + 1-2 sentences of context + parent epic + latest activity.\n\n`;

    const byStatus = {};
    for (const s of list) (byStatus[s.status] ||= []).push(s);
    const statusOrder = ['Urgent','In Progress','In progress','Started','Developer Review','Code Review','In Review','Review','Internal QA','QA','In QA','Testing','Ready for QA','To Do','Todo','Unstarted','Selected for Development','Open','Blocked','On Hold','Backlog'];
    const sortedStatuses = Object.keys(byStatus).sort((a,b) => (statusOrder.indexOf(a) + 99) - (statusOrder.indexOf(b) + 99));

    for (const status of sortedStatuses) {
      body += `## ${status}\n\n`;
      for (const s of byStatus[status]) {
        body += renderStoryEntry(s) + '\n\n';
        currentlySynced.add(s.id);
      }
    }

    fs.writeFileSync(file, body);
    log(`WROTE ${file.replace(VAULT_ROOT, '')} — ${list.length} stories (enriched)`);
  }

  return currentlySynced;
}

function updateActionTracker(stories) {
  let text = fs.existsSync(ACTION_TRACKER) ? fs.readFileSync(ACTION_TRACKER, 'utf8') : '# Action Tracker\n\n';

  const autoBlock = buildAutoBlock(stories);

  if (text.includes(AUTO_SYNC_BEGIN)) {
    text = text.replace(
      new RegExp(`${AUTO_SYNC_BEGIN}[\\s\\S]*?${AUTO_SYNC_END}`),
      `${AUTO_SYNC_BEGIN}\n${autoBlock}\n${AUTO_SYNC_END}`
    );
  } else {
    if (text.includes('## Closed')) {
      text = text.replace('## Closed', `${AUTO_SYNC_BEGIN}\n${autoBlock}\n${AUTO_SYNC_END}\n\n## Closed`);
    } else {
      text = text.trimEnd() + `\n\n${AUTO_SYNC_BEGIN}\n${autoBlock}\n${AUTO_SYNC_END}\n`;
    }
  }

  fs.writeFileSync(ACTION_TRACKER, text);
  log(`UPDATED Action-Tracker.md — ${stories.length} synced stories`);
}

function buildAutoBlock(stories) {
  if (!stories.length) return '## Auto-Synced Stories\n\n_No active stories at last sync._';

  const byWs = {};
  for (const s of stories) {
    (byWs[s.workspace] ||= {});
    (byWs[s.workspace][s.project] ||= []).push(s);
  }

  let out = `## Auto-Synced Stories\n\n_Last synced: ${new Date().toISOString()}._ Do not edit rows in this block — they are regenerated each sync. Add manual items above this block.\n\n`;

  for (const ws of Object.keys(byWs).sort()) {
    out += `### ${ws}\n\n`;
    for (const proj of Object.keys(byWs[ws]).sort()) {
      out += `#### ${proj}\n`;
      for (const s of byWs[ws][proj]) {
        // Action-Tracker rows stay single-line for Dataview. Prefer LLM summary
        // over a raw description excerpt when available.
        const ctxShort = (s.summary && s.summary.trim()) ? s.summary.trim().slice(0, 160) : firstSentences(s.description, 1, 140);
        const summary = ctxShort ? ` — _${ctxShort}_` : '';
        out += `- [ ] [${s.id}](${s.url}) — ${oneLineTitle(s.title)}${summary} [Owner:: Mac] [Project:: ${mapProjectSlug(slugify(s.project))}] [Status:: ${s.status}] [Priority:: ${s.priority || 'None'}] [Ticket:: ${s.id}] [Source:: ${sourceTag(ws)}] [Date:: ${s.updatedAt?.slice(0,10) || ''}]\n`;
      }
      out += '\n';
    }
  }
  return out.trimEnd();
}

function pruneStale(currentlySynced) {
  if (!fs.existsSync(STORIES_OUT_DIR)) return 0;
  let pruned = 0;
  // Walk project dirs recursively so nested groupings (internal/meadow) are
  // covered. Max depth 3 keeps it bounded.
  function walk(dir, depth = 0) {
    if (depth > 3) return;
    for (const name of fs.readdirSync(dir)) {
      const fp = path.join(dir, name);
      const st = fs.statSync(fp);
      if (st.isDirectory()) { walk(fp, depth + 1); continue; }
      if (!name.startsWith('stories-')) continue;
      const relProj = path.relative(STORIES_OUT_DIR, dir);
      const text = fs.readFileSync(fp, 'utf8');
      const re = /\[([A-Z]+-\d+)\]\(/g;
      let m;
      const seen = new Set();
      while ((m = re.exec(text))) {
        const id = m[1];
        if (seen.has(id)) continue;
        seen.add(id);
        if (!currentlySynced.has(id)) {
          const ws = id.split('-')[0];
          const archProj = path.join(ARCHIVE_DIR, relProj);
          fs.mkdirSync(archProj, { recursive: true });
          const archFile = path.join(archProj, `${id}.md`);
          if (!fs.existsSync(archFile)) {
            fs.writeFileSync(archFile, `---\narchived: ${new Date().toISOString()}\nworkspace: ${ws}\nticket: ${id}\nreason: no longer matches active filter\n---\n\nArchived from ${relProj}/${name}\n`);
            pruned++;
          }
        }
      }
    }
  }
  walk(STORIES_OUT_DIR, 0);
  log(`Pruned ${pruned} stale stories to archive`);
  return pruned;
}

// ------- entry -------
async function main() {
  if (!fs.existsSync(VAULT_ROOT)) { console.error('No vault'); process.exit(1); }
  fs.mkdirSync(path.dirname(LOG_FILE), { recursive: true });
  fs.mkdirSync(STORIES_OUT_DIR, { recursive: true });
  fs.mkdirSync(ARCHIVE_DIR, { recursive: true });

  const identity = loadIdentity();
  log(`Identity: ${identity.emails.length} emails, ${identity.aliases.length} aliases`);

  const hmStories = await fetchLinearHM(identity);
  log(`Linear HM: ${hmStories.length} active stories (enriched)`);

  const mssStories = parseEnvStories('MSS_STORIES_JSON');
  const f2Stories  = parseEnvStories('F2_STORIES_JSON');
  log(`Linear MSS: ${mssStories.length} (from MCP)`);
  log(`Jira F2:   ${f2Stories.length} (from MCP)`);

  const all = [...hmStories, ...mssStories, ...f2Stories]
    .filter(s => identityMatch(identity, s.assignee))
    .filter(passesFilter);

  const currentlySynced = writeStoriesToProjectPages(all);
  updateActionTracker(all);
  const pruned = pruneStale(currentlySynced);

  const summary = {
    ran_at: new Date().toISOString(),
    total_active: all.length,
    by_workspace: all.reduce((m, s) => ((m[s.workspace] = (m[s.workspace]||0)+1), m), {}),
    pruned,
    version: 'v4.1-clients-merged',
  };
  console.log(JSON.stringify(summary, null, 2));
}

function parseEnvStories(envVar) {
  const raw = process.env[envVar];
  if (!raw) return [];
  try { return JSON.parse(raw); } catch {}
  return [];
}

if (require.main === module) main().catch(e => { log('FATAL', e.message); process.exit(1); });

module.exports = { renderStoryEntry, buildAutoBlock, slugify, mapProjectSlug, PROJECT_SLUG_MAP, passesFilter, identityMatch, firstSentences };
