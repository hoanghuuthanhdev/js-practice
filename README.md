# JS Practice — Hands-on Browser JavaScript Exercises

A collection of small, self-contained browser exercises and demos built with plain HTML, CSS, and JavaScript. Open the files in a browser to explore each demo — no build step required.

## Table of contents

- Overview
- Project structure
- How to run
- Notes & tips
- Contributing

## Overview

This repository is organized as short practice projects that focus on core JavaScript concepts and small UI demos. It's ideal for experimenting, editing code live, and learning by doing.

## Project structure

- `music/` — simple music player demo (HTML, CSS, JS, and sample MP3s)
- `phase1/` — fundamentals: strings, numbers, control flow, basic algorithms
- `phase2/` — collections: arrays, objects, grouping, aggregation exercises
- `phase3/` — continued practice and UI interactions
- `tabUI/` — small tabbed-interface demo

Each folder contains an `index.html` plus supporting `*.css` and `*.js` files. Open the folder's `index.html` in your browser to run the demo.

## How to run

Quick (open in browser):

- Open `music/index.html`, `phase1/index.html`, `phase2/index.html`, `phase3/index.html`, or `tabUI/index.html` directly in your browser.

Recommended (local static server):

```bash
# from the project root
python -m http.server 8000

# then open in browser, e.g.:
http://localhost:8000/music/
```

Using a local server avoids path issues when loading assets like audio files.

## Notes & tips

- No package manager or build tools are required — files are plain static assets.
- Many exercise files log results to the browser console for quick verification. Open DevTools (F12) to view logs.
- Feel free to split large files into smaller examples or add inline tests and comments for study purposes.

## Contributing

- Add screenshots under each folder to illustrate UI behavior.
- Break long practice scripts into per-exercise files if you want clearer learning units.
- Send a PR with improvements or open an issue describing desired changes.

---

If you'd like, I can also add screenshots, inline comments, or a short demo GIF for the `music/` player — tell me which folder to start with.
