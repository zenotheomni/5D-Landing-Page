# Funnel Integration Map v1

## Purpose

Map how signup data should move through the Fifth Dimension ecosystem from the landing page into:
- Supabase
- Mailchimp
- welcome sequence
- app/world
- store
- future segmentation

---

## 1. Current Data Flow

### Entry point
Landing page form

### Current submitted values
- name
- email
- phone
- consent
- source
- interestArea

### Current processing
`POST /api/join`

### Current destinations
- Supabase `waitlist`
- Mailchimp audience

---

## 2. Current Data Mapping

### Supabase `waitlist`
Current known reliable fields:
- name
- email
- phone

### Mailchimp member data
Current effective mapping:
- email address
- merge field: first name
- merge field: phone
- tags:
  - `fifth-dimension`
  - `source:landing-page`
  - `interest:world`
  - `sms-candidate` or `email-only`

---

## 3. Recommended Future Supabase Schema Expansion

The current waitlist table works for simple capture, but the ideal schema should expand to include:

- `source`
- `interest_area`
- `sms_opt_in`
- `email_opt_in`
- `status`
- `tags`
- `welcome_sent_at`
- `last_synced_to_mailchimp_at`

This would make Supabase the fuller internal lead record while Mailchimp handles outbound sequencing.

---

## 4. Routing Logic After Signup

### Default path today
- user submits form
- user lands on `/welcome`
- welcome page routes user into:
  - world/app
  - store
  - music/social

### Recommended future routing by interest

#### interest:music
Primary path:
- Jenks / music signal / listening-room-style content

#### interest:merch
Primary path:
- Atelier / store / current collection

#### interest:mindset
Primary path:
- Fifth State of Mind / philosophy / movement framing

#### interest:app or world
Primary path:
- 5D Universe app / Arrival Plaza / Live Dome

#### interest:events
Primary path:
- Live Dome / event corridor / featured room

---

## 5. Trigger Logic For Messaging

### New entrant
Trigger:
- new signup created

Action:
- begin 5-part welcome sequence

### Clicked world/app CTA
Trigger:
- clicks world link from welcome flow or email

Action:
- tag as `clicked:world`
- future app/world-oriented follow-up

### Clicked store CTA
Trigger:
- clicks store link

Action:
- tag as `clicked:store`
- future merch/drop follow-up

### Clicked music CTA
Trigger:
- clicks music link

Action:
- tag as `clicked:music`
- future music-oriented follow-up

These behavior tags are not fully implemented yet, but this is the intended structure.

---

## 6. Integration Boundaries

### Supabase
Role:
- internal lead record
- future richer segmentation source
- future automation trigger source

### Mailchimp
Role:
- onboarding sequence
- retention campaigns
- interest/lifecycle tagging
- reactivation

### App / world
Role:
- deep engagement destination
- Live Dome / identity / return loop

### Store
Role:
- direct monetization layer

---

## 7. Recommended Next Practical Implementation

### Near-term
- keep current source + interest tags flowing into Mailchimp
- finalize welcome sequence setup in Mailchimp
- expand landing page to let users choose interest area explicitly

### Mid-term
- expand Supabase schema
- add behavior tags from clicked email links
- connect app/store interactions into lead lifecycle where appropriate

---

## 8. Main Principle

The landing page should not just collect contacts.
It should assign people a path into the Fifth Dimension ecosystem.
