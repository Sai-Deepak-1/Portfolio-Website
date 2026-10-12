# Portfolio Website

A static Next.js portfolio rebuild with an original light visual system, accessible navigation overlays, a command palette, project directory filters, and project detail pages.

The reference study is documented in [DESIGN-NOTES.md](DESIGN-NOTES.md). Its visual mechanics informed this implementation; no reference copy, imagery, cut-outs, code, or branding are included here.

## Editing content

Every public personal statement is deliberately prefixed with `[PLACEHOLDER]`. Replace only after approving the relevant biographical, experience, contact, and project detail.

- `src/data/portfolio.ts` is the active project directory. It preserves the project material already present in `src/data/index.tsx` in the new directory/detail-page format.
- `src/app/about/page.tsx`, `src/app/experience/page.tsx`, and `src/app/contact/page.tsx` contain the editable portfolio copy slots.
- `NEXT_PUBLIC_SITE_URL` is the production absolute URL used by metadata, `robots.txt`, and `sitemap.xml`. It falls back to `https://portfolio.example` locally.

## Local development

```bash
npm install
npm run dev
npm run lint
npm run build
```

The production build is static (`output: "export"`) and writes to `out/`.

## Quality decisions

- Full keyboard operation: skip link, visible focus states, Escape-to-close overlays, focus cycling in dialogs, and command palette shortcuts (`Ctrl/Cmd + K`).
- Motion only uses opacity and transforms; `prefers-reduced-motion` exposes final states without animation.
- Decorative artwork is CSS/inline geometry with reserved dimensions, avoiding remote images and layout shift.
- Metadata, Open Graph image, `sitemap.xml`, and `robots.txt` are generated at build time.
- The layout is designed from 360px upward, with 44px controls and single-column fallbacks.

## Deploy on Vercel

1. Push the `codex/portfolio-rebuild` branch and import the repository in [Vercel](https://vercel.com/new).
2. Keep the framework preset as **Next.js**. Vercel will run the package build command; this repo already exports a static site.
3. Add `NEXT_PUBLIC_SITE_URL` in Vercel’s Production environment, for example `https://your-domain.example`. Redeploy after setting it so canonical metadata, sitemap, and robots use the real URL.
4. Attach a domain under **Project Settings → Domains** if needed. Update `NEXT_PUBLIC_SITE_URL` to the final HTTPS domain.
5. Before promoting, replace all `[PLACEHOLDER]` text, test the command palette and mobile menu with a keyboard, and run `npm run lint && npm run build` locally.

No server secrets or API keys are required for the current static deployment.
