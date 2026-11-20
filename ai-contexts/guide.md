# guide.md — Prisma Magnus UI (React + Vite + Tailwind, branch `prisma`)

Read this fully before touching code. It is short on purpose. Follow it as rules, not suggestions.

## 0. Ground rules
- Work only on branch `prisma`. Never touch `main` or `plain`.
- Content/data never changes (see `src/config/site.js`, `src/data/*`). Only UI changes.
- No hard-coded hex colors. Use theme tokens only (`bg-primary`, `text-primary`, `text-on-primary`, ...).
- Before any fix: reproduce it, find the root cause, then fix. No blind patches.

## 1. Bug: clicking a link (e.g. About Us) opens a WHITE page, refresh fixes it
Root cause is almost always one of these. Check in this order.

1. **A render error unmounts the whole tree.** Open DevTools Console, click the link, read the red error. Typical: a component reads `undefined` data, a hook runs conditionally, or `window`/`document` is used during render. Fix the real error.
2. **Lazy route with no visible fallback.** `React.lazy` + `<Suspense fallback={null}>` shows white while the chunk loads. Put ONE `<Suspense>` inside `Layout`, around `<Outlet />`/`<Routes>`, with a visible fallback (thin top progress bar or a dark-tinted skeleton). Header, color bar and footer must stay mounted while the page loads.
3. **Scroll-reveal elements stuck at `opacity-0`.** `Reveal` / fade-up starts hidden and only shows when an IntersectionObserver fires. After a route change the observer can miss the element (page not scrolled to top, element already in view, observer created before mount). Rules:
   - `useInView` must check `getBoundingClientRect()` on mount; if already in view, reveal immediately.
   - Create the observer in `useEffect`, disconnect in cleanup, and re-run when `location.pathname` changes (add it to deps or `key={pathname}` on the page wrapper).
   - Never rely on CSS alone for `opacity-0`. Hidden state is applied only after JS confirms it can reveal. Add a 1.5 s failsafe timer that forces visible.
   - Respect `prefers-reduced-motion`: render visible, no animation.
4. **Scroll restoration.** Add a `ScrollToTop` component using `useLayoutEffect` (not `useEffect`) so the new page starts at top before paint. Keep support for `#hash` links.
5. **Transparent header on a white background looks like a blank page.** Inner pages must always render the banner (dark gradient overlay) at the top. If the banner image is slow, give the banner a dark `bg-dark` base color so the white header text is never on white.
6. **Add an `ErrorBoundary`** around the routes with a friendly "Something went wrong, Reload" card. A white screen must never be possible again.

Verification: click through every nav link 3 times (cold load, warm, back/forward). No white flash, no console errors, banner and header visible immediately.

## 2. Icons: use one consistent, relevant icon system
- Install once: `npm i lucide-react react-icons`.
- **UI/line icons:** `lucide-react` (consistent 1.5–2px stroke, `currentColor`, so they follow the theme).
- **Brand icons only:** `react-icons/fa6` (WhatsApp, Facebook, Instagram, LinkedIn, YouTube). Lucide has no brand icons.
- One size scale: 16 / 20 / 24 / 32. One stroke width across the site. Icons inherit color via `text-primary`, never hard-coded.
- Put icons in a small wrapper (`<Icon name=... />`) or in the data files (`icon: 'GraduationCap'`) so markup stays data-driven.
- Every icon must be semantically related to its label. Decorative icons get `aria-hidden="true"`; icon-only buttons get `aria-label`.

### Starter mapping (verify each name exists in the installed lucide-react version)
| Use | Icon |
|---|---|
| School | `GraduationCap` |
| Hospital | `Hospital` (fallback `Stethoscope`) |
| Petrol pump | `Fuel` |
| University | `Landmark` |
| Bus terminal | `Bus` |
| Malls | `ShoppingBag` |
| Airport | `Plane` |
| Railway station | `TrainFront` |
| Gym | `Dumbbell` |
| Swimming pool | `Waves` |
| Clubhouse | `Building2` |
| Kids play | `Baby` |
| Tennis / sports | `Trophy` |
| Park / green | `Trees` |
| CCTV / security | `Cctv`, `ShieldCheck` |
| Lift | `ArrowUpDown` |
| Parking | `ParkingCircle` |
| Power backup | `Zap` |
| Address | `MapPin` |
| Phone | `PhoneCall` |
| Email | `Mail` |
| Brochure download | `Download` or `FileDown` |
| Floor plan | `LayoutGrid` or `Ruler` |
| Master plan | `Map` |
| Stats: apartments | `Building` |
| Stats: towers | `Building2` |
| Stats: green space | `Leaf` |
| Stats: amenities | `Sparkles` |
| Book appointment | `CalendarCheck` |
| Social | `FaWhatsapp`, `FaFacebookF`, `FaInstagram`, `FaLinkedinIn`, `FaYoutube` |

For any amenity not listed: browse https://lucide.dev/icons, search by meaning (e.g. "wifi", "garden", "meditation"), pick the most literal match, and add it to the data file. If no literal match exists, use the PDF/brochure's own icon image from `public/` instead of a loosely related icon.

Where icons must appear: nav dropdown items, location cards, amenity cards, stats, section eyebrows (optional), contact rows, footer columns, buttons (arrow/download), mission/vision, testimonial quote mark, FAQ chevrons.

## 3. Floating contact overlay: Call + WhatsApp
- The floating overlay (TalkToUsButton) must contain BOTH actions: **Call** and **WhatsApp**.
- Call uses a proper **handset/call icon** (`PhoneCall` from lucide, or Material `MdCall`), NOT a landline "telephone" icon. WhatsApp uses `FaWhatsapp`.
- Call → `tel:` link with the number from `site.js`. WhatsApp → `https://wa.me/<number digits only>?text=<encoded greeting with project name>`, `target="_blank" rel="noopener noreferrer"`.
- Two round buttons stacked at bottom-right (WhatsApp in its brand color is allowed as the single exception to the no-hex rule, defined as a token). Call uses `bg-primary text-on-primary`.
- Min 48×48 px touch targets, `aria-label="Call us"` / `aria-label="Chat on WhatsApp"`, `z-index` below modal and lightbox, above back-to-top. Avoid overlapping the back-to-top button (stack or offset it).
- Phone numbers come from ONE place (`site.js`). If two different numbers exist in the project, use the higher-priority source and log it in `MISSING.md`.

## 4. Color theme bar: very top, env-controlled
- Layout order, top to bottom: **Color bar → Header → Hero/Banner → rest.** The bar is first in the DOM inside `Layout`, in normal flow, above everything including the header.
- Header (transparent) sits directly below the bar. After scrolling it becomes `fixed top-0` solid. Hero/banner padding accounts for `--topbar-h`.
- Expose `--topbar-h` on `:root`: the real bar height when ON, `0px` when OFF. Measure with a `ResizeObserver` or fixed height class, set in `useLayoutEffect`.
- ON/OFF: `VITE_COLOR_BAR` in `.env` (`true/on/1` shows, `false/off/0` hides). If the key is missing, use `showColorBar` in `src/config/theme.js`.
- When OFF: return `null` (nothing rendered, no empty space, `--topbar-h: 0px`), AND ignore any saved color in localStorage (use the default primary). No flash on load: `applyTheme()` runs in `main.jsx` before first render.
- Contents: "Choose Theme" label + 7 round swatch buttons (`aria-label`, `aria-pressed`) + small Reset. Clicking applies instantly, saves to localStorage inside try/catch.

## 5. Premium design standards (apply to every page you touch)
- Restraint: one primary color, generous whitespace, one container width, consistent section rhythm (`py-20 lg:py-28`).
- Typography: serif heading font + clean sans body, uppercase tracked eyebrow, tight leading on H1/H2, muted body color.
- Depth: soft layered shadows, 1px borders at low opacity, subtle gradients on image overlays only.
- Motion: 200–400 ms ease-out, small distances (fade-up 16–24 px), hover lift 2–4 px, image zoom 1.05. Nothing bounces, nothing blocks content.
- Images: consistent aspect ratios, `object-cover`, explicit width/height, lazy below the fold.
- Contrast: AA on all 7 themes. Text on primary uses `text-on-primary`.
- Mobile first: test 360 px before desktop. Tap targets ≥ 44 px.

## 6. Before you say "done"
- `npm run lint` and `npm run build` pass.
- Every route at 360 px and 1280 px: no white screen, no console errors.
- Color bar ON/OFF, all 7 colors, refresh keeps color.
- Call + WhatsApp links work. Icons all present and relevant.
- Report: what changed, what is still missing, proof that `main` and `plain` are untouched.