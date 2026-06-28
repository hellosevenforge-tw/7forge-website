---
id: docs-as-code
sidebar_label: Docs-as-Code Methodology
---

# 12. Docs-as-Code Methodology

> **Tier:** Pro + Agency | **Part:** Tools & Technology

## What Is Docs-as-Code?

Treating documentation like software — version controlled, reviewed, tested, and deployed automatically. Used by Stripe, GitHub, Twilio, and Meta.

## The Complete Pipeline

```
Write in VS Code → Commit to GitHub → PR Review → Merge → Auto-Deploy → Live Docs
```

## Why It Works

| Benefit | How |
|---|---|
| Always up to date | Docs live with the code |
| Peer reviewed | PRs catch errors before publishing |
| Version controlled | Every change tracked, reversible |
| Automated | No manual publishing steps |

## NotiFlow Docs-as-Code Pipeline

1. Writer creates branch `feature/post-messages-docs`
2. Writes markdown in VS Code
3. Opens PR on GitHub
4. NotiFlow engineer reviews for accuracy
5. PR merged to `main`
6. GitHub Action triggers Docusaurus build
7. Site auto-deploys to GitHub Pages
8. Live in 2 minutes

## Checklist

- [ ] Docs stored in version control (GitHub)
- [ ] Review process via pull requests
- [ ] Auto-build configured
- [ ] Auto-deploy configured
- [ ] Team members trained on workflow
