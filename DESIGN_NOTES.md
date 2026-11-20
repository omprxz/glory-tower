# Design notes

The reference screenshots were not present in this checkout, so the rebuilt UI follows the supplied premium real-estate brief: editorial serif headings, restrained sans-serif utility text, burgundy accent, generous white space, full-bleed photography, dark image overlays, outlined cards, and a mobile-first single-column layout. Desktop grids use four location/stat columns and three image/card columns; mobile collapses these to one column with a compact navigation drawer.

`Cinzel` is used for headings and `Cormorant Garamond` for body copy, matching the existing project typography. The theme is centralized in `src/main.jsx` and `src/index.css`; the seven theme swatches use CSS variables rather than hard-coded component colors.
