# Fifth Dimension Landing System Plan v1

## Goal

Turn the current landing page from a simple capture form into a stronger conversion system that feeds the wider Fifth Dimension ecosystem.

## Current known flow

1. User lands on the 5D landing page
2. User enters:
   - first name
   - email
   - optional phone
   - consent checkbox
3. `POST /api/join`
4. data saved into Supabase `waitlist`
5. email added to Mailchimp audience
6. user is routed to `/welcome`

## Immediate improvements already addressed

- backend now preserves `name`
- backend normalizes email and phone before saving
- Mailchimp sync now passes first name and phone merge fields when available

## Recommended next schema upgrade

Current Supabase table is sufficient for a simple waitlist, but should evolve.

### Current fields
- id
- name
- email
- phone
- created_at

### Recommended future fields
- source
- sms_opt_in
- email_opt_in
- interest_area
- welcome_sent_at
- tags
- status

## Recommended welcome routing priorities

After signup, the welcome page should guide the user toward:

1. Enter the world / app
2. Shop the collection
3. Watch / listen

This should be clearer than a broad archive page.

## Recommended email sequence

### Email 1
Welcome + what Fifth Dimension is

### Email 2
Enter the world / app intro

### Email 3
Culture + merch signal

### Email 4
Next drop / event invitation

## Main principle

The landing page is not the app.
It is the conversion bridge into the world.

Its job is to:
- capture attention
- convert interest into owned audience
- route users deeper into the ecosystem
