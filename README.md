## GitHub Pages Deployment

This project deploys Storybook to GitHub Pages via GitHub Actions.

Deployment details:

- Workflow: `.github/workflows/gh-pages.yml`
- Trigger: push to `main`
- Build output: `storybook-static/`
- Pages URL: `https://chrisleggs.github.io/WDH-Design-System`

Troubleshooting 404:

- Ensure Settings → Pages → Source is set to “GitHub Actions”.
- Check Actions tab: both `build` and `deploy` jobs must succeed.
- First publish may take a few minutes; hard refresh the URL.
- All asset references are relative (e.g., `vendor/datahub/...`) to support project subpath hosting.
# WDH-Design-System
WDH Design System
