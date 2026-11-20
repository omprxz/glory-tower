# Page map

The shared shell is rendered by `Layout`, with `TopBar`, responsive `Header`, page banners, contact modal, floating phone action, and `Footer`. `/` contains the complete landing sequence: hero, intro, location merits, plans, amenities, stats, gallery, why-us, FAQ, and map. `/about-us`, `/floor-plan`, `/master-plan`, `/amenities`, `/location-map`, `/download-brochure`, `/contact-us`, blogs, construction, testimonial and legacy post routes are all wired in `src/App.jsx`. Legacy `/about` and `/contact` redirect to their new canonical routes.

Legacy component implementations and pages are preserved under `_old_backup/`; their content is represented in the new data-driven sections.
