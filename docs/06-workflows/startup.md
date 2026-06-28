---
id: startup
sidebar_label: Startup Workflow
---

# 21. Startup Workflow

> **Tier:** Pro + Agency | **Part:** Company Workflow Simulations

## The Startup Documentation Challenge

Startups face unique pressures: ship fast, iterate constantly, small team, limited time.

## Lean Documentation Process

### Document as You Build
- Write documentation in the same sprint as the feature
- Use the API spec as your starting point
- Keep docs minimal but complete

### Priority Order for Startups
1. Authentication (developers can't start without it)
2. Getting started guide (onboarding is critical)
3. Most-used endpoints (80/20 rule)
4. Error codes (reduces support tickets)
5. Everything else

## Startup Tool Stack

| Tool | Cost | Purpose |
|---|---|---|
| Docusaurus | Free | Documentation site |
| GitHub Pages | Free | Hosting |
| VS Code | Free | Writing |
| Postman | Free tier | API testing |

## NotiFlow Startup Simulation

**Context:** NotiFlow in early days. 2 engineers, 1 technical writer, fast iteration.

**Their process:**
- Each sprint includes a "docs" ticket for new endpoints
- Writer attends the engineering standup
- Docs are written in the same week as the feature ships
- GitHub auto-deploys docs on every merge

**Result:** Documentation is never more than one sprint behind the product.

## Checklist

- [ ] Documentation included in sprint planning
- [ ] Writer has access to engineering standup
- [ ] Docs ticket created for every new endpoint
- [ ] Auto-deploy configured
