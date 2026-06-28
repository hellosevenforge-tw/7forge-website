---
id: openapi-spec
sidebar_label: NotiFlow OpenAPI Spec
---

# NotiFlow OpenAPI Specification

> Complete OpenAPI 3.0 specification for the NotiFlow API. Use this as your model.

```yaml
openapi: 3.0.3
info:
  title: NotiFlow API
  description: The NotiFlow messaging platform API
  version: 1.0.0
  contact:
    name: NotiFlow Support
    email: support@notiflow.io

servers:
  - url: https://api.notiflow.io/v1
    description: Production
  - url: https://sandbox.notiflow.io/v1
    description: Sandbox

security:
  - bearerAuth: []

paths:
  /messages:
    post:
      summary: Send a message
      operationId: sendMessage
      tags: [Messages]
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/SendMessageRequest'
      responses:
        '201':
          description: Message sent
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Message'
        '400':
          $ref: '#/components/responses/BadRequest'
        '401':
          $ref: '#/components/responses/Unauthorized'
        '429':
          $ref: '#/components/responses/RateLimited'

  /messages/{id}:
    get:
      summary: Retrieve a message
      operationId: getMessage
      tags: [Messages]
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: string
      responses:
        '200':
          description: Message retrieved
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Message'
        '404':
          $ref: '#/components/responses/NotFound'

  /threads:
    get:
      summary: List threads
      operationId: listThreads
      tags: [Threads]
      parameters:
        - name: limit
          in: query
          schema:
            type: integer
            default: 20
            maximum: 100
        - name: offset
          in: query
          schema:
            type: integer
            default: 0
      responses:
        '200':
          description: Threads listed
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ThreadList'

components:
  securitySchemes:
    bearerAuth:
      type: http
      scheme: bearer

  schemas:
    SendMessageRequest:
      type: object
      required: [content]
      properties:
        content:
          type: string
          maxLength: 1000
          description: Message content
        priority:
          type: string
          enum: [high, normal, low]
          default: normal
        thread_id:
          type: string
          description: Thread to add the message to

    Message:
      type: object
      properties:
        id:
          type: string
          example: msg_nf_789xyz
        content:
          type: string
        priority:
          type: string
        thread_id:
          type: string
        status:
          type: string
          enum: [sent, failed, pending]
        created_at:
          type: string
          format: date-time

    ThreadList:
      type: object
      properties:
        threads:
          type: array
          items:
            $ref: '#/components/schemas/Thread'
        total:
          type: integer
        limit:
          type: integer
        offset:
          type: integer

    Thread:
      type: object
      properties:
        id:
          type: string
        message_count:
          type: integer
        created_at:
          type: string
          format: date-time

  responses:
    BadRequest:
      description: Bad request
      content:
        application/json:
          schema:
            type: object
            properties:
              error:
                type: string
    Unauthorized:
      description: Unauthorized
    NotFound:
      description: Not found
    RateLimited:
      description: Rate limit exceeded
      headers:
        Retry-After:
          schema:
            type: integer
```
