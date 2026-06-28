---
id: code-snippets
sidebar_label: Code Snippets & Examples
---

# 17. Code Snippets & Examples

> **Tier:** All Tiers | **Part:** Writing & Style

## Rules for Good Code Examples

1. **Test every example** — If it doesn't run, don't publish it
2. **Use realistic values** — Not `foo`, `bar`, `test123`
3. **Show error handling** — Real code handles failures
4. **Keep it minimal** — Show only what's needed
5. **Use multiple languages** — At minimum cURL + one SDK

## Good vs Bad Examples

❌ **Bad — Unrealistic and no error handling:**
```javascript
const result = api.send("test message");
console.log(result);
```

✅ **Good — Realistic with error handling:**
```javascript
try {
  const message = await notiflow.messages.send({
    content: 'Your order #1234 has been confirmed.',
    priority: 'high'
  });
  console.log('Sent:', message.id);
} catch (error) {
  if (error.status === 429) {
    console.error('Rate limit hit. Retry after:', error.retryAfter);
  } else {
    console.error('Failed to send:', error.message);
  }
}
```

## NotiFlow Code Example — Python

```python
import notiflow

client = notiflow.Client(api_key="nf_live_abc123xyz")

try:
    message = client.messages.send(
        content="Your order has been confirmed.",
        priority="high"
    )
    print(f"Message sent: {message.id}")
except notiflow.RateLimitError as e:
    print(f"Rate limited. Retry after {e.retry_after} seconds")
except notiflow.APIError as e:
    print(f"API error: {e.message}")
```

## Checklist

- [ ] All code examples tested and working
- [ ] Realistic values used (not foo/bar/test)
- [ ] Error handling included
- [ ] Examples in at least cURL + one language
- [ ] Code is minimal and focused
