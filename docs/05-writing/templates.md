---
id: templates
sidebar_label: Documentation Structure Templates
---

# 18. Documentation Structure Templates

> **Tier:** All Tiers | **Part:** Writing & Style

## Template 1 — Endpoint Reference

```markdown
## [METHOD] /[endpoint]

One-sentence description.

**Endpoint:** `[METHOD] https://api.example.com/v1/[endpoint]`
**Auth:** Required

### Parameters
| Name | Type | Required | Description |
|---|---|---|---|
| | | | |

### Request Example
[code block]

### Response (200 OK)
[code block]

### Response Fields
| Field | Type | Description |
|---|---|---|
| | | |

### Errors
| Status | Code | Description |
|---|---|---|
| | | |
```

## Template 2 — Error Code Reference

```markdown
## Error Codes

| Code | HTTP Status | Description | Resolution |
|---|---|---|---|
| invalid_request | 400 | Required field missing | Check request body |
| unauthorized | 401 | Invalid API key | Verify your API key |
| not_found | 404 | Resource not found | Check the ID |
| rate_limit_exceeded | 429 | Too many requests | Wait and retry |
```

## Template 3 — Authentication Guide

```markdown
## Authentication

[API Name] uses API keys to authenticate requests.

### Get Your API Key
1. Sign in to your dashboard
2. Go to Settings → API Keys
3. Click Create New Key
4. Copy and store your key securely

### Using Your API Key

Include your key in every request:

curl -H "Authorization: Bearer YOUR_API_KEY" https://api.example.com/v1/messages

### Security Best Practices
- Never expose your API key in client-side code
- Rotate keys regularly
- Use environment variables to store keys
```

## Template 4 — Deprecation Notice

```markdown
:::warning Deprecation Notice
This endpoint is deprecated and will be removed on [date].
Use [new endpoint] instead.
[Migration guide →]
:::
```

## Checklist

- [ ] Endpoint template used for all endpoints
- [ ] Error codes documented consistently
- [ ] Authentication guide follows template
- [ ] Deprecation notices added where needed
