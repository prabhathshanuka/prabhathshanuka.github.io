# Dependabits Website — Phase 1 Starter

A static multi-page website project for Dependabits, built with HTML, CSS, and vanilla JavaScript.

## Open in Visual Studio Code
1. Extract this ZIP.
2. Open the `Dependabits_Project_Starter` folder in VS Code.
3. Open `index.html` in a browser, or use the VS Code Live Server extension.
4. Read `docs/PROJECT_REQUIREMENTS.md` for the agreed requirements.

## Planned pages
- `index.html` — Home
- `about.html` — About Dependabits
- `courses.html` — Courses
- `learning.html` — Learning methods and a link to the Learning Notes area
- `founder.html` — Founder
- `contact.html` — Contact

## Project structure
```text
Dependabits_Project_Starter/
├── assets/
│   ├── images/
│   └── icons/
├── css/
├── js/
├── docs/
│   └── PROJECT_REQUIREMENTS.md
├── index.html
├── about.html
├── courses.html
├── learning.html
├── founder.html
├── contact.html
└── README.md
```

## Phase 1 scope
The homepage (`index.html`) now has the first visual implementation. A tightly cropped horizontal logo asset is used in the header for readability; the duplicate wordmark below the hero logo has been removed. The About page is now implemented; Courses, Learning, Founder, and Contact remain starter pages and will be designed in later steps. The site uses static HTML/CSS/JavaScript and can be deployed to GitHub Pages.

## Contact links
- WhatsApp: https://wa.me/94701819425
- Facebook: https://www.facebook.com/@dependabits
- Canonical domain: https://www.dependabits.com


## Learning Notes area
The `learning-notes/` folder contains a lightweight, public, two-page notes and articles feature:
- `learning-notes/index.html` — browse subjects, topics and subtopics.
- `learning-notes/article.html?id=...` — read the selected article.
- `learning-notes/data/topics.json` — manage the subject/topic/subtopic navigation.
- `learning-notes/data/articles.json` — connect article IDs to Markdown files and store article metadata.
- `learning-notes/articles/*.md` — write and update the actual notes in Markdown.

To publish new notes, add or edit a Markdown file, update `articles.json`, and add the corresponding article reference in `topics.json`. See `learning-notes/README.md` for examples and editing instructions.

The Learning page includes a **Learn Now** link to `learning-notes/index.html`. The notes area is part of this same GitHub Pages project, so you can publish it by updating the existing repository. It does not require a separate repository, backend, database, login, PDF or Word files.
