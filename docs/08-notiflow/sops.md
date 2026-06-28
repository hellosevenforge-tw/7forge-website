---
id: sops
sidebar_label: NotiFlow SOPs & Checklists
---

# NotiFlow SOPs & QA Checklists

> Standard Operating Procedures for the complete NotiFlow documentation workflow.

---

## SOP 1 — New Endpoint Documentation

Use this SOP every time a new endpoint is added to the API.

```markdown
## New Endpoint Documentation SOP

### Triggered by
Engineer opens a documentation ticket in GitHub Issues

### Step 1 — Research (Day 1)
- [ ] Read the endpoint definition in openapi.yaml
- [ ] Test endpoint in Postman (all scenarios)
- [ ] Note any undocumented parameters or behaviors
- [ ] Ask engineer to clarify any gaps

### Step 2 — Write (Day 2-3)
- [ ] Create new markdown file in /docs/api-reference/
- [ ] Use endpoint template from 7Forge
- [ ] Include cURL + JavaScript examples
- [ ] Document all parameters, responses, and errors

### Step 3 — Review (Day 4)
- [ ] Self-review against QA checklist
- [ ] Open PR on GitHub
- [ ] Assign engineer for technical review
- [ ] Make corrections based on feedback

### Step 4 — Publish (Day 5)
- [ ] PR approved and merged to main
- [ ] Verify page is live on documentation site
- [ ] Check all links work
- [ ] Close the documentation ticket

**Timeline target:** 5 business days from ticket open to live
```

---

## SOP 2 — Documentation Review

```markdown
## Documentation Review SOP

### For Engineers Reviewing Documentation
1. Check all endpoint paths are correct
2. Verify all parameter names match actual API
3. Test the provided code examples
4. Confirm all error codes are accurate
5. Check for any missing parameters or behaviors

### For Editors Reviewing Documentation
1. Check style guide compliance
2. Verify consistent terminology
3. Check for clarity and conciseness
4. Verify all links work
5. Check code formatting
```

---

## QA Checklist — Pre-Publication

```markdown
## Pre-Publication QA Checklist

### Technical Accuracy
- [ ] All endpoint paths correct
- [ ] All parameter names match API
- [ ] All code examples tested and working
- [ ] All error codes accurate
- [ ] All response fields documented

### Completeness
- [ ] All required parameters documented
- [ ] All optional parameters documented
- [ ] Success response documented
- [ ] All error responses documented
- [ ] Authentication requirement stated

### Quality
- [ ] Style guide followed
- [ ] Active voice used throughout
- [ ] No jargon without explanation
- [ ] Consistent terminology
- [ ] No broken links

### Final
- [ ] Engineer has reviewed and approved
- [ ] Editor has reviewed and approved
- [ ] Ready to merge and publish
```

---

## Delivery Checklist

```markdown
## Client Delivery Checklist

### Before Sending
- [ ] All agreed deliverables complete
- [ ] QA checklist passed for all pages
- [ ] Live URL tested and working
- [ ] GitHub repo access shared (if included)
- [ ] Maintenance guide written

### Delivery Package Includes
- [ ] Live documentation URL
- [ ] GitHub repository link
- [ ] Maintenance guide (how to update docs)
- [ ] Summary of what was delivered
- [ ] Invoice
```
