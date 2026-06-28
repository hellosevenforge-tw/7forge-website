---
id: ai-workflows
sidebar_label: AI-Assisted Documentation
---

# 27. AI-Assisted Documentation Workflows

> **Tier:** Agency Only | **Part:** Advanced Topics

## Where AI Helps in API Documentation

| Stage | AI Can Help | Human Must Review |
|---|---|---|
| Research | Summarize OpenAPI specs | Verify accuracy |
| First draft | Draft endpoint descriptions | Check technical accuracy |
| Code examples | Generate starter examples | Test all code |
| Error descriptions | Draft error explanations | Verify error behavior |
| Style review | Check grammar and clarity | Final editorial judgment |

## Prompt Templates for Documentation Tasks

### Generate Endpoint Description

```
You are a technical writer. Based on this OpenAPI endpoint definition,
write a clear, developer-friendly description in 1-2 sentences.
Do not use jargon. Write in active voice.

Endpoint: [paste endpoint YAML here]
```

### Generate Code Example

```
Write a [language] code example that shows how to call this API endpoint.
Include error handling. Use realistic values (not foo/bar/test).
Keep it minimal — show only what's needed.

Endpoint details: [paste endpoint details here]
```

### Improve Clarity

```
Rewrite this documentation paragraph to be clearer and more concise.
Use active voice. Keep sentences short. Target audience: junior developers.

Original: [paste paragraph here]
```

## AI Quality Control Checklist

```markdown
## AI Content Review

- [ ] All AI-generated content reviewed by a human
- [ ] Technical accuracy verified by engineer
- [ ] All code examples tested and working
- [ ] Terminology consistent with style guide
- [ ] No hallucinated API parameters or behaviors
```

## Checklist

- [ ] AI workflow defined for your team
- [ ] Prompt templates documented
- [ ] Quality control process established
- [ ] Engineer review required for all AI content
