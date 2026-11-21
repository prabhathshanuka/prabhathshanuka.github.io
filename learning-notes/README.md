# Dependabits Learning Notes

This is a lightweight, public, two-page notes and articles area inside the main Dependabits GitHub Pages project. It uses HTML, CSS, vanilla JavaScript, JSON topic data and Markdown article files. No backend, login, PDF or Word documents are required.

## Pages

- `index.html` — subject, topic and subtopic browser. The list is loaded from `data/topics.json`.
- `article.html?id=article-id` — shared article reader. It finds article metadata in `data/articles.json` and renders the corresponding Markdown file.

## Add, edit or remove topics

Edit `data/topics.json`. Each subject contains `topics`, and each topic contains `subtopics`. Each subtopic points to an article using `articleId`.

Example:

```json
{
  "id": "algorithms",
  "name": "Algorithms",
  "subtopics": [
    {
      "name": "Introduction to Algorithms",
      "articleId": "introduction-to-algorithms"
    }
  ]
}
```

The `articleId` must match an `id` in `data/articles.json`.

## Add a new article

1. Create a Markdown file in `articles/`, for example `articles/flowcharts.md`.
2. Write your notes using Markdown:
   - `#` / `##` / `###` for headings
   - normal text for paragraphs
   - `-` for bullet points
   - `1.` for numbered lists
   - `>` for highlighted quotations or key concepts
   - triple backticks for code blocks
   - `**bold**` and `*italic*` for emphasis
3. Add its metadata to `data/articles.json`, with a unique `id` and the Markdown `file` path.
4. Add the article to the appropriate subject/topic/subtopic in `data/topics.json`, using the same `articleId`.
5. Preview locally and publish the changed files to GitHub.

## Important editing rules

- Keep JSON valid: use double quotes around keys and string values; add commas between items but not after the final item.
- Use unique article IDs without spaces, e.g. `flowcharts-basics`.
- Keep file paths relative to this `learning-notes/` folder.
- The article renderer supports headings, paragraphs, bold, italic, inline code, ordered and unordered lists, blockquotes, horizontal rules and fenced code blocks.
- This is a public website. Do not add private student information or confidential notes.

## Main website connection

The main site's Learning page links to this area at:

`learning-notes/index.html`

When the full project is deployed at `www.dependabits.com`, this resolves to:

`https://www.dependabits.com/learning-notes/`
