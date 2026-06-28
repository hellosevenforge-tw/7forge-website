---
id: github
sidebar_label: GitHub Workflow
---

# 11. GitHub Workflow

> **Tier:** All Tiers | **Part:** Tools & Technology

## Repository Structure for API Docs

```
your-api-docs/
├── docs/
│   ├── getting-started/
│   ├── api-reference/
│   ├── guides/
│   └── concepts/
├── static/
│   └── img/
├── src/
├── docusaurus.config.js
├── sidebars.js
├── package.json
└── README.md
```

## Branching Strategy

| Branch | Purpose |
|---|---|
| `main` | Live published documentation |
| `develop` | Work in progress |
| `feature/endpoint-name` | New endpoint documentation |
| `fix/typo-description` | Small corrections |

## Pull Request Template

```markdown
## What This PR Does
[Brief description of documentation changes]

## Type of Change
- [ ] New endpoint documentation
- [ ] Update existing documentation
- [ ] Fix typo or error
- [ ] Structural change

## Checklist
- [ ] Content is technically accurate (engineer reviewed)
- [ ] Code examples tested and working
- [ ] Links verified
- [ ] Style guide followed
```

## NotiFlow GitHub Example

Branch: `feature/document-post-messages`
PR title: `docs: Add POST /messages endpoint documentation`
Reviewer: NotiFlow senior engineer
Merge: Squash and merge to `main`, auto-deploys to Docusaurus

## Checklist

- [ ] Repository structure set up
- [ ] Branching strategy established
- [ ] PR template created
- [ ] Review process defined
- [ ] Auto-deploy configured
