---
id: versioning
sidebar_label: Versioning & API Evolution
---

# 24. Versioning & API Evolution

> **Tier:** Pro + Agency | **Part:** Advanced Topics

## API Versioning Strategies

| Strategy | How | Example |
|---|---|---|
| URL versioning | Version in URL path | `/v1/messages`, `/v2/messages` |
| Header versioning | Version in request header | `API-Version: 2` |
| Parameter versioning | Version as query param | `/messages?version=2` |

URL versioning is the most common and developer-friendly. Use it.

## Deprecation Notice Template

```markdown
:::warning Deprecated — v1 endpoint
This endpoint is deprecated and will be removed on **2027-01-01**.

**Migrate to:** `POST /v2/messages`
**Migration guide:** [View migration guide →]

Key changes in v2:
- `content` field renamed to `body`
- `priority` field now accepts `urgent` in addition to `high`, `normal`, `low`
:::
```

## Migration Guide Template

```markdown
# Migrating from v1 to v2

## What Changed
| v1 | v2 | Notes |
|---|---|---|
| `content` field | `body` field | Rename in your request body |
| No `urgent` priority | `urgent` priority available | Optional — use if needed |

## Migration Steps

### Step 1 — Update your request body
v1: {"content": "Hello"}
v2: {"body": "Hello"}

### Step 2 — Update your endpoint URL
v1: POST /v1/messages
v2: POST /v2/messages

### Step 3 — Test in sandbox
Run your integration against our sandbox before going live.

### Need Help?
Contact support@notiflow.io
```

## Checklist

- [ ] Versioning strategy decided and documented
- [ ] Deprecation notices added to all deprecated endpoints
- [ ] Migration guide written for breaking changes
- [ ] Deprecation timeline communicated clearly
