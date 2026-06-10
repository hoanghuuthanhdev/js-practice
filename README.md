# JS Practice Collection

A collection of JavaScript practice projects focused on fundamental and intermediate front-end skills.
This repository contains small, independent demos you can open directly in the browser.

## Project Structure

- `music/`
  - `index.html`: Music player demo page
  - `css/style.css`: Styles for the music player
  - `js/main.js`: Music player logic
  - `music_mp3/`: Audio files used by the demo
- `phase1/`
  - `index.html`: Practice page for JS fundamentals
  - `index.css`: Styles for Phase 1
  - `main.js`: JS fundamentals exercises (conditions, loops, functions, etc.)
- `phase2/`
  - `main.js`: Arrays and objects exercises
- `tabUI/`
  - `index.html`: Tabbed interface demo
  - `index.css`: Styles for tab UI
  - `main.js`: Tab interaction logic

## Topics Covered

- Phase 1: JS fundamentals
  - Variables, data types, operators
  - Conditionals and loops
  - Functions, scope, and basic problem solving
- Phase 2: Arrays and objects
  - Array methods (`map`, `filter`, `reduce`, `find`, `some`, `every`)
  - Object manipulation, destructuring, spread operator
  - Practice tasks like duplicate removal, grouping, and flattening

## How To Run

You can open each project HTML file directly, or run a local server for smoother testing.

### Option 1: Open directly

Open one of these files in your browser:

- `music/index.html`
- `phase1/index.html`
- `tabUI/index.html`

### Option 2: Use a local server (recommended)

From the project root:

```bash
python -m http.server 8000
```

Then open:

- `http://localhost:8000/music/`
- `http://localhost:8000/phase1/`
- `http://localhost:8000/tabUI/`

You can also use VS Code Live Server.

## Development Notes

- No build tools or package installation required.
- All projects are plain HTML/CSS/JS.
- Use browser DevTools for debugging.
- You can add your own exercises in `phase1/main.js` and `phase2/main.js`.

## Suggested Next Steps

- Add dedicated README files inside each project folder.
- Add screenshots/GIFs for each demo.
- Add small test cases for exercise functions.
