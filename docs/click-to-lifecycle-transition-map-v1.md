# Click to Lifecycle Transition Map v1

## Purpose

Define how specific clicks and path choices should push a Fifth Dimension contact from one state to another.

This is the bridge between:
- behavior
- engagement score
- lifecycle stage
- user state

---

## 1. Trigger Types

### Trigger A: Signup only
Result:
- lifecycle: `stage:new`
- user state: `cold`
- engagement score: 1

### Trigger B: Clicked one major CTA
Examples:
- world
- store
- music
- mindset
- events

Result:
- lifecycle moves toward `stage:engaged`
- user state becomes at least `warm`

### Trigger C: Clicked multiple categories
Result:
- user state can move from `warm` toward `active`
- indicates broader ecosystem fit

### Trigger D: Repeated high-value click behavior later
Examples:
- repeated world/app interest
- repeated event/store click behavior

Result:
- user state moves toward `active`

### Trigger E: Purchase or attendance later
Result:
- lifecycle can become `stage:buyer` or `stage:member`
- user state can become `core`

---

## 2. Transition Matrix

### Signup completed
- add `stage:new`
- set state to `cold`
- score = 1

### First major click
- add `stage:engaged`
- set state to `warm`
- add click tag

### Second meaningful click or stronger repeated click
- keep `stage:engaged`
- set state to `active`
- increase score further

### Purchase / event participation
- add `stage:buyer` or `stage:member`
- set state to `core`

### No meaningful engagement after onboarding window
- add `stage:dormant`
- keep or reduce state confidence

---

## 3. Current Feasible Use

This map can be used right now to:
- design Mailchimp follow-up behavior
- design future Supabase enrichment fields
- design future app/admin readiness views

It is the operating logic behind a smarter retention system.

---

## 4. Main Principle

Do not wait until every behavior is fully tracked.
Define the transition logic first, then implement lightweight traces, then deepen the system over time.
