# Dr. Ritham Debnath – Premium Dental Clinic Website

A luxury, conversion-focused landing page for **Dr. Ritham Debnath – Consultant Dental Surgeon**, built with React, Tailwind CSS, Framer Motion, and Lucide React.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Rose Deep | `#A54763` | Primary CTA, accents |
| Rose Soft | `#D48FA2` | Secondary accent |
| Rose Gold | `#E7BCC5` | Highlights, borders |
| Cream | `#FFF8FA` | Page background |
| Ink | `#1F1F1F` | Body text |

## Section Anchors

- `#hero` – Hero
- `#about` – About Dr. Ritham Debnath
- `#services` – Services grid
- `#why-us` – Why Choose Us
- `#testimonials` – Patient reviews
- `#gallery` – Clinic gallery
- `#contact` – Appointment booking form

## Project Structure

```
src/
├── components/       # Page sections + UI primitives
├── data/content.js   # All copy, services, gallery URLs
├── utils/            # Motion variants + icon map
├── App.jsx
└── index.css         # Tailwind + glass utilities
```

## Tech Stack

- **React 19** + **Vite 8**
- **Tailwind CSS 3**
- **Framer Motion** – scroll reveals, stagger, hover, floating elements
- **Lucide React** – icons
- **Google Fonts** – Plus Jakarta Sans + Fraunces

## Customization

Edit [`src/data/content.js`](src/data/content.js) to update contact info, services, testimonials, and gallery images without touching components.

## Notes

- The booking form is UI-only; submissions show a success toast locally (no backend).
- Gallery and hero images use curated Unsplash URLs.
