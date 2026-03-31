# Project Setup Log

## Development Principles

- **TDD**: All changes must follow Red-Green TDD — write a failing test first, then make it pass
- **Vanilla JS**: JavaScript must be plain vanilla JS (no frameworks or build tools)
- **HTML/CSS first**: Prefer solving problems in vanilla HTML and CSS before reaching for JavaScript

## Done

- Created `isTuesday.js` — core logic (`date.getDay() === 2`)
- Created `test.html` — in-browser TDD test suite (5/5 passing)
- Created `index.html` — the website (green "yes" / red "no")
- Set up Python HTTP server via `.claude/launch.json` for local preview
- Installed `gh` via Homebrew

## Still To Do

- [ ] Authenticate gh: `gh auth login`
- [ ] Initialize git repo: `git init`
- [ ] Stage and commit files: `git add` + `git commit`
- [ ] Create remote repo: `gh repo create`
- [ ] Push: `git push -u origin main`
