# 7Forge — API Documentation Operating System

> Modern API Documentation System for Technical Writers, Freelancers, Startups & Agencies

---

## Quick Start (3 Steps)

### Step 1 — Install
```bash
npm install
```

### Step 2 — Run Locally
```bash
npm start
```
Opens at http://localhost:3000

### Step 3 — Build for Production
```bash
npm run build
```

---

## Deploy Free to GitHub Pages

1. Push this repo to GitHub
2. Go to Settings → Pages → GitHub Actions
3. Add this file as `.github/workflows/deploy.yml`:

```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

4. Every push to `main` auto-deploys your docs. Free forever.

---

## How to Customize

1. Edit `docusaurus.config.js` — Change your site title, URL, and branding
2. Edit any `.md` file in `/docs/` — All your content
3. Edit `src/css/custom.css` — Change colors and styling
4. Edit `sidebars.js` — Change navigation structure

---

## System Contents

| Part | Sections |
|---|---|
| Foundation | Introduction, Audience Analysis, Project Scoping |
| Workflow | Lifecycle, Research, Content Planning |
| Core Docs | API Reference, Getting Started, How-To Guides, Conceptual |
| Tools | GitHub, Docs-as-Code, OpenAPI, VS Code, Postman |
| Writing | Principles, Code Examples, Templates, Style Guide |
| Workflows | Freelancer, Startup, SaaS, Enterprise |
| Advanced | Versioning, Localization, Governance, AI Workflows |
| NotiFlow | Overview, API Reference, GitHub Structure, OpenAPI Spec, SOPs |

---

Built by **7Forge** — Modern Documentation Systems for Technical Writers, Startups & Agencies
