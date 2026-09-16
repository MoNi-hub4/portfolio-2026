# Monishan Rajhkumar — Portfolio

A responsive React + TypeScript + Tailwind CSS portfolio focused on full-stack projects, e-commerce onsite operations, and Data Science studies.

## Run locally

Use Node.js 20.19+ in the Node 20 line, or Node.js 22.12+.

Extract the ZIP and run:

```bash
cd monishan-portfolio
npm install
npm run dev
```

Open the local address Vite prints, normally http://localhost:5173.

```bash
npm run build
npm run preview
```

The build command checks TypeScript and creates `dist/`. The ZIP includes the complete source and dependency lockfile; installed dependencies and generated build output are excluded. The personalization update needs no additional packages.

## Portfolio content

| Area | Content |
| --- | --- |
| Identity | Monishan Rajhkumar, based in Sri Lanka |
| Work | Onsite Operations Executive at noon |
| Education | BSc studies in Data Science |
| Direction | Full-stack development, workflow automation, and a long-term focus on data engineering |
| Featured projects | PushPilot AI, Commerce CMS, Rental Manager |
| Further work | Banner-search automation, a campaign workflow dashboard in development, and e-commerce analytics coursework |

The copy describes personal projects and prototypes. It does not claim paid client deployments, years of professional software-engineering experience, a completed degree, or a current data-engineering job. Employer performance metrics and internal links are not included.

## Page structure

1. Hero with Monishan's name, a magnetic code/database illustration, navigation, and a contact button.
2. Scrolling tool cards with real logos: four rows on mobile, three on tablet, and two on desktop.
3. About, including work, location, and education.
4. What I do: full-stack development, e-commerce operations, automation, APIs/databases, and Data Science learning.
5. Three stacking project cards with screenshot covers, three-image project viewers with written website links, and an additional work/learning grid.
6. Responsive footer with navigation, contact, copyright, and back-to-top links.

The original dark background, silver gradient headings, Kanit font, purple/orange buttons, reveal animations, and stacking effect are retained. The hero illustration is built in React/CSS and uses Lucide icons. All 12 tool logos are bundled in `public/logos/`, and nine sample project screenshots are bundled in `public/images/projects/`, so page images do not need remote hosts. See `LOGO-SOURCES.md` for the public logo links. PySpark uses the Apache Spark logo; Express is displayed in white for contrast on the dark cards.

The project images are temporary UI samples from NextChat, EverShop, and Shadcn Admin. Cards and viewers label them as samples. Their demo links belong to the sample applications. See `SCREENSHOT-SOURCES.md` for original image links and license notices.

## Files to edit

| File | Purpose |
| --- | --- |
| `src/data.ts` | Professional details, bio, technology rows, skills, project copy, project status, and optional public links |
| `src/sections/MarqueeSection.tsx` | Scrolling tool cards and responsive logo sizing |
| `public/logos/` | Bundled tool logo images |
| `LOGO-SOURCES.md` | Public logo image links and attribution |
| `src/App.tsx` | Page order and shared dialog state |
| `src/sections/HeroSection.tsx` | Hero heading, navigation, and intro layout |
| `src/components/DeveloperVisual.tsx` | Decorative code/database illustration, including its sample code text |
| `src/sections/AboutSection.tsx` | Biography and professional facts |
| `src/sections/ServicesSection.tsx` | The What I do / Skills section; its navigation anchor is `#skills` |
| `src/sections/ProjectsSection.tsx` | Featured project cards and additional work |
| `src/components/ProjectOverview.tsx` | Project screenshot covers and short descriptions |
| `src/components/ProjectGallery.tsx` | Three-image layout and the written live website link |
| `src/components/PortfolioDialog.tsx` | Contact and full project details |
| `public/images/projects/` | Three screenshot images for each project |
| `SCREENSHOT-SOURCES.md` | Sample image sources, attribution, and replacement instructions |
| `src/sections/FooterSection.tsx` | Responsive footer |
| `src/index.css` | Global styles, custom illustrations, and responsive stacking rules |
| `index.html` | Browser title and search-description metadata |
| `public/favicon.svg` | M monogram |

## Add your public contact details

In the existing `site` object in `src/data.ts`, fill in these fields:

```ts
email: "",        // Your real professional email address
githubUrl: "",    // Your public GitHub profile URL
linkedinUrl: "",  // Your public LinkedIn profile URL
```

The contact buttons already open the shared dialog. Email and profile links appear when configured. Until an email is provided, the dialog uses a brief contact-details-coming-soon message. No address or social handle has been invented.

## Replace the project screenshots and website links

In each entry in `projects` in `src/data.ts`, set your three screenshots and your deployed website URL:

```ts
liveUrl: "https://your-project.example", // Replace with your actual deployed URL
sourceUrl: "",                         // Optional public source repository URL
images: [
  "/images/projects/pushpilot-01.png",  // Card cover and main gallery image
  "/images/projects/pushpilot-02.png",  // Second gallery image
  "/images/projects/pushpilot-03.png",  // Third gallery image
],
```

Replace the matching files in `public/images/projects/`, or change the three paths to your own local paths or public image URLs. Use the `commerce-01.png` to `commerce-03.png` and `rental-01.png` to `rental-03.png` files for the other projects. Keep the array at exactly three images.

Remove the project's `sample` object once it has your own screenshots. That removes the sample labels, source credit, and fallback demo URL. A nonempty `liveUrl` always takes priority over the sample demo link. If both links are absent, the viewer shows **Live website coming soon**.

**View Project** opens all three images and a visible, clickable URL above them, followed by the project summary, stack, and features. Selecting an image opens the original at full size in a new tab. Screenshots use `object-contain` to preserve the full UI at every screen size. The dialog supports Escape, backdrop dismissal, restored keyboard focus, and a close button that stays reachable while scrolling.

## Responsive behavior

| View | Behavior |
| --- | --- |
| Mobile, below 768px | Four tool rows, with three unique tools per row; screenshot covers and a stacked footer |
| Tablet, 768–1023px | Three tool rows, with four unique tools per row; two-column footer |
| Desktop, 1024px and above | Two tool rows, with six unique tools per row; larger typography and screenshot covers |

The gallery stacks all three images below 640px. From 640px to 1023px, its main image spans the width with two smaller images below. From 1024px, a large image sits on the left and two smaller images stack on the right. The project viewer scrolls internally on short screens.

Project cards use 85vh slots and 28px stacking offsets. On screens at or below 820px tall, or with reduced motion enabled, cards switch to normal vertical flow to keep the written content reachable. This accommodates short phones and landscape screens. The main wrapper retains `overflow-x: clip` so normal sticky behavior works on taller screens.

The marquee uses passive scroll events and `requestAnimationFrame`, without a React rerender on every scroll. `matchMedia` and `useSyncExternalStore` regroup the tools when the viewport crosses a breakpoint. Adjacent rows move in opposite directions. Pointer and reveal effects respect reduced-motion settings. Kanit weights 300–900 are bundled through `@fontsource/kanit`.

## Validation

TypeScript and the Vite production build passed. Chromium checks covered mobile (390 × 844), tablet (768 × 1024), desktop (1440 × 900), and a small phone (320 × 740), including resizing between views without reloading. The tool section showed four, three, two, and four rows respectively; all 12 unique logos loaded in every view.

All three project cards loaded screenshot covers. Each project viewer loaded exactly three images, preserved the full images with `object-contain`, displayed its clickable website URL, and used the intended responsive gallery layout. Checks confirmed no horizontal overflow, Escape dismissal, restored keyboard focus, restored page scrolling, dialog scroll reset between projects, and a working contact dialog. Screenshot covers also remained visible with reduced motion enabled. No JavaScript exceptions or failed local asset requests were reported.

## Dependency configuration

This project uses React 18, Tailwind CSS 3, Framer Motion 12, Lucide React, Vite, and TypeScript. Install the versions already recorded in `package.json` with `npm install`. Keep the supplied Tailwind v3/PostCSS configuration together.

- [Tailwind CSS v3 with Vite](https://v3.tailwindcss.com/docs/guides/vite)
- [Motion: useScroll](https://motion.dev/docs/react-use-scroll)
- [Motion: useTransform](https://motion.dev/docs/react-use-transform)
