<%*
const title = await tp.system.prompt("Capture title?");
const tags = await tp.system.prompt("Tags (comma-separated, optional)?");
const project = await tp.system.suggester(
  ["(none)", "cretelligent", "f2-cetera", "harvey", "litify", "mai", "nbcu", "lnw", "internal", "modern-stack", "high-meadows"],
  ["", "cretelligent", "f2-cetera", "harvey", "litify", "mai", "nbcu", "lnw", "internal", "modern-stack", "high-meadows"],
  false,
  "Project (pick one or Esc for none)"
);
const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const filename = `${tp.date.now("YYYY-MM-DD")}-${slug}`;
await tp.file.rename(filename);
await tp.file.move(`/Second Brain/raw/captures/${filename}`);
-%>
---
type: capture
created: <% tp.date.now("YYYY-MM-DD HH:mm") %>
<% project ? `project: ${project}` : "" %>
tags: [capture<% tags ? ", " + tags.split(",").map(t => t.trim()).join(", ") : "" %>]
---

# <% title %>

## Source

- 

## Notes

- 

## Next

- [ ] 
