# Lucas Linkowski — Personal promo site

Static personal and professional site for **Lucas Linkowski**: malware defense, reverse engineering, detection engineering, GenAI security writing, open-source projects, and photography. Primary domain: **https://lucaslinkowski.com** (see `CNAME` for GitHub Pages custom domain).

## Purpose for collaborators and LLM sessions

Use this README as default context when editing the site in a new chat. The site is **not** a framework app: it is hand-authored HTML plus shared CSS and JS. Changes are usually copy edits, new blog posts cloned from the template, or style tweaks in one stylesheet.

## Tech stack

- HTML5 pages, no build step
- CSS: `css/style.css` (single source of layout, components, responsive rules)
- JavaScript: `js/main.js` (home page hero typing animation, nav, scroll reveal, canvas background on index only)
- Fonts: Google Fonts (Plus Jakarta Sans, JetBrains Mono), linked per page

## Repository layout

| Path | Role |
|------|------|
| `index.html` | Home: hero, about, expertise, projects, malware news, arsenal, thought leadership, blog preview, gallery preview, connect |
| `blog.html` | Blog listing with category filters (inline script) |
| `blog/*.html` | Individual posts; paths to CSS are `../css/style.css` |
| `blog/post-template.html` | Clone for new posts; keep nav and footer in sync with a recent live post |
| `gallery.html` | Photo gallery with lightbox script |
| `support.html` | **Site notes** page (URL unchanged): independence disclaimer, low-profile support link, contact email. Not a heavy commercial landing page |
| `css/style.css` | Global styles |
| `js/main.js` | Home page behaviour |
| `assets/` | Images, `favicon.svg` |
| `rss.xml` | Blog RSS feed; update when adding posts |
| `sitemap.xml` | URLs for crawlers |
| `robots.txt` | Crawl hints |
| `site.webmanifest` | PWA-lite manifest |
| `lucaslinkowski_personal_site_seo_package.md` | SEO notes package (may predate some copy; reconcile if you change titles sitewide) |
| `lucaslinkowski_personal_site_stage1_support_package.md` | Earlier support-related notes |

## Positioning and compliance-oriented copy (important)

The public site is framed as an **independent personal** site:

- **Footer** on main pages and blog posts includes a short disclaimer (`site-disclaimer` in CSS): independent personal site; views, writing, code, and research are the author's own and do not represent any employer.
- **About** on the home page includes an extra independence note (`site-note`).
- **Structured data** and **document title / Open Graph / Twitter** metadata avoid banking-specific job titles; use neutral professional labels aligned with current `index.html`.
- **Buy Me a Coffee** appears as a **text link** (footer and connect area), not as a primary commercial CTA block on the home connect row.
- **`support.html`** is titled **Site notes** in the UI; nav label on that page is **Notes**.

When adding features, avoid language that reads like paid advisory, sponsorship sales, or employer endorsement unless policy and disclosure requirements are satisfied.

## Navigation conventions

- `index.html` uses in-page anchors (`#about`, `#connect`, etc.) and links to `blog.html`, `gallery.html`.
- Subpages use `index.html#...` for cross-links and a scrolled navbar (`class="scrolled"` on nav).
- The **Notes** nav item exists on `support.html` only; the home page does not currently link to `support.html` in the main nav (optional future addition).

## Blog workflow

1. Copy `blog/post-template.html` to `blog/your-slug.html`.
2. Set `<title>`, meta description, canonical, OG/Twitter tags, article header, and body.
3. Add the post to `blog.html` grid (and filters via `data-category`).
4. Add a home **Latest Writing** card on `index.html` if it should be featured.
5. Append an `<item>` to `rss.xml` and an entry to `sitemap.xml` if you maintain them.

## Shared CSS classes introduced for disclaimers and support

- `.site-note` — about-section independence text
- `.connect-note` — subtle line under connect cards
- `.support-link-inline` — muted inline link by default; under Connect, `.connect-note .support-link-inline` is accent-colored and underlined without hover
- `.site-disclaimer` / `.site-disclaimer--footer` — footer disclaimer block

## Local preview

Open `index.html` in a browser, or from the repo root run a static server, for example:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080/`.

## Owner

Lucas Linkowski — cybersecurity professional; site content is personal and does not represent any employer.
