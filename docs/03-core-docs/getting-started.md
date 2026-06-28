---
id: getting-started
sidebar_label: Getting Started Guides
---

# 8. Getting Started Guides

> **Tier:** All Tiers | **Part:** Core Documentation Types

## Getting Started Template

```markdown
# Getting Started with [API Name]

Get up and running with [API Name] in 5 minutes.

## Prerequisites
- An account at [platform]
- Your API key (get one at [link])

## Step 1 — Install

npm install [package]

## Step 2 — Authenticate

const client = new APIClient({ apiKey: 'YOUR_API_KEY' });

## Step 3 — Make Your First Request

const response = await client.messages.send({
  content: 'Hello from the API'
});

console.log(response.id); // msg_abc123

## Next Steps
- [How to send bulk messages]
- [How to handle webhooks]
- [API Reference]
```

## NotiFlow Quick Start Example

```markdown
# Send Your First NotiFlow Message in 5 Minutes

## Step 1 — Get Your API Key
Sign up at notiflow.io → Dashboard → API Keys → Create Key

## Step 2 — Send a Message

curl -X POST https://api.notiflow.io/v1/messages
  -H "Authorization: Bearer YOUR_API_KEY"
  -H "Content-Type: application/json"
  -d '{"content": "Hello from NotiFlow!"}'

## Step 3 — Check the Response

{"id": "msg_nf_789", "status": "sent", "created_at": "2026-05-17T10:30:00Z"}

You're live! Your message was sent successfully.
```

## Checklist

- [ ] Prerequisites listed clearly
- [ ] Authentication setup documented
- [ ] First API call walkthrough included
- [ ] Code examples in at least 2 languages
- [ ] Success state clearly defined
- [ ] Next steps provided
