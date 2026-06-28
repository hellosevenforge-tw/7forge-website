---
id: how-to-guides
sidebar_label: How-To Guides & Tutorials
---

# 9. How-To Guides & Tutorials

> **Tier:** Pro + Agency | **Part:** Core Documentation Types

## How-To Guide Template

```markdown
# How to [Task Name]

Brief description of what this guide covers and why developers need it.

## Prerequisites
- [Prerequisite 1]
- [Prerequisite 2]

## Step 1 — [Action]
Description of this step.

[code example]

## Step 2 — [Action]
Description of this step.

[code example]

## Step 3 — [Action]
Description of this step.

[code example]

## Result
What the developer should see when they complete the guide.

## Next Steps
- [Related guide 1]
- [Related guide 2]
```

## NotiFlow Example — How to Handle Webhooks

```markdown
# How to Handle NotiFlow Webhooks

Learn how to receive and process real-time message events.

## Step 1 — Register Your Webhook URL

curl -X POST https://api.notiflow.io/v1/webhooks
  -H "Authorization: Bearer YOUR_API_KEY"
  -d '{"url": "https://yourapp.com/webhooks/notiflow", "events": ["message.sent", "message.failed"]}'

## Step 2 — Handle the Webhook Event

app.post('/webhooks/notiflow', (req, res) => {
  const event = req.body;
  if (event.type === 'message.sent') {
    console.log('Message delivered:', event.data.id);
  }
  res.status(200).send('OK');
});

## Step 3 — Verify the Signature
Always verify webhook signatures to ensure requests are from NotiFlow.
```

## Checklist

- [ ] Task-based title (starts with "How to")
- [ ] Prerequisites listed
- [ ] Steps are numbered and clear
- [ ] Code example for each step
- [ ] Success state shown
- [ ] Next steps provided
