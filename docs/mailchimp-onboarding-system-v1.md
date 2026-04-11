# Mailchimp Onboarding System v1

## Purpose

Turn the Fifth Dimension landing capture flow into a structured onboarding and retention system that supports:
- list growth
- segmentation
- world/app entry
- merch and music pathways
- future event and drop conversion

This system assumes the landing page is the main current entry point into the ecosystem.

---

## 1. Audience Structure

## Core fields to support

### Required
- `email`
- `phone`
- `source`
- `interest_area`
- `sms_opt_in`
- `email_opt_in`
- `tags`
- `status`

### Current reality
The current stack already supports:
- email
- phone
- source (from the join API payload)
- interest area (from the join API payload)
- tags via Mailchimp

The Supabase `waitlist` table still needs future schema expansion for some of the richer fields.

---

## 2. Recommended Tagging System

## Permanent/system tags
- `fifth-dimension`
- `source:landing-page`
- `interest:world`
- `email-only`
- `sms-candidate`

## Expandable interest tags
- `interest:music`
- `interest:merch`
- `interest:app`
- `interest:mindset`
- `interest:events`

## Lifecycle tags
- `stage:new`
- `stage:welcoming`
- `stage:engaged`
- `stage:dormant`
- `stage:buyer`
- `stage:member`

## Behavior tags (future-ready)
- `clicked:world`
- `clicked:store`
- `clicked:music`
- `clicked:mindset`
- `attended:event`
- `purchased:merch`

---

## 3. Recommended Segment Logic

### Segment: New entrants
Definition:
- joined in last 24 to 72 hours
- tags include `stage:new`

Use:
- welcome sequence
- first-direction messaging

### Segment: Music-first users
Definition:
- tagged `interest:music`
- or came through a music-first CTA path

Use:
- music releases
- Jenks updates
- listening room invitations

### Segment: Merch-first users
Definition:
- tagged `interest:merch`
- or clicked store-heavy flows

Use:
- capsule launches
- collection previews
- apparel drops

### Segment: App/world users
Definition:
- tagged `interest:app` or `interest:world`
- or clicked world/app CTA links

Use:
- app feature reveals
- world updates
- Live Dome / district messaging

### Segment: Mindset-first users
Definition:
- tagged `interest:mindset`

Use:
- Fifth State of Mind teachings
- philosophy sequences
- movement identity content

### Segment: Highly engaged
Definition:
- opens + clicks multiple emails
- repeated app/store/content interactions

Use:
- VIP early access
- stronger launch invitations
- future membership logic

### Segment: Dormant users
Definition:
- no meaningful engagement after onboarding window

Use:
- reactivation
- strongest-value recap
- world re-entry messaging

---

## 4. Welcome Sequence Architecture

This is the first real onboarding flow.

## Email 1 — Entry Confirmation
### Subject options
- You’re in the FIFTH.
- Entry confirmed.
- You found the signal.

### Purpose
Confirm entry and set tone.

### Body draft
You’re in.

You just stepped into the Fifth Dimension system — a world built around music, garments, mindset, and elevated identity.

This is not noise. This is the signal.

Over the next few days, we’ll show you where to start and how to move deeper into the world.

### CTA
**Enter the world**

---

## Email 2 — What Fifth Dimension Actually Is
### Subject options
- What the FIFTH actually is
- More than music. More than fashion.
- This is the Foundation.

### Purpose
Clarify the ecosystem and its identity.

### Body draft
Fifth Dimension is not just a clothing brand, an artist page, or a mindset page.

It is a connected world built around:
- music
- culture
- garments
- self-mastery
- immersive experience

What you wear, what you listen to, and how you move are all part of the same signal.

That’s the difference.

### CTA
**See the world structure**

---

## Email 3 — Choose Your Path
### Subject options
- Choose your path.
- Start where your signal is strongest.
- Music, garments, mindset, or world?

### Purpose
Route users based on current strongest interest.

### Body draft
There are different ways to enter the Fifth.

If your signal is strongest through:
- music, start with Jenks
- garments, step into the archive
- mindset, tap into the philosophy
- the world itself, enter the universe

Pick the path that pulls you first. You can move deeper from there.

### CTA
**Choose your path**

---

## Email 4 — First Action
### Subject options
- Start here.
- Your first real move.
- Cross the threshold.

### Purpose
Push the best current next action.

### Body draft
The strongest way to understand Fifth Dimension is not to read about it forever.
It is to step into it.

Start with the current live signal, the world entry point, or the strongest active district.

Move first. Then let the world explain itself.

### CTA
**Enter the FIFTH**

---

## Email 5 — Conversion Push
### Subject options
- Before the public does
- Secure your place in the signal
- The current moment is live

### Purpose
Convert attention into action.

### Body draft
Now that you’re inside the system, here’s the current move:

- active drop
- live room
- featured collection
- current signal

If you’ve been watching from the edge, this is where you step in.

### CTA
**Secure your uniform** / **Enter the room**

---

## 5. Funnel to App Connection

Current flow can evolve like this:

1. User signs up on landing page
2. Join API sends:
   - source
   - interest area
   - contact info
   - consent state
3. Mailchimp stores contact with tags
4. Welcome sequence begins
5. CTA links route user toward:
   - Live Dome
   - Atelier / store
   - music content
   - philosophy/world entry

---

## 6. Current Implementation Reality

### Already possible
- Mailchimp tagging via join API
- source tag
- interest tag
- phone/email distinction tags
- welcome sequence planning and copy

### Needs later implementation or access
- explicit Mailchimp automation setup in account
- richer Supabase schema
- click-based behavior tagging
- app/store event-based webhook sync

---

## 7. Recommended Next Implementation Step

The next concrete implementation step after this document is:

### Add configurable `interestArea` routing options in the landing flow
This would let signups self-identify as:
- music
- merch
- mindset
- world/app
- events

That would strengthen both tagging and the welcome email path.
