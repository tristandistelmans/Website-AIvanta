# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:5173
npm run build    # Production build to dist/
npm run preview  # Preview production build locally
npm run lint     # ESLint check
```

## Architecture

**Single-file component model**: All page sections live in `src/App.jsx` as named functions (not exported). New sections should follow the same pattern — define the component in `App.jsx`, then add it to the `App()` root render at the bottom.

**Page structure (top to bottom):**
`Navbar` → `Hero` → `Features` (process flow) → `ServicesSection` → `Philosophy` → `AboutMe` → `Protocol` → `ContactCTA` → `Footer`

**Reusable UI components** go in `src/components/ui/`. Import via the `@` alias (`@/components/ui/...` resolves to `src/`). Currently: `category-list.jsx`, `cybernetic-bento-grid.jsx`.

**Utility**: `src/lib/utils.js` exports a single `cn(...classes)` helper for conditional classnames.

## Design System

All colors, fonts and radii are defined in `tailwind.config.js` — use these tokens, never raw hex values in JSX.

| Token | Value | Usage |
|---|---|---|
| `cream` | `#F2F0E9` | Light section backgrounds, primary text on dark |
| `charcoal` | `#1A1A1A` | Dark section backgrounds, primary text on light |
| `moss` | `#2E4036` | Accents, highlighted step (process flow) |
| `clay` | `#CC5833` | CTAs, icons, hover states, brand accent |

**Typography classes** (defined in `src/index.css`, not Tailwind plugins):
- `font-heading` — Plus Jakarta Sans (UI text, headings)
- `font-drama` — Cormorant Garamond italic (large decorative headlines)
- `font-body` — Outfit (body paragraphs)
- `font-mono-brand` — IBM Plex Mono (labels, tags, live feed)

**Section pattern**: Dark sections use `style={{ background: 'linear-gradient(135deg, #1e2b24 0%, #1A1A1A 100%)' }}`. Light sections use `className="bg-cream"`.

## Animations

GSAP + ScrollTrigger is registered once at the top of `App.jsx`. All scroll animations use the same pattern:

```js
const sectionRef = useRef(null)
useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.fromTo('.target-class', { y: 40, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.12,
      scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' }
    })
  }, sectionRef)
  return () => ctx.revert()
}, [])
```

Always clean up with `ctx.revert()` and scope animations to `sectionRef` via `gsap.context()`.

## Key CSS

Custom CSS in `src/index.css` (beyond Tailwind):
- `.btn-magnetic` / `.btn-bg` / `.btn-label` — hover fill-up button effect
- `.aurora-layer` / `.aurora-mask` — animated hero background
- `.bento-item` / `.bento-grid` — spotlight mouse-follow effect using `--mouse-x` / `--mouse-y` CSS vars
- `.cursor-blink`, `.pulse-dot`, `.ekg-path`, `.laser-line`, `.slow-rotate` — animation classes

## Language & Tone

The site targets Dutch-speaking KMOs and self-employed entrepreneurs. All copy is in **Dutch**, using formal "u" (not "jij"). The brand voice is: clear, direct, no jargon, urgency without panic.
