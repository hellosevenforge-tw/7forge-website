---
id: localization
sidebar_label: Localization & Internationalization
---

# 25. Localization & Internationalization

> **Tier:** Agency Only | **Part:** Advanced Topics

## Writing for Translation

When documentation will be translated, write in a way that translates cleanly.

### Rules for Translation-Ready Writing

1. **Use simple, direct sentences** — Complex sentences are hard to translate
2. **Avoid idioms** — "Hit the ground running" doesn't translate well
3. **Avoid culture-specific references** — Sports metaphors, holidays, etc.
4. **Use active voice** — Passive voice is harder to translate
5. **Define acronyms** — Always spell out on first use

### Terminology Glossary Template

```markdown
## Terminology Glossary — [Product Name]

| English Term | Definition | Notes for Translators |
|---|---|---|
| API key | A unique identifier used for authentication | Do not translate "API" |
| endpoint | A specific URL path in the API | Technical term, may keep in English |
| webhook | An HTTP callback sent by the API | Technical term, may keep in English |
| rate limit | Maximum requests allowed per time period | Translate the concept, not necessarily the term |
```

## Checklist

- [ ] Simple, direct sentences used throughout
- [ ] Idioms and culture-specific references removed
- [ ] Terminology glossary created
- [ ] Acronyms defined on first use
