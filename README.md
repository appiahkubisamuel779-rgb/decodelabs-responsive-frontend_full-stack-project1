# Responsive Frontend Interface

A responsive, accessible web interface built with vanilla HTML, CSS, and JavaScript — no frameworks. Built as Project 1 of the DecodeLabs Full Stack Development Industrial Training Kit.

## Description

This project demonstrates a fully responsive dashboard-style UI that adapts seamlessly across mobile, tablet, and desktop screens. It includes a sticky navigation header with a mobile menu toggle, a dynamic task list, and a "focus mode" interaction — all built using semantic HTML5 landmarks and modern CSS (Grid + Flexbox + `clamp()` for fluid typography).

## Features

- Fully responsive layout (mobile-first, breakpoints at 640px / 768px / 1024px)
- Semantic HTML5 structure (`header`, `nav`, `main`, `section`, `article`, `aside`, `footer`)
- Accessible navigation (`aria-expanded`, `aria-label`, screen-reader-only text)
- Dynamic task list — add tasks via JavaScript without reloading
- "Focus Mode" toggle to highlight the core content card
- CSS custom properties for a consistent design system

## Tech Stack

- HTML5
- CSS3 (Grid, Flexbox, custom properties, media queries)
- Vanilla JavaScript (no libraries or frameworks)

## How to Run

No build step required — this is a static site.

1. Clone or download this folder.
2. Open `index.html` directly in your browser, **or** run a local server:
   ```bash
   # Using Python
   python3 -m http.server 8000
   ```
3. Visit `http://localhost:8000` in your browser.

## Project Structure

```
project1/
├── index.html   # Page structure and content
├── styles.css   # Responsive styling and design system
└── app.js       # Navigation toggle, task list, and focus mode logic
```

## Author

**Appiah-Kubi Samuel**
📧 appiahkubisamue779@gmail.com
📞 +233 545 422 8288

---
*Built as part of the DecodeLabs Industrial Training Kit — Batch 2026*
