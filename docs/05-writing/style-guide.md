---
id: style-guide
sidebar_label: Style Guide
---

# 19. Style Guide

> **Tier:** Pro + Agency | **Part:** Writing & Style

## Terminology

Always use consistent terminology. Define it here and enforce it everywhere.

| Use This | Not This |
|---|---|
| API key | access token, auth token, secret |
| endpoint | route, path, URL |
| request body | payload, data, body params |
| response | result, output, return value |
| developer | user, customer, person |

## Formatting Rules

### Code
- Use backticks for inline code: `POST /messages`
- Use code blocks for all multi-line code
- Always specify the language in code blocks

### UI Elements
- Bold UI labels: Click **Save**
- Use arrow for navigation: **Settings** > **API Keys**

### Numbers and Dates
- Spell out numbers under 10: "three endpoints"
- Use numerals for 10 and above: "12 endpoints"
- Use ISO 8601 for dates: `2026-05-17T10:30:00Z`

## Voice and Tone

| Do | Don't |
|---|---|
| Direct and clear | Verbose or padded |
| Second person ("you") | First person ("we", "I") |
| Present tense | Future tense where possible |
| Positive ("do this") | Negative ("don't do that") |

## NotiFlow Style Decisions

- Product name: **NotiFlow** (capital N, capital F, one word)
- API key format: `nf_live_` prefix for production, `nf_test_` for sandbox
- Version format: `v1`, `v2` (lowercase)
