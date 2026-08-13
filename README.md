# Flushicons

**Simple icons for complex ideas.**

Landing page for Flushicons — a visual language for modern technology.
30 original concept icons (AI, RAG, machine learning, knowledge graphs and more)
for $8. A Flush project, in the flushinc / joelfisher.me black & white brand.

## What this is

A single-page, zero-build static site:

| File | Purpose |
| --- | --- |
| `index.html` | Page markup and content |
| `style.css` | Styling, layout, animations (theme-aware, light + dark) |
| `script.js` | Icon grid, scroll + line-by-line reveals, sticky buy bar, checkout wiring |

No frameworks, no build step. Open `index.html` in a browser and it works.

## Setting up the Lemon Squeezy buy button

Every buy button on the page reads one variable. Open `script.js` and set:

```js
const LEMON_SQUEEZY_URL = "https://YOURSTORE.lemonsqueezy.com/checkout/buy/PRODUCT-ID?embed=1";
```

- Find the link in **Lemon Squeezy → Products → Share / "Buy now" URL**.
- Adding `?embed=1` opens the nicer overlay checkout (the `lemon.js` script
  loads automatically only when an embed link is set).
- Leave the value as `""` while you finish setup — buttons simply scroll to the
  buy section instead of breaking.

## Running locally

Just open the file, or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying

Any static host works. For **GitHub Pages**: Settings → Pages → deploy from the
branch root. The site is the repository root, so no configuration is needed.
