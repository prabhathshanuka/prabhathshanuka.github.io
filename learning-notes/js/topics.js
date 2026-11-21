(() => {
  const list = document.getElementById("topicLibrary");
  const search = document.getElementById("topicSearch");
  const count = document.getElementById("topicCount");
  const empty = document.getElementById("noTopics");
  let subjects = [];

  const escapeHTML = (value) => String(value ?? "").replace(/[&<>"']/g, char => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
  }[char]));

  function render() {
    const query = search.value.trim().toLowerCase();
    let visibleCount = 0;
    const html = subjects.map(subject => {
      const topics = (subject.topics || []).map(topic => {
        const matchingSubtopics = (topic.subtopics || []).filter(sub =>
          !query || `${subject.name} ${topic.name} ${sub.name}`.toLowerCase().includes(query)
        );
        const topicMatches = !query && topic.name.toLowerCase().includes(query);
        if (!query && topic.subtopics?.length) {
          visibleCount += topic.subtopics.length;
          return `<section class="topic-group"><h3>${escapeHTML(topic.name)}</h3><ul>${topic.subtopics.map(sub =>
            `<li><a href="article.html?id=${encodeURIComponent(sub.articleId)}">${escapeHTML(sub.name)}<span>Read notes →</span></a></li>`
          ).join("")}</ul></section>`;
        }
        if (matchingSubtopics.length || topicMatches) {
          visibleCount += matchingSubtopics.length || (topic.subtopics || []).length;
          return `<section class="topic-group"><h3>${escapeHTML(topic.name)}</h3><ul>${matchingSubtopics.map(sub =>
            `<li><a href="article.html?id=${encodeURIComponent(sub.articleId)}">${escapeHTML(sub.name)}<span>Read notes →</span></a></li>`
          ).join("")}</ul></section>`;
        }
        return "";
      }).join("");
      const subjectMatches = !query || `${subject.name} ${subject.description}`.toLowerCase().includes(query);
      const hasTopics = topics.trim().length > 0;
      if (!subjectMatches && !hasTopics) return "";
      if (!hasTopics && query) return "";
      return `<article class="subject-card"><div class="subject-heading"><div><p class="eyebrow">SUBJECT</p><h2>${escapeHTML(subject.name)}</h2><p>${escapeHTML(subject.description || "")}</p></div><span class="subject-mark">${escapeHTML(subject.name.slice(0,2).toUpperCase())}</span></div>${topics || `<p class="coming-soon">Notes for this subject will be added soon.</p>`}</article>`;
    }).join("");
    list.innerHTML = html || "";
    list.hidden = !html;
    empty.hidden = Boolean(html);
    count.textContent = `${visibleCount} ${visibleCount === 1 ? "topic" : "topics"} available`;
  }

  fetch("data/topics.json")
    .then(response => { if (!response.ok) throw new Error("Could not load topics.json"); return response.json(); })
    .then(data => { subjects = data.subjects || []; render(); })
    .catch(() => { list.innerHTML = '<p class="error">The topic list could not be loaded. Please check data/topics.json.</p>'; });

  search.addEventListener("input", render);
  document.getElementById("year").textContent = new Date().getFullYear();
})();
