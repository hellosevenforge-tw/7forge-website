---
id: principles
sidebar_label: Technical Writing Principles
---

# 16. Technical Writing Principles

> **Tier:** All Tiers | **Part:** Writing & Style

## The Core Principles

### 1. Use Active Voice
❌ "The request is sent by the client"
✅ "The client sends the request"

### 2. Keep Sentences Short
❌ "In order to be able to send a message using the NotiFlow API, you will need to first ensure that you have obtained a valid API key from the dashboard."
✅ "To send a message, you need an API key. Get one from your dashboard."

### 3. Avoid Jargon
❌ "Instantiate the client object and invoke the send method"
✅ "Create a client and call the send function"

### 4. Use Parallel Structure
❌ "The API can send messages, receiving webhooks, and to delete threads"
✅ "The API can send messages, receive webhooks, and delete threads"

### 5. Be Consistent With Terminology
Pick one term and stick to it:
- API key / access token / auth token — pick one
- endpoint / route / path — pick one
- request body / payload / data — pick one

## Editing Checklist

```markdown
## Before Publishing — Editing Checklist

### Accuracy
- [ ] All code examples tested and working
- [ ] Parameter names match actual API
- [ ] Response examples match actual responses
- [ ] Error codes are accurate

### Clarity
- [ ] No jargon without explanation
- [ ] Sentences are short and direct
- [ ] Active voice used throughout
- [ ] Headings are descriptive

### Consistency
- [ ] Terminology is consistent
- [ ] Code formatting is consistent
- [ ] Heading levels are consistent
```

## Checklist

- [ ] Active voice used throughout
- [ ] Sentences are short and direct
- [ ] Jargon avoided or explained
- [ ] Parallel structure maintained
- [ ] Terminology consistent
