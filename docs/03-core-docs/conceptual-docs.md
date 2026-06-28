---
id: conceptual-docs
sidebar_label: Conceptual Documentation
---

# 10. Conceptual Documentation

> **Tier:** Pro + Agency | **Part:** Core Documentation Types

## What Is Conceptual Documentation?

Conceptual docs explain the "why" and "how" behind your API — not step by step, but architecturally. They help developers understand the system so they make fewer mistakes.

## Key Concepts to Document

- **Authentication** — How it works, not just how to do it
- **Rate Limiting** — What the limits are and how they reset
- **Webhooks** — How the delivery system works
- **Versioning** — How API versions are managed
- **Error Philosophy** — Why errors are structured the way they are

## Concept Template

```markdown
# [Concept Name]

## Overview
What is this concept and why does it exist?

## How It Works
Explanation of the mechanics.

## Example
A concrete example showing the concept in action.

## Best Practices
What developers should know to use this correctly.

## Related
- [Related concept 1]
- [Related guide 1]
```

## NotiFlow — Rate Limiting Concept

```markdown
# Rate Limiting

NotiFlow uses rate limiting to ensure fair usage and platform stability.

## Limits
- 100 requests per minute per API key
- 1,000 requests per hour per account

## How It Works
When you exceed the limit, NotiFlow returns a 429 status with a
Retry-After header telling you when to retry.

## Best Practice
Implement exponential backoff in your integration.
```

## Checklist

- [ ] Concept clearly defined
- [ ] Why it exists explained
- [ ] How it works explained
- [ ] Concrete example provided
- [ ] Best practices included
