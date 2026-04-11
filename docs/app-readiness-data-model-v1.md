# App Readiness Data Model v1

## Purpose

Define the minimum user/contact state model that makes the funnel and retention system usable by future frontend, CRM, or admin surfaces.

This is the first step toward app-readiness for lead and member state.

---

## 1. Core Fields

A future enriched contact/user record should ideally include:

- `name`
- `email`
- `phone`
- `source`
- `interest_area`
- `lifecycle_stage`
- `user_state`
- `engagement_score`
- `tags`
- `created_at`
- `last_engaged_at`
- `welcome_sent_at`
- `last_clicked_path`

---

## 2. Why These Fields Matter

### lifecycle_stage
Needed to know:
- where they are in the funnel/retention journey

### user_state
Needed to know:
- cold / warm / active / core in a clean human-readable way

### engagement_score
Needed to know:
- how strong or weak the relationship currently is

### interest_area
Needed to know:
- what path should be emphasized first

### last_clicked_path
Needed to know:
- what recent behavior suggests about current intent

---

## 3. Near-Term Practical Use

This model supports future use cases like:
- simple admin views
- superfans/CRM prioritization
- branch-aware retention
- world/app entry prioritization
- more useful segmentation beyond raw tags

---

## 4. Recommended Next Schema Expansion

The current Supabase waitlist table is still simple.

A future internal record should evolve toward supporting:
- source
- interest_area
- lifecycle_stage
- user_state
- engagement_score
- tags
- welcome_sent_at
- last_clicked_path

---

## 5. Main Principle

Do not wait until the full CRM exists.
Design the state shape now so every next backend and automation improvement has a consistent target.
