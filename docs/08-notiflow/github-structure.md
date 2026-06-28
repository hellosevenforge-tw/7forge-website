---
id: github-structure
sidebar_label: NotiFlow GitHub Structure
---

# NotiFlow GitHub Repository Structure

> Use this as your model when setting up documentation on GitHub.

```
notiflow-docs/
├── docs/
│   ├── getting-started/
│   │   ├── quick-start.md
│   │   ├── authentication.md
│   │   └── first-message.md
│   ├── api-reference/
│   │   ├── messages.md
│   │   ├── threads.md
│   │   └── webhooks.md
│   ├── guides/
│   │   ├── send-bulk-messages.md
│   │   ├── handle-webhooks.md
│   │   └── manage-threads.md
│   └── reference/
│       ├── error-codes.md
│       └── rate-limits.md
├── static/
│   └── img/
├── src/
│   └── css/
│       └── custom.css
├── docusaurus.config.js
├── sidebars.js
├── package.json
└── README.md
```

## Branch Strategy

| Branch | Purpose |
|---|---|
| `main` | Live published docs |
| `develop` | Work in progress |
| `feature/[name]` | New documentation |
| `fix/[name]` | Corrections |

## GitHub Actions — Auto Deploy

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

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

## PR Template

```markdown
## Documentation PR

### What This Changes
[Description]

### Checklist
- [ ] Technically accurate (engineer reviewed)
- [ ] Code examples tested
- [ ] Style guide followed
- [ ] Links verified
```
