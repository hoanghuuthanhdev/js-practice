# JS Practice Collection

This workspace contains a set of small JavaScript practice projects and browser demos. Everything is built with plain HTML, CSS, and JavaScript so you can open the files directly and practice without any build step.

## Included Projects

- `phase1/` - JavaScript fundamentals practice
- `phase2/` - Arrays, objects, and collection exercises
- `music/` - A custom music player demo
- `tabUI/` - A tabbed interface demo

## What Each Folder Contains

- `phase1/index.html` and `phase1/index.css` provide the exercise layout.
- `phase1/main.js` contains fundamentals solutions such as FizzBuzz, palindrome checks, string reversal, sums, multiplication tables, and a calculator.
- `phase2/main.js` contains collection solutions such as duplicate removal, grouping, flattening, filtering adults, checking pass/fail, stock checks, totals, destructuring, and category aggregation.
- `music/index.html`, `music/css/style.css`, and `music/js/main.js` implement the music player UI and playback behavior.
- `tabUI/index.html`, `tabUI/index.css`, and `tabUI/main.js` implement the tab switching interface.

## How To Run

You can open the HTML files directly in a browser, or use a local server if you want cleaner relative-path handling.

Open directly:

- `music/index.html`
- `phase1/index.html`
- `tabUI/index.html`

Run a local server from the project root:

```bash
python -m http.server 8000
```

Then open:

- `http://localhost:8000/music/`
- `http://localhost:8000/phase1/`
- `http://localhost:8000/tabUI/`

## Notes

- No package installation or build step is required.
- The exercises are meant to be edited directly while learning.
- `phase1/main.js` and `phase2/main.js` log example results to the console so you can compare outputs quickly.

## Suggested Next Steps

- Add screenshots for `music/` and `tabUI/`.
- Split each phase into smaller exercise files if you want cleaner study notes.
- Add short inline comments or test cases for each practice function.
