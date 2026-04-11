# Welcome Sequence Deployment Checklist v1

## Purpose

Turn the Fifth Dimension onboarding system into a step-by-step deployment sequence for Mailchimp.

This document is the operational bridge between planning and account setup.

---

## 1. Before You Build The Automation

Confirm these already exist:
- primary audience created
- merge fields configured (`FNAME`, `PHONE`)
- tags created
- landing join API applying:
  - `fifth-dimension`
  - `stage:new`
  - `source:landing-page`
  - `interest:<selected>`
  - `sms-candidate` or `email-only`

If those conditions are true, continue.

---

## 2. Create The Welcome Automation

### Name
`Fifth Dimension - Welcome Sequence`

### Trigger
When a contact enters the audience with tag:
- `stage:new`

### Immediate automation actions
1. add / confirm tag: `stage:welcoming`
2. begin 5-message sequence

---

## 3. Load The 5 Welcome Emails

## Email 1
### Purpose
Entry confirmation

### Subject direction
- You’re in the FIFTH.
- Entry confirmed.
- You found the signal.

### CTA target
- app/world entry

---

## Email 2
### Purpose
Explain what Fifth Dimension actually is

### Subject direction
- What the FIFTH actually is
- More than music. More than fashion.
- This is the Foundation.

### CTA target
- ecosystem/world explanation path

---

## Email 3
### Purpose
Choose your path

### Subject direction
- Choose your path.
- Start where your signal is strongest.
- Music, garments, mindset, or world?

### CTA target
- interest-aligned path

---

## Email 4
### Purpose
Drive first real action

### Subject direction
- Start here.
- Your first real move.
- Cross the threshold.

### CTA target
- world / store / music / mindset / event path

---

## Email 5
### Purpose
Conversion push

### Subject direction
- Before the public does
- Secure your place in the signal
- The current moment is live

### CTA target
- active drop, room, or strongest current signal

---

## 4. Recommended Timing

- Email 1: immediately
- Email 2: +1 day
- Email 3: +2 days
- Email 4: +4 days
- Email 5: +6 days

Do not overcomplicate the timing before the first version is live.

---

## 5. Segment-Aware Link Strategy

As you load each email, ensure CTA links align to the intended path.

### World/app CTA examples
Use links with:
- `?path=world`

### Store CTA examples
Use links with:
- `?path=store`

### Music CTA examples
Use links with:
- `?path=music`

### Mindset CTA examples
Use links with:
- `?path=mindset`

### Events CTA examples
Use links with:
- `?path=events`

This preserves behavior intent for future smarter follow-up.

---

## 6. Post-Welcome Branching

After the welcome sequence, move contacts into branch-specific follow-up based on:
- declared interest
- clicked path behavior
- lifecycle state

### Branch examples
- world-first branch
- music-first branch
- merch-first branch
- mindset-first branch
- event-first branch

---

## 7. Lifecycle Actions To Configure Later

### If user engages
Apply:
- `stage:engaged`

### If user becomes inactive
Apply later:
- `stage:dormant`

### If user purchases or converts strongly
Apply later:
- `stage:buyer`
- or `stage:member`

---

## 8. Final Test Sequence

Before calling the system live, test with one controlled signup.

### Verify:
1. contact enters Mailchimp
2. `stage:new` appears
3. interest tag appears
4. source tag appears
5. automation triggers
6. email 1 is delivered
7. CTA link routes correctly

---

## 9. Definition Of Done

The welcome system is considered deployed when:
- signup enters the audience cleanly
- lifecycle entry tag is present
- welcome automation triggers
- first email sends correctly
- CTA links preserve intended path
- contacts can be segmented by interest and stage

---

## 10. Main Principle

Ship the first working welcome automation.
Do not wait for the perfect CRM.
The goal is a clean, intelligent baseline system that can evolve.
