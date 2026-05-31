# Harsh Pandey — Portfolio (React + Vite)

A dynamic, data-driven portfolio. **All content lives in one file** — edit `src/data.js`
and the whole site updates. You never have to touch the layout code.

---

## Run it locally

You need [Node.js](https://nodejs.org) (v18+) installed — free.

```bash
npm install      # install dependencies (one time)
npm run dev      # start dev server → open the printed http://localhost:5173
```

Edit `src/data.js`, save, and the browser updates instantly.

To produce the final static files:

```bash
npm run build    # outputs the site into the dist/ folder
npm run preview  # preview the production build locally
```

---

## Update your content

Open **`src/data.js`**. It's organized into clearly named sections:

| What you want to change | Edit this export |
|---|---|
| Name, role, email, LinkedIn, GitHub, hero text | `profile` |
| The 4 headline numbers | `metrics` |
| "What I can do for you" cards | `services` |
| Toolkit (tool / where used / what it can do) | `toolkit` |
| "Capabilities I can bring" cards | `capabilities` |
| Case studies | `caseStudies` |
| "How I solve problems" | `principles` |
| AI workflow / AI build / full-package text | `aiUse`, `aiBuild`, `fullPackage` |
| Working process steps | `process` |
| Full tech-stack chips | `techStack` |
| Contact form backend | `formspreeId` |

Want to **add a GitHub link**? Put your URL in `profile.github` — the link appears automatically.

---

## Make the contact form actually work (free)

The contact section uses [Formspree](https://formspree.io) (free tier: 50 submissions/month, no server needed).

1. Sign up at formspree.io and create a new form.
2. It gives you an endpoint like `https://formspree.io/f/abcdwxyz`.
3. Copy the ID at the end (`abcdwxyz`) into `formspreeId` in `src/data.js`.

If you leave `formspreeId` empty, the form is replaced by a simple "Email me" button — also fine.

---

## Deploy it for free

Both options below are genuinely $0 for a personal site.

### Option A — Vercel (recommended)
1. Push this folder to a free GitHub repo.
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, click **Add New → Project**.
3. Pick your repo. Vercel auto-detects Vite. Click **Deploy**.
4. You get a free `your-name.vercel.app` URL. Every git push redeploys automatically.

### Option B — Netlify
1. Push to GitHub.
2. [netlify.com](https://netlify.com) → **Add new site → Import from Git**.
3. Build command: `npm run build` · Publish directory: `dist`. Deploy.

### Option C — GitHub Pages (also free)
1. In `vite.config.js`, add `base: "/your-repo-name/"`.
2. `npm run build`, then push the `dist/` folder to a `gh-pages` branch
   (or use the `gh-pages` npm package). Enable Pages in repo settings.

---

## Custom domain (optional)

A `.vercel.app` / `.netlify.app` URL is free forever. If you later want
`harshpandey.dev`, you only pay the domain registrar (~$10–15/yr) — hosting stays free.
