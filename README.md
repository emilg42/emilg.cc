# emilg.cc

Personal portfolio, built as a static [Astro](https://astro.build) site and deployed to GitHub Pages.

## Commands

| Command           | Action                                   |
| ----------------- | ---------------------------------------- |
| `npm install`     | Install dependencies                     |
| `npm run dev`     | Start the dev server at `localhost:4321` |
| `npm run build`   | Build the site to `dist/`                |
| `npm run preview` | Serve the build locally                  |

## Structure

```
src/
├── assets/      images and SVG icons (imported, optimized at build time)
├── components/  page sections
├── layouts/     page shell: head, theme colors, global styles
├── lib/         spring animation for nav indicator and theme toggle
└── pages/       routes (index.astro → /)
public/          served as-is (fonts, favicons)
```

## Deployment

Every push to `main` builds and deploys the site via [.github/workflows/deploy.yml](.github/workflows/deploy.yml).
In the repository settings, set **Pages → Source** to **GitHub Actions** and add the custom domain there.
