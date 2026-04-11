# Engagement Scoring System v1

## Purpose

Create a simple engagement scoring model for Fifth Dimension so contacts can move from raw signup data into usable lifecycle and product-readiness states.

This system is intentionally lightweight and practical.

---

## 1. Goal

Translate user behavior into a usable engagement state that answers:
- how interested is this person?
- how warm are they?
- what should they receive next?
- are they becoming a buyer, participant, or core user?

---

## 2. Engagement Score Buckets

### 0 to 1 points -> Cold
Meaning:
- signed up but no meaningful engagement yet

### 2 to 4 points -> Warm
Meaning:
- showed some curiosity or directional clicks

### 5 to 8 points -> Active
Meaning:
- multiple meaningful actions
- worth stronger follow-up and launch invitations

### 9+ points -> Core
Meaning:
- repeated engagement, deeper intent, likely strong long-term value

---

## 3. Suggested Scoring Events

### Signup completed
Score: +1
Why:
- baseline proof of interest

### Clicked world/app CTA
Score: +2
Why:
- high-value product interest

### Clicked event CTA
Score: +2
Why:
- strong signal toward Live Dome / current heartbeat

### Clicked store CTA
Score: +2
Why:
- commercial intent

### Clicked music CTA
Score: +1
Why:
- music/artist attachment

### Clicked mindset CTA
Score: +1
Why:
- worldview/identity interest

### Multiple clicks across categories
Score: +1 bonus
Why:
- indicates broader ecosystem interest

### Purchase / strong conversion action later
Score: +4
Why:
- buyer intent / deeper commitment

### Event attendance later
Score: +3
Why:
- deeper world participation

---

## 4. Engagement State Mapping

### Cold
Typical state:
- `stage:new`
- `stage:welcoming`

Use:
- onboarding
- first-value messaging

### Warm
Typical state:
- welcome flow clicked
- directional interest visible

Use:
- branch-specific follow-up
- stronger path-specific content

### Active
Typical state:
- repeated clicks or stronger world/store/event behavior

Use:
- stronger launch invitations
- event/drop pushes
- more premium access messaging

### Core
Typical state:
- repeated engagement or purchase/attendance

Use:
- future VIP/member logic
- early access
- insider offers

---

## 5. User State Labels

In addition to lifecycle tags, each contact can have a simpler product-readable state:

- `cold`
- `warm`
- `active`
- `core`

These are easier for future dashboards, CRM views, or app/admin tools than only raw tags.

---

## 6. Recommended State Progression Rules

### New signup
- lifecycle: `stage:new`
- user state: `cold`
- engagement score: 1

### Welcome click occurs
- lifecycle: `stage:engaged`
- user state: `warm`
- engagement score increases based on path

### Multiple meaningful actions
- user state: `active`

### Purchase / strong repeat behavior
- user state: `core`

---

## 7. Near-Term Practical Implementation

### Current feasible now
At current foundation level, this can first exist as:
- documented scoring rules
- future Mailchimp tagging logic
- future Supabase lead enrichment logic

### Next implementation path
The easiest next technical move is:
- define a simple `engagementScore` and `userState` model in docs/backend planning
- map behavior tags to score changes

---

## 8. Main Principle

Do not overbuild a full scoring engine yet.
Start with a lightweight model that gives the system a usable definition of:
- cold
- warm
- active
- core
