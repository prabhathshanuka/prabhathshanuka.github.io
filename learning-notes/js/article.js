(() => {
  const target = document.getElementById("articleContent");
  const id = new URLSearchParams(window.location.search).get("id");
  const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
  }[char]));

  // Lightweight Markdown renderer for headings, paragraphs, lists, quotes and fenced code.
  // This keeps the portal dependency-free and suitable for GitHub Pages.
  function renderMarkdown(markdown) {
    const lines = markdown.replace(/\r\n/g, "\n").split("\n");
    let output = "", paragraph = [], listType = null, code = false, codeLines = [];
    const flushParagraph = () => {
      if (paragraph.length) { output += `<p>${paragraph.map(escapeHTML).join("<br>")}</p>`; paragraph = []; }
    };
    const closeList = () => { if (listType) { output += listType === "ul" ? "</ul>" : "</ol>"; listType = null; } };
    for (const line of lines) {
      if (line.startsWith("```")) {
        flushParagraph(); closeList();
        if (code) { output += `<pre><code>${escapeHTML(codeLines.join("\n"))}</code></pre>`; codeLines = []; }
        code = !code; continue;
      }
      if (code) { codeLines.push(line); continue; }
      if (!line.trim()) { flushParagraph(); closeList(); continue; }
      if (/^---+$/.test(line.trim())) { flushParagraph(); closeList(); output += "<hr>"; continue; }
      const heading = line.match(/^(#{1,3})\s+(.+)$/);
      if (heading) { flushParagraph(); closeList(); const level = heading[1].length; output += `<h${level}>${inline(heading[2])}</h${level}>`; continue; }
      if (line.startsWith("> ")) { flushParagraph(); closeList(); output += `<blockquote>${inline(line.slice(2))}</blockquote>`; continue; }
      const unordered = line.match(/^\s*[-*]\s+(.+)$/);
      const ordered = line.match(/^\s*\d+\.\s+(.+)$/);
      if (unordered || ordered) {
        flushParagraph(); const nextType = unordered ? "ul" : "ol";
        if (listType !== nextType) { closeList(); output += nextType === "ul" ? "<ul>" : "<ol>"; listType = nextType; }
        output += `<li>${inline((unordered || ordered)[1])}</li>`; continue;
      }
      closeList(); paragraph.push(line);
    }
    flushParagraph(); closeList();
    if (code) output += `<pre><code>${escapeHTML(codeLines.join("\n"))}</code></pre>`;
    return output;
  }
  function inline(text) {
    // Escape first, then apply a small safe subset of Markdown inline formatting.
    return escapeHTML(text)
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/`([^`]+)`/g, "<code>$1</code>");
  }

  async function load() {
    if (!id) throw new Error("No article was selected.");
    const [manifestResponse] = await Promise.all([fetch("data/articles.json")]);
    if (!manifestResponse.ok) throw new Error("Could not load the article list.");
    const manifest = await manifestResponse.json();
    const article = (manifest.articles || []).find(item => item.id === id);
    if (!article) throw new Error("This article could not be found.");
    const response = await fetch(article.file);
    if (!response.ok) throw new Error("The article content could not be loaded.");
    const markdown = await response.text();
    document.title = `${article.title} | Dependabits Learning Notes`;
    target.innerHTML = `
      <div class="article-kicker">${escapeHTML(article.subject)} / ${escapeHTML(article.topic)}</div>
      <h1>${escapeHTML(article.title)}</h1>
      <div class="article-meta">${article.level ? `<span>${escapeHTML(article.level)}</span>` : ""}${article.curriculum ? `<span>${escapeHTML(article.curriculum)}</span>` : ""}${article.updated ? `<span>Updated ${escapeHTML(article.updated)}</span>` : ""}</div>
      <div class="markdown-body">${renderMarkdown(markdown)}</div>`;
  }
  load().catch(error => { target.innerHTML = `<div class="error"><h1>Article unavailable</h1><p>${escapeHTML(error.message)}</p><a href="index.html">Return to topics</a></div>`; });
  document.getElementById("year").textContent = new Date().getFullYear();
})();
