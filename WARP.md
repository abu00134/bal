# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

Overview
- This is a static résumé website: plain HTML, CSS, and a tiny bit of vanilla JavaScript.
- No build system, package manager, linter, or test framework is configured.
- Designed to be hosted on any static host (GitHub Pages, Netlify, Vercel) without a build step.

Common commands
Because this is a static site, there is no build/lint/test pipeline. Use a local static server to preview changes.

Local preview (choose one, depending on what you have installed):
- Python (PowerShell)
  - Start a server on port 5173:
    - py -m http.server 5173
    - or: python -m http.server 5173
  - Open in browser:
    - Start-Process "http://localhost:5173"

- Node.js (PowerShell)
  - Using http-server:
    - npx http-server -p 5173 .
  - Or using serve:
    - npx serve -l 5173 .
  - Open in browser:
    - Start-Process "http://localhost:5173"

Notes:
- There is no test suite configured, so “run a single test” does not apply.
- There is no linter/formatter configured in this repo.

High-level architecture and structure
- Entry point: index.html
  - Semantic sections for header/contact, Summary, Experience (repeatable items), Education, Skills (as tags), Projects (card grid), and a footer.
  - Includes a “Print” button that calls window.print().
- Styling: styles.css
  - Uses CSS variables for theme tokens and a responsive layout (CSS grid) that collapses to one column on small screens.
  - Print media query optimizes A4 export (hides the print button, removes decorative borders, adjusts font sizes/margins).
- Behavior: script.js
  - On DOMContentLoaded, injects the current year into the footer and wires up the Print button.
- Assets
  - If you add images or logos, place them under an assets/ directory (e.g., assets/img/) and reference from index.html.

Important points from README.md
- Zero build tools required — just static files.
- Print to PDF from your browser (enable background graphics if needed).
- Deployment: push to GitHub Pages (root of main branch) or drag-and-drop to Netlify/Vercel; no build step required.