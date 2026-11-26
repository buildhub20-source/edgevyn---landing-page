---
name: Edgevyn
description: Software company landing page in Ember & Cobalt; a dimensional studio site where running products float in depth over a lit point field.
colors:
  ground: "#08090D"
  ground-deep: "#050608"
  graphite: "#11141B"
  graphite-raised: "#181C25"
  hairline: "rgba(243, 244, 246, 0.11)"
  hairline-strong: "rgba(243, 244, 246, 0.24)"
  bone: "#F3F4F6"
  mist: "#A9B0BC"
  ember: "#FF6B35"
  ember-deep: "#E8541E"
  on-ember: "#08090D"
  cobalt: "#3B7AD9"
  cobalt-soft: "#8DB4F0"
  intro-navy: "#000631"
  signal-error: "#FF8A8A"
typography:
  display-xl:
    fontFamily: "Chakra Petch, Bahnschrift, sans-serif"
    fontSize: "clamp(56px, 9vw, 150px)"
    fontWeight: 700
    lineHeight: 0.88
    letterSpacing: "-0.01em"
  hero:
    fontFamily: "Chakra Petch, Bahnschrift, sans-serif"
    fontSize: "clamp(40px, min(6.9vw, 9.4vh), 112px)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "-0.01em"
  display:
    fontFamily: "Chakra Petch, Bahnschrift, sans-serif"
    fontSize: "clamp(32px, 6.2vw, 96px)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.01em"
  statement:
    fontFamily: "Chakra Petch, Bahnschrift, sans-serif"
    fontSize: "clamp(26px, 3vw, 44px)"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Chakra Petch, Bahnschrift, sans-serif"
    fontSize: "clamp(22px, 2.4vw, 36px)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.01em"
  cta-hero:
    fontFamily: "Chakra Petch, Bahnschrift, sans-serif"
    fontSize: "clamp(22px, min(2.4vw, 3.6vh), 36px)"
    fontWeight: 700
    lineHeight: 1.6
    letterSpacing: "0.04em"
  nav:
    fontFamily: "Chakra Petch, Bahnschrift, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    letterSpacing: "0.06em"
  label:
    fontFamily: "Chakra Petch, Bahnschrift, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    letterSpacing: "0.08em"
  body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "\"tnum\""
  body-sm:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
    fontFeature: "\"tnum\""
rounded:
  none: "0px"
spacing:
  gutter: "clamp(16px, 4vw, 72px)"
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  section: "clamp(100px, 14vh, 170px)"
  nav-height: "72px"
components:
  button-primary:
    backgroundColor: "{colors.ember}"
    textColor: "{colors.on-ember}"
    typography: "{typography.nav}"
    rounded: "{rounded.none}"
    padding: "12px 18px"
  button-primary-hover:
    backgroundColor: "{colors.ember-deep}"
    textColor: "{colors.on-ember}"
  button-block:
    backgroundColor: "{colors.ember}"
    textColor: "{colors.on-ember}"
    typography: "{typography.cta-hero}"
    rounded: "{rounded.none}"
    padding: "clamp(14px, 2.2vh, 22px) 24px"
    width: "100%"
  button-block-hover:
    backgroundColor: "{colors.ember-deep}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.bone}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "10px 16px"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.bone}"
    rounded: "{rounded.none}"
    padding: "10px 14px"
  chip-selected:
    backgroundColor: "{colors.ember}"
    textColor: "{colors.on-ember}"
  input:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.bone}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "13px 14px"
  input-focus:
    backgroundColor: "{colors.ground-deep}"
  panel:
    backgroundColor: "{colors.graphite}"
    textColor: "{colors.bone}"
    rounded: "{rounded.none}"
    padding: "30px 28px 32px"
  work-card:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.bone}"
    rounded: "{rounded.none}"
    padding: "24px 26px 22px"
  media-card:
    backgroundColor: "{colors.ember}"
    textColor: "{colors.on-ember}"
    rounded: "{rounded.none}"
    padding: "22px 64px 22px 24px"
  statement-band:
    backgroundColor: "{colors.ember}"
    textColor: "{colors.on-ember}"
    typography: "{typography.display}"
    padding: "clamp(80px, 13vh, 150px) clamp(16px, 4vw, 72px)"
---

# Design System: Edgevyn

## Overview

**Creative North Star: "Ember & Cobalt"**

The site is a dark room lit by two lights. A near-black ground holds graphite panels; ember orange is the warm key light and the only colour an action is ever filled with; the logo's cobalt is the cool second light that draws lines, rims and the low end of the hero's point field. Depth is the material: real product windows float at three distances in CSS 3D, tilt toward the pointer and recede as the page scrolls, work panels tilt with a white glare, and every raised panel is edged by a one-pixel rim that runs from cobalt in one corner to ember in the other.

Type is squared and loud. Chakra Petch in uppercase carries every heading at poster scale with tight leading (0.88 to 0.92); Manrope carries reading text at a generous 18px. Words that matter sit on ember highlighter bars rather than changing colour. Layout runs edge to edge: there is no max-width container, only a fluid gutter, so the hero and every section share one left edge at any width.

Motion moves things through space, not in and out of visibility. Sections arrive by rising and untilting; a statement band crosses out the old tools line by line as it scrolls; a ring of stack names turns and lights the matching row of the list beside it. Smooth scroll ties it together. Under reduced motion all of it stops, and the page reads complete and still.

**Key Characteristics:**
- Near-black ground, graphite panels, ember as the single action fill with dark text on it.
- Cobalt as the cool counter-light: rims, progress lines, the point field, secondary labels.
- Uppercase Chakra Petch display at poster scale; Manrope 18px body with tabular numerals.
- Square corners everywhere; depth from perspective, rim light and one deep black drop shadow.
- Full-bleed sections with a clamp gutter; no centred max-width column.
- Motion is position, tilt and depth; reduced motion freezes everything into a complete static page.

## Colors

A night palette with exactly two lights: warm ember for action and emphasis, cool cobalt for structure and rim.

### Primary
- **Ember** (#FF6B35): the key light. The only fill for actions (nav and block buttons, the hero media card, selected chips, the open accordion icon), the highlighter bar behind marked words, the statement band's full-bleed ground, focus outlines, the caret, the scrollbar thumb, link underlines and footer column heads. Text on ember is always On-Ember, never white.
- **Ember Deep** (#E8541E): hover and pressed state of every ember fill.
- **On-Ember** (#08090D): the dark text colour used on any ember surface.

### Secondary
- **Cobalt** (#3B7AD9): the logo's blue and the cool second light. One end of the two-light rim, the start of the process progress line, the low crests of the hero point field. Used for lines and light, not for fills or body text.
- **Cobalt Soft** (#8DB4F0): readable cobalt for small text on dark (the "Out:" lines under process steps, every third stack-ring label).

### Neutral
- **Ground** (#08090D): page background; input background; the work-card plate.
- **Ground Deep** (#050608): alternating section ground (services, process, footer), window title bars, mobile menu, focused inputs.
- **Graphite** (#11141B): raised panels (facts, steps, work panels, product windows) and the contact section ground.
- **Graphite Raised** (#181C25): device bezels framing product screenshots.
- **Hairline** (rgba(243, 244, 246, 0.11)): dividers, section top borders, list rules.
- **Hairline Strong** (rgba(243, 244, 246, 0.24)): input, chip and tag outlines; the mobile menu toggle.
- **Bone** (#F3F4F6): primary text and the 2px rule that opens the accordion and stack list.
- **Mist** (#A9B0BC): secondary text, labels, captions (about 8:1 on Ground).
- **Intro Navy** (#000631): reserved for the intro film overlay only, matching the film's own ground so letterboxing disappears.
- **Signal Error** (#FF8A8A): invalid input borders and form error messages.

### Named Rules
**The One Fill Rule.** Ember is the only colour a clickable thing is filled with, and its text is always On-Ember. Cobalt never fills a control.

**The Two Lights Rule.** Colour light enters only through the rim, the point field and lines: cobalt from one side, ember from the other. There are no coloured blurred glows, no gradient text and no glass cards.

## Typography

**Display Font:** Chakra Petch (with Bahnschrift, sans-serif), self-hosted 400 and 700
**Body Font:** Manrope (with system-ui, sans-serif), self-hosted variable 200 to 800

**Character:** A squared, engineered display face shouted in uppercase against a calm, round, highly legible reading face. The display does the persuading; Manrope does the explaining.

### Hierarchy
- **Display XL** (700, clamp(56px, 9vw, 150px), 0.88): the closing call ("Let's build yours.").
- **Hero** (700, clamp(40px, min(6.9vw, 9.4vh), 112px), 0.9): the hero headline only. Sized by the smaller of width and height so wide-but-short screens keep the hero action in view.
- **Display** (700, clamp(32px, 6.2vw, 96px), 0.92, balanced wrap): section headings, the statement band, the outlined process numerals.
- **Statement** (700, clamp(26px, 3vw, 44px), 1.5, sentence case): the "who we are" paragraph that lights word by word.
- **Title** (700, clamp(22px, 2.4vw, 36px), 1.0): practice names, work-card and step titles, fact headings, the media card title, the contact CTA.
- **CTA Hero** (700, clamp(22px, min(2.4vw, 3.6vh), 36px), 0.04em): the hero's full-width Book a call block, height-aware like the headline.
- **Nav** (400, 15px, 0.06em, uppercase): menu links and the nav CTA (700 there).
- **Label** (400, 13px, 0.05 to 0.1em, uppercase): tags, field labels, window titles, work category lines, step outputs, footer heads, the hero note.
- **Body** (Manrope 400, 18px, 1.6, tabular numerals): reading text; ledes capped near 46ch, practice text near 52ch.
- **Body Small** (Manrope 400, 16px, 1.5): section subs, card descriptions, fact and step text.

### Named Rules
**The Uppercase Display Rule.** Every Chakra Petch heading is uppercase, 700, letter-spacing -0.01em, line-height under 1.05. The statement paragraph is the one sentence-case display use.

**The Highlighter Rule.** Emphasis inside display type is an ember bar behind the word (On-Ember text, bar at 0.84em height), wiped in from the left. Never a colour change or gradient on the letters.

## Layout

Sections run full bleed. The container has no max width; content sits inside a fluid gutter of clamp(16px, 4vw, 72px), so hero, sections, band and footer share one left edge at every width. Section padding is tall (clamp(100px, 14vh, 170px) typical), alternating Ground, Ground Deep and Graphite grounds separated by hairline top borders.

Section openings pair a heading and a short sub on an asymmetric 7:4 grid aligned to the baseline. The hero splits 0.92:1.08 copy to 3D stage, filling the viewport below a 72px sticky nav (64px under 900px). Panels group in grids with 16 to 20px gaps: three facts, four process steps (two under 1100px, one under 560px), a two-column work grid whose first panel spans the full width. Accordion rows use a 1.2:1:40px grid of name, short line and icon.

Breakpoints are 1100px, 900px (single column, burger menu, 3D tilts flattened on cards), 560px (phone), plus a short-desktop query (min-width 901px, max-height 820px) that tightens the hero. The page never scrolls horizontally; sections holding 3D-tilted cards clip their overflow on the x-axis.

## Elevation & Depth

Depth is spatial, not tonal. Real perspective (1000 to 1800px) gives the hero stage, facts, steps, accordion images and work panels a 3D space; elements sit at translateZ distances and tilt with rotateX and rotateY. Raised panels are flat graphite with the two-light rim as their edge. One shadow exists, a deep black drop that grounds floating objects; it is never coloured.

### Shadow Vocabulary
- **Deep Drop** (`box-shadow: 0 40px 80px -30px rgba(0, 0, 0, 0.85), 0 2px 0 rgba(0, 0, 0, 0.5)`): under floating product windows, the hero media card and tilted accordion images only.
- **Glare** (`radial-gradient(600px circle at var(--gx) var(--gy), rgba(255, 255, 255, 0.16), transparent 45%)`): white specular that follows the pointer across a work panel on hover.

### Named Rules
**The Two-Light Rim Rule.** Raised panels (product windows, work panels, facts, steps) take a 1px transparent border filled by a border-box gradient at an angle: cobalt, faint bone (8%) from 38% to 62%, then ember. On work panels the angle turns so the cobalt corner faces the pointer. This rim is the only coloured light on a panel.

**The Recede Rule.** The hero's window stack tilts toward the pointer at rest and, as the hero scrolls out, pulls back up to 280px in depth and turns away. Depth answers the visitor; it never loops on its own.

## Shapes

Square corners throughout (0px), including buttons, inputs, chips, panels, scrollbar thumb and the mobile toggle. The one round form is the three window-chrome dots in product window title bars, part of the window device. Borders are thin and structural: 1px hairlines, 1.5px outlines on inputs, chips and the accordion icon, 2px Bone rules opening lists, a 3px ember top edge on work cards, a 32x4px ember tick above fact headings. Screenshots sit in Graphite Raised bezels (6px sides, 20px top; 12px and 30px on work panels). Process numerals are outlined, not filled (1.5px ember text stroke).

## Components

### Buttons
Heavy, square, warm and magnetic.
- **Shape:** square (0px).
- **Primary (nav CTA):** Ember fill, On-Ember Chakra Petch 700 uppercase 15px at 0.04em, padding 12px 18px, trailing chevron.
- **Block CTA:** the same treatment full width, Title or CTA Hero size, padding up to 22px 24px; used for the hero action and the form submit.
- **Hover / Focus:** fill deepens to Ember Deep, the chevron slides 4px right; on fine pointers the button drifts toward the cursor (8% x, 25% y). Pressed: down 1px, scale 0.99. Focus: 2px ember outline at 3px offset.
- **Ghost (intro Skip):** transparent, Bone text, 1px bone outline at 35%; hover turns border and text ember.
- **Text link (work panels):** ember uppercase label with a 2px ember underline; the gap to its chevron widens on hover.

### Chips
- **Style:** square, transparent, 1.5px Hairline Strong outline, Bone Manrope 600 15px, padding 10px 14px.
- **State:** hover outlines ember; selected fills ember with On-Ember text. Static tags use the 13px label face with a 1px outline and turn ember on hover.

### Cards / Containers
- **Corner Style:** square (0px).
- **Background:** Graphite panels; work cards are Ground plates set inside the panel.
- **Shadow Strategy:** the two-light rim; Deep Drop only for objects floating in the hero or tilted out of the page.
- **Internal Padding:** about 24 to 32px.
- **Hover:** facts lift 6px, steps lift 8px, work panels tilt up to 8 degrees with glare and their screenshot scales 1.04.

### Inputs / Fields
- **Style:** Ground background, 1.5px Hairline Strong border, square, Manrope 500 18px, padding 13px 14px, ember caret. Labels in the 13px uppercase label face above.
- **Focus:** border turns ember, background drops to Ground Deep, no outline ring.
- **Error:** Signal Error border on user-invalid; error messages in Signal Error, success messages in ember.

### Navigation
Sticky 72px bar on Ground at 82% with a 14px backdrop blur and a hairline bottom. Logo left; Mist uppercase links right that turn Bone on hover with a 2px ember underline growing from the left; ember CTA last. Under 900px the links collapse behind a square 44px burger into a Ground Deep drop-down of 22px bold rows.

### Product Window (signature)
A graphite window with a Ground Deep title bar (three dots, the first ember, then the product URL in the label face) over a real screenshot, edged by the two-light rim and floated on Deep Drop. Three windows stack at 70, 140 and 210px depth in the hero; each pushes 40px closer on hover. An ember media card anchors the stage's lower right.

### Practices Accordion
A 2px Bone rule opens a list of hairline rows. Hovering a row indents it 14px and turns it ember; the square plus icon rotates into an ember-filled minus when open, and the open row reveals text, tags and a screenshot tilted -8 degrees in Y that flattens on hover. One row open at a time.

### Statement Band
A full-bleed ember band in Display type with On-Ember text. Each old-tool line is struck through by a thin bar drawn left to right as the band scrolls in; the final line, the turn, stands unstruck.

### Process Steps
Four rim-lit graphite steps, each led by an outlined ember numeral 01 to 04, a title, short text and a Cobalt Soft "Out:" line. A 4px track beneath fills with a cobalt-to-ember gradient as the steps scroll past.

### Stack Ring
Stack names on a slowly turning 3D ring, alternating Bone, ember and Cobalt Soft, masked to fade at both edges and hidden as they turn past about 65 degrees. Whichever name faces the visitor lights its row in the adjacent list (ember tint, 12px indent, ember underline). It turns only while on screen.

### Hero Wave Field
A WebGL grid of round points behind the hero (Three.js r149) that ripples continuously, coloured cobalt in the troughs to ember on the crests, rising under the pointer. Points fade with distance and drop to 28% strength under the headline column so the copy stays legible. It pauses when the hero leaves the screen and renders one still frame under reduced motion.

### Intro Film
The client's own film plays once per browser session on an Intro Navy overlay, inside a centred 16:9 frame (width min(100vw, 100vh x 16/9), video cover-fitted), so any letterboxing is the film's own navy. A small Intro Navy patch masks the exporter's corner mark (left 87.8%, top 91.2%, 11.8% x 7.6% of the frame). The film runs at 2.2x speed; a 3px ember progress line along the bottom tracks film time to the 3.6s mark, and a square Skip button sits top right (Escape also skips). Once film time reaches 3.6s (the wordmark has settled) and the page has loaded, or at a 4000ms safety cap, the overlay lifts away as a curtain (clip-path inset to the top, 0.7s, cubic-bezier(0.76, 0, 0.24, 1)), is removed 750ms later, and the hero entrance begins. Skipped entirely under reduced motion.

## Do's and Don'ts

### Do:
- **Do** fill every action with Ember (#FF6B35) and set its text in On-Ember (#08090D); hover to Ember Deep (#E8541E).
- **Do** edge raised panels with the two-light rim: 1px transparent border, border-box gradient cobalt, faint bone at 38 to 62%, ember.
- **Do** set headings in uppercase Chakra Petch 700 at -0.01em with line-height 0.88 to 1.05, and emphasise words with the ember highlighter bar.
- **Do** keep corners square (0px) on every control and panel.
- **Do** run sections full bleed inside the clamp(16px, 4vw, 72px) gutter so all content shares one left edge.
- **Do** bring sections in by position and tilt (rise about 70px, untilt from -18 degrees, expo-out over 1.1s) with content fully visible from the first frame.
- **Do** pause continuous effects (wave field, stack ring) when offscreen, and make every effect static under reduced motion.
- **Do** size hero type and the hero CTA by min(vw, vh) so the action stays in the first viewport on short wide screens.

### Don't:
- **Don't** fill controls with cobalt or put white text on ember.
- **Don't** add coloured blurred glows, gradient text or glassmorphism cards; colour light comes only from the rim, the field and lines.
- **Don't** add kickers or eyebrow labels above headings.
- **Don't** number sections; the 01 to 04 process numerals are the only numbering.
- **Don't** use side-stripe accents on cards or rounded corners anywhere.
- **Don't** use any shadow other than the black Deep Drop, and only for objects floating in depth.
- **Don't** use Intro Navy (#000631) outside the intro film overlay.
