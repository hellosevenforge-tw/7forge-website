---
id: research
sidebar_label: Research & Information Gathering
---

# 5. Research & Information Gathering

> **Tier:** All Tiers | **Part:** Workflow & Process

## Research Stack

| Tool | Purpose |
|---|---|
| Postman | Test all endpoints, analyze responses |
| VS Code | Read OpenAPI YAML/JSON specs |
| Swagger UI | Visualize the API spec |
| Notes | Capture research notes |
| Engineer interviews | Fill gaps the spec doesn't cover |

## Endpoint Research Template

```markdown
## Endpoint Research — [Endpoint Name]

**Method:** GET / POST / PUT / DELETE
**Path:** /resource/{id}

### Parameters
| Name | Type | Required | Description | Unclear? |
|---|---|---|---|---|
| id | string | yes | Resource ID | No |
| filter | string | no | ??? | YES — ask engineer |

### Questions for Engineer
1. What does the filter parameter accept?
2. What does a 422 error mean for this endpoint?
3. Is there a rate limit?
```

## Gap Analysis Template

```markdown
## Gap Analysis — [Project Name]

| Gap | Type | Priority | Action |
|---|---|---|---|
| POST /messages — priority param undocumented | Missing param | High | Ask engineer |
| GET /threads — response schema incomplete | Missing schema | High | Test in Postman |
| Error codes — 14 codes have no description | Missing content | Medium | Research and write |
```

## NotiFlow Research Findings

After reading the NotiFlow openapi.yaml and testing in Postman:

1. `POST /messages` has undocumented `priority` parameter (values: `high`, `normal`, `low`)
2. `GET /threads` response includes `metadata` object not in spec
3. Auth docs reference `API_KEY` header but don't explain how to generate one
4. Error code `4023` appears in responses but is not listed anywhere

## Checklist

- [ ] OpenAPI spec read in full
- [ ] All endpoints tested in Postman
- [ ] Research notes created for each endpoint
- [ ] Engineer interview completed
- [ ] Gap analysis document created
