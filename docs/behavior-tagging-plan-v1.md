# Behavior Tagging Plan v1

## Purpose

Define how the Fifth Dimension funnel should track post-signup behavior so onboarding becomes adaptive and future retention becomes smarter.

This is the next layer after:
- signup capture
- interest capture
- welcome routing
- Mailchimp onboarding plan

---

## 1. Core Principle

Every important click after signup should help answer:
- what is this user most interested in?
- what should we send them next?
- how close are they to becoming an engaged user, customer, or member?

---

## 2. Priority Behavior Events

Start with the highest-value behavior tags.

### Event 1: clicked world
Means:
- user is interested in the app / universe / Live Dome / Arrival Plaza

Apply tag:
- `clicked:world`

### Event 2: clicked store
Means:
- user is interested in merch / collection / apparel

Apply tag:
- `clicked:store`

### Event 3: clicked music
Means:
- user is interested in songs / videos / Jenks music signal

Apply tag:
- `clicked:music`

### Event 4: clicked mindset
Means:
- user is interested in philosophy / Fifth State of Mind

Apply tag:
- `clicked:mindset`

### Event 5: clicked events
Means:
- user is interested in Live Dome / room moments / digital events

Apply tag:
- `clicked:events`

---

## 3. Lifecycle Impact Rules

### If a new user clicks any meaningful CTA
Then:
- they should move from `stage:new` toward `stage:engaged`

### If a user clicks multiple related CTAs
Then:
- that category becomes their stronger inferred path

Example:
- `interest:world` + `clicked:world` + `clicked:events`
-> user is increasingly world/event oriented

---

## 4. Recommended Tracking Implementation Path

## Phase 1: URL-based tracking
Simplest implementation.

Approach:
- append query params to key CTA links, such as:
  - `?path=world`
  - `?path=store`
  - `?path=music`
  - `?path=mindset`
  - `?path=events`

Then:
- track those values through redirects or intermediate handlers later

## Phase 2: Mailchimp link tagging
Use link-based campaign tags inside emails.

Approach:
- links in onboarding emails point to the right surface with path markers
- contacts are tagged later through automation or follow-up systems

## Phase 3: Backend event capture
Future direction.

Approach:
- send click or route events into Supabase / app backend
- update CRM / lifecycle / segments more intelligently

---

## 5. Recommended Immediate Application

### Welcome page
Primary CTA should imply and preserve selected path.

### Email onboarding sequence
Each email CTA should map clearly to:
- world
- store
- music
- mindset
- events

### Future app/store links
The system should eventually know when a signup actually crossed into a district or store path.

---

## 6. Tags To Use

### Interest tags (initial)
- `interest:world`
- `interest:music`
- `interest:merch`
- `interest:mindset`
- `interest:events`

### Behavior tags (follow-up)
- `clicked:world`
- `clicked:store`
- `clicked:music`
- `clicked:mindset`
- `clicked:events`

### Lifecycle tags
- `stage:new`
- `stage:welcoming`
- `stage:engaged`
- `stage:dormant`
- `stage:buyer`
- `stage:member`

---

## 7. Main Goal

Move from:
- generic onboarding

to:
- adaptive onboarding
- better segmentation
- stronger retention
- smarter conversion follow-up

---

## 8. Best Next Implementation

The next lightweight implementation should be:

### Add path query markers to the adaptive welcome page CTA links
This creates the first real traceable path layer without requiring a full analytics backend first.
