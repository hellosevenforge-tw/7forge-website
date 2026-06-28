---
id: postman
sidebar_label: Postman & API Testing
---

# 15. Postman & API Testing

> **Tier:** Pro + Agency | **Part:** Tools & Technology

## Setting Up for Documentation Research

Postman is how you understand an API before writing about it.

## Testing Checklist Per Endpoint

```markdown
## Postman Testing — [Endpoint Name]

- [ ] Successful request (200/201)
- [ ] Authentication error (401)
- [ ] Invalid request (400/422)
- [ ] Not found (404)
- [ ] Rate limit response (429)

### Notes
- What did the response actually look like?
- Any unexpected fields in the response?
- Any undocumented behavior?
```

## NotiFlow Postman Collection Structure

```
NotiFlow API
├── Authentication
│   └── Generate API Key
├── Messages
│   ├── POST Send Message
│   ├── GET Retrieve Message
│   └── DELETE Delete Message
├── Threads
│   └── GET List Threads
└── Webhooks
    └── POST Register Webhook
```

## Checklist

- [ ] Postman account set up
- [ ] Environment variables configured (API key, base URL)
- [ ] All endpoints tested
- [ ] All error responses captured
- [ ] Collection exported for buyers
