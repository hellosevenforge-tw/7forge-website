---
id: api-reference
sidebar_label: API Reference Documentation
---

# 7. API Reference Documentation

> **Tier:** All Tiers | **Part:** Core Documentation Types

## Endpoint Documentation Template

```markdown
## [HTTP Method] [Endpoint Path]

One-sentence description of what this endpoint does.

### Endpoint
[METHOD] https://api.example.com/v1/[endpoint]

### Authentication
Requires: [API Key / Bearer Token / OAuth]

### Parameters

#### Path Parameters
| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | string | Yes | Unique identifier |

#### Query Parameters
| Parameter | Type | Required | Default | Description |
|---|---|---|---|---|
| `limit` | integer | No | 20 | Results to return (max 100) |

#### Request Body
| Field | Type | Required | Description |
|---|---|---|---|
| `content` | string | Yes | Message content (max 1000 chars) |
| `priority` | string | No | `high`, `normal`, or `low` |

### Request Example

bash:
curl -X POST https://api.example.com/v1/messages
  -H "Authorization: Bearer YOUR_API_KEY"
  -H "Content-Type: application/json"
  -d '{"content": "Hello", "priority": "normal"}'

### Response (201 Created)

{"id": "msg_abc123", "content": "Hello", "priority": "normal", "status": "sent"}

### Error Responses
| Status | Error | Description |
|---|---|---|
| 400 | invalid_request | Required field missing |
| 401 | unauthorized | Invalid API key |
| 429 | rate_limit_exceeded | Too many requests |
```

## NotiFlow Example — POST /messages

**Endpoint:** `POST https://api.notiflow.io/v1/messages`

**Request:**
```bash
curl -X POST https://api.notiflow.io/v1/messages \
  -H "Authorization: Bearer nf_live_abc123xyz" \
  -H "Content-Type: application/json" \
  -d '{
    "content": "Your order has been confirmed.",
    "priority": "high"
  }'
```

**Response (201):**
```json
{
  "id": "msg_nf_789xyz",
  "content": "Your order has been confirmed.",
  "priority": "high",
  "thread_id": "thr_nf_456abc",
  "status": "sent",
  "created_at": "2026-05-17T10:30:00Z"
}
```

## Checklist — For Each Endpoint

- [ ] Method and path clearly stated
- [ ] Authentication requirement documented
- [ ] All parameters documented with types
- [ ] Request example in cURL and one other language
- [ ] Success response documented with example
- [ ] All error responses documented
