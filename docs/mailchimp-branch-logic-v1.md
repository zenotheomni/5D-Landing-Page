# Mailchimp Branch Logic v1

## Purpose

Define how Fifth Dimension onboarding should branch after the welcome sequence based on:
- declared interest
- clicked path behavior
- lifecycle stage

This turns onboarding from a straight line into a smarter retention engine.

---

## 1. Core Inputs

The system should branch based on these signal layers:

### Layer 1: Declared interest
Captured at signup:
- `interest:world`
- `interest:music`
- `interest:merch`
- `interest:mindset`
- `interest:events`

### Layer 2: Behavior tags
Captured from path and CTA behavior over time:
- `clicked:world`
- `clicked:store`
- `clicked:music`
- `clicked:mindset`
- `clicked:events`

### Layer 3: Lifecycle stage
- `stage:new`
- `stage:welcoming`
- `stage:engaged`
- `stage:dormant`
- `stage:buyer`
- `stage:member`

---

## 2. Standard Lifecycle Flow

### Stage 1: New
Meaning:
- contact just entered

Action:
- apply welcome sequence
- move to `stage:welcoming`

### Stage 2: Welcoming
Meaning:
- user is in onboarding flow

Action:
- route by declared interest
- monitor clicks

### Stage 3: Engaged
Meaning:
- user clicked meaningful CTA(s)
- user showed directional interest

Action:
- move them into interest-specific follow-up

### Stage 4: Buyer / Member
Meaning:
- user bought, attended, or became a deeper participant

Action:
- move into VIP / insider / active fan logic later

### Stage 5: Dormant
Meaning:
- user did not engage meaningfully after welcome period

Action:
- move into reactivation messaging

---

## 3. Branch Paths

## Branch A: World-first path
### Trigger
- `interest:world`
- or `clicked:world`

### Messaging focus
- app/world
- Arrival Plaza
- Live Dome
- digital destination language

### Goal
- get them into the app experience
- build return behavior

---

## Branch B: Music-first path
### Trigger
- `interest:music`
- or `clicked:music`

### Messaging focus
- Jenks
- song/video signal
- music drops
- behind-the-scenes creator content

### Goal
- deepen artist attachment
- move toward music + world crossover

---

## Branch C: Merch-first path
### Trigger
- `interest:merch`
- or `clicked:store`

### Messaging focus
- collection
- pieces
- editorial visuals
- drop cadence

### Goal
- move toward first purchase
- reinforce premium apparel identity

---

## Branch D: Mindset-first path
### Trigger
- `interest:mindset`
- or `clicked:mindset`

### Messaging focus
- Fifth State of Mind
- philosophy
- identity
- self-mastery / ownership

### Goal
- deepen brand belief
- move them toward the world and movement later

---

## Branch E: Event-first path
### Trigger
- `interest:events`
- or `clicked:events`

### Messaging focus
- Live Dome
- room entry
- event access
- live/replay momentum

### Goal
- move them toward event participation
- connect to merch and world entry

---

## 4. Recommended Branch Rules

### Rule 1
Declared interest starts the branch.

### Rule 2
Behavior can strengthen or override branch confidence later.

### Rule 3
If multiple strong behaviors appear, the user can move into a blended or more engaged state later.

### Rule 4
World and events should increasingly converge because Live Dome is the product heartbeat.

---

## 5. Email Direction After Welcome Sequence

### For world-first users
Send:
- world entry
- district highlights
- current live signal
- return reasons

### For music-first users
Send:
- music/video drops
- artist story
- signal/listening room crossover

### For merch-first users
Send:
- collection highlights
- drop energy
- product storytelling
- archive access

### For mindset-first users
Send:
- philosophy sequences
- identity content
- movement framing
- world invitation later

### For event-first users
Send:
- upcoming room moments
- live/replay reminders
- access-oriented messaging
- merch tie-ins

---

## 6. Dormant User Logic

### Trigger
No meaningful click or engagement after onboarding period.

### Action
Apply:
- `stage:dormant`

### Reactivation message themes
- strongest world entry point
- strongest-value recap
- what they missed
- return invitation

---

## 7. Immediate Practical Use

This branch logic can be used right now to:
- organize future Mailchimp automations
- define post-welcome segment paths
- keep onboarding aligned with actual interest and behavior

---

## 8. Next Implementation Step

### Recommended next practical move
Create a **Lifecycle Progression Map** that defines when and how a contact should move:
- from new -> welcoming
- welcoming -> engaged
- engaged -> buyer/member
- welcoming/engaged -> dormant

That will make the retention system operational, not just segmented.
