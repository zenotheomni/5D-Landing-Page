# Lifecycle Progression Map v1

## Purpose

Define how a Fifth Dimension contact should move through lifecycle states over time.

This is the operating logic behind retention.

---

## 1. Lifecycle States

### stage:new
Meaning:
- just entered the system
- no onboarding progress yet

### stage:welcoming
Meaning:
- actively inside the welcome sequence
- early orientation phase

### stage:engaged
Meaning:
- clicked important CTAs or showed meaningful interest
- worth more focused follow-up

### stage:buyer
Meaning:
- completed a purchase or took a direct commercial action

### stage:member
Meaning:
- repeated engagement or deeper participation
- future VIP/community path

### stage:dormant
Meaning:
- low or no engagement after onboarding or active phase

---

## 2. Transition Rules

### new -> welcoming
Trigger:
- signup completes
- welcome automation begins

### welcoming -> engaged
Trigger:
- user clicks one or more meaningful path CTAs
- or opens/clicks enough to show intent

### engaged -> buyer
Trigger:
- user purchases merch or takes a clear conversion action

### engaged -> member
Trigger:
- user repeatedly returns, engages, or participates in world/event/store systems later

### welcoming -> dormant
Trigger:
- user does not meaningfully engage within onboarding window

### engaged -> dormant
Trigger:
- user stops engaging over time

---

## 3. Immediate Operational Meaning

### stage:new
Use for:
- instant entry tagging
- automation trigger

### stage:welcoming
Use for:
- 5-email onboarding flow
- early path discovery

### stage:engaged
Use for:
- branch-specific messaging
- stronger CTAs
- more relevant launch invitations

### stage:dormant
Use for:
- reactivation
- strongest-value reminders
- simpler "re-enter the world" messaging

---

## 4. Near-Term Practical Implementation

### Current feasible implementation
At the current foundation level, the system can support:
- `stage:new` on signup
- `stage:welcoming` when onboarding begins
- planning for `stage:engaged` / `stage:dormant`

### Future implementation
As more behavior data becomes available, lifecycle state can be updated using:
- email clicks
- app entry
- store visits
- event participation
- purchases

---

## 5. Recommended Next Operational Build

The next best practical build after this is:

### Welcome Sequence Deployment Checklist
This should turn:
- the onboarding copy
- the branch logic
- the lifecycle model

into a concrete step-by-step account-side setup sequence.
