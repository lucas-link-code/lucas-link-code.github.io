# Lucas Linkowski — Personal promo site

Static personal and professional site for Lucas Linkowski: malware defense, reverse engineering, detection engineering, GenAI security writing, open-source projects, and photography. Primary domain: https://lucaslinkowski.com (see `CNAME` for GitHub Pages custom domain).

## Purpose for collaborators and LLM sessions

Use this README as default context when editing the site in a new chat. The site is not a framework app: it is hand-authored HTML plus shared CSS and JS. Changes are usually copy edits, new blog posts cloned from the template, or style tweaks in one stylesheet.

## Tech stack

- HTML5 pages, no build step
- CSS: `css/style.css` (single source of layout, components, responsive rules)
- JavaScript: `js/main.js` (home page hero typing animation, nav, scroll reveal, canvas background on index only; also handles share button clicks on article pages)
- Fonts: Google Fonts (Plus Jakarta Sans, JetBrains Mono), linked per page

## Repository layout

| Path | Role |
|------|------|
| `index.html` | Home: hero, about, expertise, projects, malware news, arsenal, thought leadership, blog preview, gallery preview, connect |
| `blog.html` | Writing hub with Published and In Pipeline sections, category filters, RSS link, post count |
| `blog/*.html` | Individual posts; paths to CSS are `../css/style.css` |
| `blog/post-template.html` | Clone for new posts; update placeholders then wire prev/next nav |
| `gallery.html` | Photo gallery with lightbox script |
| `support.html` | Site notes page: independence disclaimer, support link, contact email |
| `css/style.css` | Global styles including blog hub, article page, prev/next nav |
| `js/main.js` | Home page behaviour; share button delegation for article pages |
| `assets/` | Images, `favicon.svg` |
| `rss.xml` | Blog RSS feed; update when adding posts |
| `sitemap.xml` | URLs for crawlers |
| `robots.txt` | Crawl hints |
| `site.webmanifest` | PWA-lite manifest |
| `lucaslinkowski_personal_site_seo_package.md` | SEO notes package |

## Publication model

The writing section is structured as a two-level publication system.

### Level 1 — Writing hub (blog.html)

`blog.html` is the authoritative index for all written content. It separates posts into Published and In Pipeline sections using `blog-section-label` headings, displays a meta row with post count and RSS link, and uses `blog-card--soon` for upcoming posts so they are visually distinct and non-navigable. Category filter buttons use `data-category` attributes and are handled by inline JS in `blog.html`.

### Level 2 — Individual article pages (blog/*.html)

Each post is a self-contained canonical page. The page structure is:

- `<a class="article-eyebrow">` — top back-to-writing link with chevron SVG
- `<header class="article-header">` — tag, h1, article-meta with time, read time, and optional Updated badge
- `<div class="article-body">` — prose styled from global CSS
- `<footer class="article-footer">` — share buttons, prev/next nav, back button

All article styling is in `css/style.css`. Do not add inline `<style>` blocks to post files.

### Homepage preview (index.html)

The Latest Writing section in `index.html` shows the three most recent published posts in reverse-chronological order using `blog-card-foot` and `blog-card-cue`. It links to `blog.html` via a Browse all writing CTA. Update this section manually when adding a new post if it belongs in the top three.

## Blog workflow — adding a new post

1. Copy `blog/post-template.html` to `blog/your-slug.html`.
2. Replace all SLUG, ARTICLE TITLE, ARTICLE DESCRIPTION, date, read time, and category placeholders. Update article:published_time, datePublished, dateModified in metadata. Set the `<time datetime="YYYY-MM-DD">` element to the publish date.
3. If the post was later updated, add `<span class="meta-sep" aria-hidden="true"></span><span class="meta-updated">Updated Mon YYYY</span>` in the article-meta and set article:modified_time and dateModified to the update date.
4. Wire prev/next navigation in the article-footer. The post order is chronological by publish date. Update the previous post's article-nav-next link and the next post's article-nav-prev link to point to the new post.
5. Add a card in `blog.html` under the Published section using the `blog-card-foot` pattern. Move an existing pipeline card to Published if applicable.
6. If the new post is in the top three by date, update the Latest Writing section in `index.html`.
7. Add an `<item>` to `rss.xml` (newest at top) and a `<url>` entry to `sitemap.xml`.

## Shared CSS classes for the publication system

### Blog hub

- `.blog-index-main` — main element padding for blog.html
- `.blog-meta-row` — mono stat row below page title: post count, RSS link, pipeline link
- `.blog-section-label` — uppercase mono section divider between Published and In Pipeline
- `.blog-card-foot` — flex row inside a card: date left, Read cue right
- `.blog-card-cue` — mono Read arrow that shifts on card hover
- `.blog-card--soon` — dashed border, reduced opacity, cursor default; used for pipeline cards

### Article pages

- `.article-page` — main element with top padding for post pages
- `.article-eyebrow` — back-to-writing breadcrumb link at top of article
- `.article-header` — contains tag, title, meta; max-width 900px with border-bottom
- `.article-title` — h1 with fluid font-size clamp
- `.article-meta` — flex row with time, read time, optional Updated badge; uses `.meta-sep` dots and `.meta-updated` for the update indicator
- `.article-body` — prose block; max-width 900px; styles p, h2, h3, code, pre, blockquote, ul, ol, li, strong, img, a, and `.article-table`
- `.article-footer` — share buttons, article-nav, and back button; max-width 900px
- `.article-nav` — prev/next post navigation bar; uses `.article-nav-link`, `.article-nav-prev`, `.article-nav-next`, `.article-nav-dir`, `.article-nav-title`
- `.article-footer-back` — wrapper for the back to writing button

### Disclaimers and support

- `.site-note` — about-section independence text
- `.connect-note` — subtle line under connect cards
- `.support-link-inline` — muted inline link; accented under Connect
- `.site-disclaimer` / `.site-disclaimer--footer` — footer disclaimer block

## Positioning and compliance-oriented copy

The public site is framed as an independent personal site:

- Footer on main pages and blog posts includes a short disclaimer: independent personal site; views, writing, code, and research are the author's own and do not represent any employer.
- About on the home page includes an extra independence note.
- Structured data and document title and Open Graph metadata avoid banking-specific job titles.
- Buy Me a Coffee appears as a text link in footer and connect area only.
- `support.html` is titled Site notes in the UI.

When adding features, avoid language that reads like paid advisory, sponsorship sales, or employer endorsement.

## Navigation conventions

- `index.html` uses in-page anchors and links to `blog.html`, `gallery.html`.
- Article pages use `../index.html#...` for cross-links and start with `class="navbar scrolled"` on the nav element.
- Blog nav link in article pages has `class="active"`.

## Local preview

From the repo root:

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080/

## Owner

Lucas Linkowski — cybersecurity professional; site content is personal and does not represent any employer.
