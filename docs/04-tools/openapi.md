---
id: openapi
sidebar_label: OpenAPI / Swagger
---

# 13. OpenAPI / Swagger

> **Tier:** Pro + Agency | **Part:** Tools & Technology

## What Is OpenAPI?

OpenAPI is the industry standard for describing REST APIs. Every professional API documentation project involves OpenAPI.

## OpenAPI YAML Structure

```yaml
openapi: 3.0.3
info:
  title: NotiFlow API
  version: 1.0.0
  description: The NotiFlow messaging API

servers:
  - url: https://api.notiflow.io/v1

paths:
  /messages:
    post:
      summary: Send a message
      operationId: sendMessage
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - content
              properties:
                content:
                  type: string
                  maxLength: 1000
                priority:
                  type: string
                  enum: [high, normal, low]
                  default: normal
      responses:
        '201':
          description: Message sent successfully
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Message'
        '401':
          description: Unauthorized

components:
  schemas:
    Message:
      type: object
      properties:
        id:
          type: string
        content:
          type: string
        status:
          type: string
        created_at:
          type: string
          format: date-time
```

## Checklist

- [ ] OpenAPI spec file created (openapi.yaml)
- [ ] All endpoints defined
- [ ] All parameters documented
- [ ] All response schemas defined
- [ ] Spec validated (use Swagger Editor)
- [ ] Spec imported into Postman for testing
