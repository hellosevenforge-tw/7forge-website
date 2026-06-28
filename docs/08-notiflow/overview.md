---
id: overview
sidebar_label: NotiFlow Overview
---

# NotiFlow API — Overview

> **NotiFlow** is the fictional SaaS messaging company used throughout the 7Forge system to teach API documentation through realism.

---

## What Is NotiFlow?

NotiFlow is a messaging platform API that allows developers to send, receive, and manage messages across multiple channels.

**Think of it as:** A fictional version of Twilio or Sendbird.

---

## Why NotiFlow Exists in This System

Every section of 7Forge uses NotiFlow to show you exactly what real API documentation looks like — not just theory. NotiFlow gives you:

- Real-looking API endpoints to document
- A complete OpenAPI specification
- Realistic developer scenarios and tickets
- GitHub repo structure to copy
- SOPs based on a real company workflow

---

## NotiFlow API Basics

```
Base URL: https://api.notiflow.io/v1
Auth: Bearer token (API key)
Format: JSON
Rate limit: 100 requests/minute
```

## Core Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/messages` | Send a message |
| `GET` | `/messages/{id}` | Retrieve a message |
| `DELETE` | `/messages/{id}` | Delete a message |
| `GET` | `/threads` | List all threads |
| `POST` | `/threads` | Create a thread |
| `POST` | `/webhooks` | Register a webhook |
| `GET` | `/webhooks` | List webhooks |
| `DELETE` | `/webhooks/{id}` | Delete a webhook |

---

## NotiFlow Pricing Context (Fictional)

| Plan | Messages/Month | Price |
|---|---|---|
| Starter | 10,000 | $29/month |
| Growth | 100,000 | $99/month |
| Scale | Unlimited | $299/month |

---

**Next:** [NotiFlow API Reference →](/notiflow/api-reference)
