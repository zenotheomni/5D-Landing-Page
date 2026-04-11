# Mailchimp Automation Setup Checklist v1

## Purpose

Translate the Fifth Dimension onboarding and segmentation system into a clean account-side setup plan for Mailchimp.

This document is for implementation, not theory.

---

## 1. Audience Setup

### Use one primary audience for now
Recommended audience:
- `Fifth Dimension Signals`

Do not split into multiple audiences yet.
Use:
- tags
- segments
- merge fields
- automations

This keeps the foundation simpler and more scalable.

---

## 2. Merge Fields To Confirm

Make sure the Mailchimp audience supports these fields:

- `FNAME` -> first name
- `PHONE` -> phone number

Optional future fields:
- `SOURCE`
- `INTEREST`
- `STATUS`

If merge fields are not practical yet, keep source/interest as tags for now.

---

## 3. Required Tags To Create

### System tags
- `fifth-dimension`
- `source:landing-page`

### Interest tags
- `interest:world`
- `interest:music`
- `interest:merch`
- `interest:mindset`
- `interest:events`

### Lifecycle tags
- `stage:new`
- `stage:welcoming`
- `stage:engaged`
- `stage:dormant`
- `stage:buyer`
- `stage:member`

### Channel-intent tags
- `sms-candidate`
- `email-only`

### Future behavior tags
- `clicked:world`
- `clicked:store`
- `clicked:music`
- `clicked:mindset`
- `attended:event`
- `purchased:merch`

---

## 4. First Segments To Create

### Segment 1: New entrants
Conditions:
- tagged `stage:new`
- joined recently

### Segment 2: World-first users
Conditions:
- tag `interest:world`

### Segment 3: Music-first users
Conditions:
- tag `interest:music`

### Segment 4: Merch-first users
Conditions:
- tag `interest:merch`

### Segment 5: Mindset-first users
Conditions:
- tag `interest:mindset`

### Segment 6: Event-first users
Conditions:
- tag `interest:events`

### Segment 7: Dormant users
Conditions:
- low open/click engagement over time
- tag `stage:dormant`

---

## 5. Welcome Automation To Build

### Automation name
`Fifth Dimension - Welcome Sequence`

### Trigger
When a contact is added to the audience and tagged:
- `stage:new`

### Sequence
1. Entry confirmation
2. What Fifth Dimension actually is
3. Choose your path
4. First action
5. Conversion push

### Recommended delay rhythm
- email 1: immediately
- email 2: +1 day
- email 3: +2 days
- email 4: +4 days
- email 5: +6 days

---

## 6. Lifecycle Tag Flow

### On signup
Apply:
- `fifth-dimension`
- `source:landing-page`
- `interest:<selected>`
- `stage:new`
- `sms-candidate` or `email-only`

### On welcome automation start
Apply:
- `stage:welcoming`

### After meaningful clicks / engagement later
Apply:
- `stage:engaged`

### After purchase or stronger commitment later
Apply:
- `stage:buyer` or `stage:member`

### For non-engagers later
Apply:
- `stage:dormant`

---

## 7. Immediate Backend/Code Alignment Notes

Current landing join flow already supports:
- source
- interestArea
- email/phone distinction
- consent
- Mailchimp tagging path

### Recommended next backend improvement
Add lifecycle tag defaults directly in the join API so new contacts consistently enter Mailchimp with:
- `stage:new`
- chosen interest tag
- source tag

This would make automation setup cleaner.

---

## 8. Manual Account-Side To-Do List

1. Confirm audience name
2. Confirm merge fields exist
3. Create required tags
4. Create initial segments
5. Build 5-email welcome automation
6. load subject/body/CTA copy into Mailchimp
7. test signup flow with one test lead
8. verify tags and welcome trigger

---

## 9. Success Criteria

This setup is complete when:
- signups enter the audience cleanly
- interest tags are visible
- lifecycle tags are visible
- welcome sequence triggers correctly
- users are being routed toward app/store/music based on interest

---

## 10. Main Principle

Keep one audience.
Use tags and segments for intelligence.
Do not overcomplicate the system before the first automation is live.
