---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

# Edgevyn landing page (index.html)

Scope: the Edgevyn company landing page, one route. Visitor mode: Persuade. Used by the owner to impress a client in a meeting.

Audience and job: owners and heads of Indian institutes, schools, shops and growing companies judging whether Edgevyn is the software company to build their system.
Action: book a call (booking form at the close; Book a call in nav and hero) or email buildhub20@gmail.com.
Proof: who Edgevyn is and what it builds (nine practices), the four-step way of working, the stack, and five live products as the company's own work. No invented clients, numbers, awards, team size or location.
Constraints: company first, products second; no demo credentials; logo used as supplied; reference site's structure (pinned monodrift); full-width layout on wide screens.
Unresolved: founding year, location, team size, phone; booking notifications are set in Netlify at deploy.

## Direction contract

THESIS: Edgevyn as a dimensional studio site: the monodrift structure (huge squared type, split statements, expandable services, step timeline, closing block) rebuilt in depth, so the visitor feels they are moving through running software rather than reading about it. It refuses flat agency templates and gradient-blob heroes.

OWN-WORLD: "Ember & Cobalt", chosen by the user. Near-black ground (#08090D) with graphite surfaces; ember orange (#FF6B35) is the primary light and the only fill for actions (dark text on it); the logo's cobalt (#3B7AD9) is the cool second light for lines, rims and the wave field. White type, Chakra Petch uppercase display, Manrope reading text. Light is the material: warm and cool rim light, depth, parallax; no glassmorphism cards, no gradient text.

STORY: The visitor lands inside a moving 3D field with Edgevyn's real products floating in depth, reads what Edgevyn builds and who it is, opens the practices, sees the products tilt toward them, follows the four steps, and books a call or emails.

FIRST VIEWPORT: Full-bleed near-black hero. A WebGL wave field of points (cobalt to ember) spans the whole viewport behind everything and bends toward the cursor. Left: the huge uppercase headline WE BUILD SOFTWARE THAT RUNS YOUR BUSINESS with two words on ember bars, one sentence of what Edgevyn does, and a large ember Book a call block. Right: three real product windows (Gradus Mind LMS, Cafe Studio, Vastra Boutique) floating at different depths in CSS 3D, tilting toward the pointer, with an ember "Five products, running today" card at the stage's lower right linking to the work section. Windows and cards carry a two-light rim, cobalt from one corner and ember from the other.

FORM: The pinned reference world (monodrift studio site) rendered in depth and in the Ember & Cobalt theme. seed: none (pinned) — the user wrote "take this site and design" with https://monodrift.framer.website/, then asked to "use another colour theme, add transitions, add effects and make it look like a 3D site". Signature interaction: the hero's product windows and wave field answer the pointer and recede in depth as the page scrolls. Motion grammar: depth parallax, line rises, clip reveals, tilt-and-glare on work cards, a rotating stack ring; smooth scroll; all of it off under reduced motion.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
