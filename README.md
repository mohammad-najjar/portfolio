# Mohammad Najjar — Bilingual Portfolio

A static, bilingual (English default, Arabic secondary) portfolio built with HTML5, CSS3 and vanilla JavaScript. No backend, no build tools.

## Files

| File | Purpose |
|---|---|
| `index.html` | Page structure, SEO metadata, English default content |
| `style.css` | Design, responsive layout, RTL support (CSS logical properties) |
| `script.js` | Translation dictionary, language switcher, form validation, modal, mobile menu |

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Deploy to GitHub Pages

1. Create a GitHub repository. Name it `mohammad-najjar.github.io` for a root URL (`https://mohammad-najjar.github.io/`), or any name (for example `portfolio`) for `https://mohammad-najjar.github.io/portfolio/`.
2. Put `index.html`, `style.css`, `script.js` and `README.md` in the repository root, then push:
   ```bash
   git init
   git add .
   git commit -m "Add portfolio"
   git branch -M main
   git remote add origin https://github.com/mohammad-najjar/<repo-name>.git
   git push -u origin main
   ```
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**, choose branch `main` and folder `/ (root)`, then **Save**.
5. Wait a minute or two. The live URL appears at the top of the Pages settings.
6. After deploying, add `<link rel="canonical" href="YOUR-URL">` and `og:url` to the `<head>` of `index.html`, and optionally an `og:image`.

## How the translation system works

- All text lives in one dictionary at the top of `script.js` (`DICT.en` and `DICT.ar`) under stable keys such as `nav.home` and `projects.brewhouse.description`.
- Elements use `data-i18n="key"` for text and `data-i18n-attr="aria-label:key"` for attributes. Text is set with `textContent`, never `innerHTML`.
- English is the default. The browser language is never used. The visitor's choice is saved in `localStorage` (`portfolio-lang`) and applied before first paint.
- Switching updates `lang`, `dir`, the page title, the meta description and Open Graph tags.

**Edit a text:** change it in both `DICT.en` and `DICT.ar`, and update the English text in `index.html` (the static fallback).
**Add a language string:** add the same key to both dictionaries and add `data-i18n="your.key"` to the element.

## Content notes

- Repositories: all six GitHub URLs returned HTTP 200 when checked.
- Project descriptions are intentionally short and generic. GitHub provided no detailed descriptions, and none were invented. Replace them with your own wording.
- Live demos are shown only for Brew House, Dashly, TaskFlow and SkillDNA, as supplied.
- Achievements are counts taken from this page (6 projects, 4 demos, 2 languages).
- The contact form has no backend. It validates input, then opens the visitor's email app (`mailto:`).
