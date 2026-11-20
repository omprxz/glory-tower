# The Glory Towers

## Theme and deployment

The primary color, derived theme variables, fonts, and seven color-bar swatches are defined in `src/main.jsx` and `src/index.css`. Set `VITE_COLOR_BAR=off` (or `false`/`0`) to hide the bar; the default is on. `VITE_SITE_URL` documents the canonical production domain.

Forms POST JSON to `public/api/form-submit.php`. On the server, copy `public/api/config.sample.php` to `config.php`, set the recipient and sender addresses, and ensure PHP mail is configured. For local PHP testing, run `php -S localhost:8000 -t public` and set `VITE_FORM_ENDPOINT=http://localhost:8000/api/form-submit.php` in a local `.env`. Apache must preserve the `/api/` files and provide the SPA fallback in `public/.htaccess` so direct route refreshes work.

The legacy UI is retained in `_old_backup/`; see `DESIGN_NOTES.md`, `ASSET_MAP.md`, `PAGE_MAP.md`, `MISSING.md`, and `BACKUP_LOG.md`.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
