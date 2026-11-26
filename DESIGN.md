---
name: Edgevyn
description: Software company landing page in Light & Cobalt; a dimensional studio site where running products float in depth over an inked point field.
colors:
  bg: "#F6F8FC"
  bg-deep: "#EBF0F8"
  surface: "#FFFFFF"
  surface-2: "#E3E9F3"
  line: "rgba(11, 21, 48, 0.10)"
  line-strong: "rgba(11, 21, 48, 0.22)"
  text: "#0B1530"
  mist: "#4A5670"
  accent: "#2B5FD9"
  accent-deep: "#1E4BB8"
  on-accent: "#FFFFFF"
  second: "#FF6B5B"
  second-soft: "#B8402F"
  navy: "#0B1530"
  on-navy: "#F2F5FB"
  on-navy-soft: "rgba(242, 245, 251, 0.72)"
  intro-navy: "#000631"
  signal-error: "#C62828"
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
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.nav}"
    rounded: "{rounded.none}"
    padding: "12px 18px"
  button-primary-hover:
    backgroundColor: "{colors.accent-deep}"
    textColor: "{colors.on-accent}"
  button-block:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.cta-hero}"
    rounded: "{rounded.none}"
    padding: "clamp(14px, 2.2vh, 22px) 24px"
    width: "100%"
  button-block-hover:
    backgroundColor: "{colors.accent-deep}"
  button-ghost:
    backgroundColor: "{colors.intro-navy}"
    textColor: "{colors.on-navy}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "10px 16px"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    rounded: "{rounded.none}"
    padding: "10px 14px"
  chip-selected:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
  input:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.text}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "13px 14px"
  input-focus:
    backgroundColor: "{colors.bg-deep}"
  panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.none}"
    padding: "30px 28px 32px"
  work-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.none}"
    padding: "24px 26px 22px"
  media-card:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.none}"
    padding: "22px 64px 22px 24px"
  statement-band:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.on-navy}"
    typography: "{typography.display}"
    padding: "clamp(80px, 13vh, 150px) clamp(16px, 4vw, 72px)"
  footer:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.on-navy}"
    padding: "72px 0 40px"
---

# Design System: Edgevyn

## Overview

**Creative North Star: "Light & Cobalt"**

The site is a bright, cool room with two lights in it. A near-white ground holds white panels and a cool blue-grey alternate band; navy ink carries the type. Cobalt is the key light and the only colour an action is ever filled with, always with white text on it. Coral is the warm second light: it draws rims, strikes and the crests of the hero's point field, and it never fills a control. Two navy bands (the statement and the footer) are the only dark grounds, so the page reads clearly apart from the dark product apps it shows.

Depth is the material. Real product windows float at three distances in CSS 3D, tilt toward the pointer and recede as the page scrolls; work panels tilt under a soft glare; every raised panel is edged by a one-pixel rim running from coral in one corner to cobalt in the other, and hovering a panel swaps the two lights. Floating objects sit on one soft navy-tinted shadow. Type is squared and loud: Chakra Petch in uppercase at poster scale with tight leading, Manrope for reading text at a generous 18px, and words that matter set in white on cobalt highlighter bars. Layout runs edge to edge inside one fluid gutter.

Motion moves things through space, not in and out of visibility. Sections rise and untilt; the statement band crosses out the old tools line by line; a ring of stack names turns and lights the matching row beside it; smooth scroll ties it together. Under reduced motion all of it stops and the page reads complete and still.

**Key Characteristics:**
- Near-white ground, white panels, navy ink; cobalt as the single action fill with white text on it.
- Coral as the warm counter-light: rims, strikes, the point field, small outputs.
- Navy only for the statement band and footer; Intro Navy only for the intro film.
- Uppercase Chakra Petch display at poster scale; Manrope 18px body with tabular numerals.
- Square corners everywhere; depth from perspective, the two-light rim and one soft navy shadow.
- Full-bleed sections with a clamp gutter; no centred max-width column.
- Motion is position, tilt and depth; reduced motion freezes everything into a complete static page.

## Colors

A daylight palette with exactly two lights: cool cobalt for action and emphasis, warm coral for rim and strike, both set against navy ink.

### Primary
- **Cobalt** (accent): the key light. The only fill for actions (nav and block buttons, the hero media card, selected chips, the open accordion icon), the highlighter bar behind marked words, focus outlines, the caret, the scrollbar thumb, the nav underline, fact ticks, the work-card top edge, text links, outlined process numerals, the lit edge of the word-by-word statement and success messages. Also one end of the two-light rim and the troughs of the point field.
- **Cobalt Deep** (accent-deep): hover state of every cobalt fill.
- **On-Accent** (on-accent): white, the text colour on any cobalt surface.

### Secondary
- **Coral** (second): the warm second light. One end of the two-light rim, the strike bars in the statement band, the crests of the hero point field, the start of the process progress line; on navy it also carries footer column heads, the footer mail underline, footer link hovers, footer focus rings and the intro Skip hover. Lines and light only; never a fill, never small text on the light ground.
- **Coral Deep** (second-soft): coral dark enough for small text on light (the "Out:" lines under process steps, every third stack-ring label).

### Neutral
- **Ground** (bg): page background, input background, the sticky nav (at 86% under a blur).
- **Ground Deep** (bg-deep): the alternate band (services, process), window title bars, the mobile menu, focused inputs, the scrollbar track.
- **Surface** (surface): raised panels (facts, steps, product windows, work panels and their cards) and the contact section ground.
- **Bezel** (surface-2): the frame around product screenshots.
- **Hairline** (line): dividers, section top borders, list rules.
- **Hairline Strong** (line-strong): input, chip and tag outlines; product window edges; the mobile toggle.
- **Navy Ink** (text): primary text and the 2px rule that opens the accordion and stack list.
- **Mist** (mist): secondary text, labels, captions, nav links at rest (about 7:1 on Ground).
- **Navy** (navy): the statement band and the footer grounds.
- **On-Navy** (on-navy) and **On-Navy Soft** (on-navy-soft): text on navy; the soft value for struck lines and footer small print.
- **Intro Navy** (intro-navy): reserved for the intro film overlay, matching the film's own ground so letterboxing disappears.
- **Signal Error** (signal-error): invalid input borders and form error messages.

### Named Rules
**The One Fill Rule.** Cobalt is the only colour a clickable thing is filled with, and its text is always white. Coral never fills a control.

**The Two Lights Rule.** Colour light enters only through the rim, the point field, strikes and lines: cobalt from one side, coral from the other. There are no coloured blurred glows, no gradient text and no glass cards.

**The Navy Bands Rule.** The light ground is broken only by navy: the statement band and the footer. On navy, coral takes over the accent jobs (heads, underlines, hovers, focus) and cobalt stays out.

## Typography

**Display Font:** Chakra Petch (with Bahnschrift, sans-serif), self-hosted 400 and 700
**Body Font:** Manrope (with system-ui, sans-serif), self-hosted variable 200 to 800

**Character:** A squared, engineered display face shouted in uppercase against a calm, round, highly legible reading face. The display does the persuading; Manrope does the explaining.

### Hierarchy
- **Display XL** (700, clamp(56px, 9vw, 150px), 0.88): the closing call ("Let's build yours.").
- **Hero** (700, clamp(40px, min(6.9vw, 9.4vh), 112px), 0.9): the hero headline only. Sized by the smaller of width and height so wide-but-short screens keep the hero action in view.
- **Display** (700, clamp(32px, 6.2vw, 96px), 0.92, balanced wrap): section headings, the statement band (0.95), the outlined process numerals.
- **Statement** (700, clamp(26px, 3vw, 44px), 1.5, sentence case): the "who we are" paragraph that lights word by word.
- **Title** (700, clamp(22px, 2.4vw, 36px), 1.0): practice names, work-card and step titles, fact headings, the media card title, the contact CTA.
- **CTA Hero** (700, clamp(22px, min(2.4vw, 3.6vh), 36px), 0.04em): the hero's full-width Book a call block, height-aware like the headline.
- **Nav** (400, 15px, 0.06em, uppercase): menu links and the nav CTA (700 there).
- **Label** (400, 13px, 0.05 to 0.1em, uppercase): tags, field labels, window titles, work category lines, step outputs, footer heads, the hero note.
- **Body** (Manrope 400, 18px, 1.6, tabular numerals): reading text; ledes capped near 46ch, practice text near 52ch.
- **Body Small** (Manrope 400, 16px, 1.5): section subs, card descriptions, fact and step text.

### Named Rules
**The Uppercase Display Rule.** Every Chakra Petch heading is uppercase, 700, letter-spacing -0.01em, line-height under 1.05. The statement paragraph is the one sentence-case display use.

**The Highlighter Rule.** Emphasis inside display type is a cobalt bar behind the word (bar at 0.84em height), wiped in from the left while the letters turn from navy ink to white. Never a colour change alone or a gradient on the letters.

## Layout

Sections run full bleed. The container has no max width; content sits inside a fluid gutter of clamp(16px, 4vw, 72px), so hero, sections, band and footer share one left edge at every width. Section padding is tall (clamp(100px, 14vh, 170px) typical), alternating Ground, Ground Deep and Surface grounds separated by hairline top borders, with the navy statement band between services and work and the navy footer to close.

Section openings pair a heading and a short sub on an asymmetric 7:4 grid aligned to the baseline. The hero splits 0.92:1.08 copy to 3D stage, filling the viewport below a 72px sticky nav (64px under 900px). Panels group in grids with 16 to 20px gaps: three facts, four process steps (two under 1100px, one under 560px), a two-column work grid whose first panel spans the full width. Accordion rows use a 1.2:1:40px grid of name, short line and icon.

Breakpoints are 1100px, 900px (single column, burger menu, 3D tilts flattened on cards), 560px (phone), plus a short-desktop query (min-width 901px, max-height 820px) that tightens the hero. The page never scrolls horizontally; sections holding 3D-tilted cards clip their overflow on the x-axis.

## Elevation & Depth

Depth is spatial, not tonal. Real perspective (1000 to 1800px) gives the hero stage, facts, steps, accordion images and work panels a 3D space; elements sit at translateZ distances and tilt with rotateX and rotateY. Raised panels are flat white with the two-light rim as their edge. One shadow exists, a soft navy-tinted drop that grounds floating objects.

### Shadow Vocabulary
- **Deep Drop** (`box-shadow: 0 30px 60px -28px rgba(11, 21, 48, 0.35), 0 2px 0 rgba(11, 21, 48, 0.06)`): under floating product windows, the hero media card, work cards and tilted accordion images.
- **Glare** (`radial-gradient(600px circle at var(--gx) var(--gy), rgba(243, 244, 246, 0.24), transparent 45%)`): pale specular that follows the pointer across a work panel's screenshot on hover.

### Named Rules
**The Two-Light Rim Rule.** Raised panels (product windows, work panels, facts, steps) take a 1px transparent border filled by a border-box gradient at 135 degrees: coral, faint navy (8%) from 38% to 62%, then cobalt. Hovering a window, fact or step turns the angle to 315 degrees over 0.6s so the two lights swap corners; on work panels the angle follows the pointer instead. This rim is the only coloured light on a panel.

**The Recede Rule.** The hero's window stack tilts toward the pointer at rest and, as the hero scrolls out, pulls back up to 280px in depth and turns away. Depth answers the visitor; it never loops on its own.

**The Ink Field Rule.** On the light ground the hero point field is drawn as ink, not added light: normal blending, cobalt in the troughs to coral on the crests, at most 85% opacity, fading with distance and quieted to 28% under the headline column.

## Shapes

Square corners throughout (0px), including buttons, inputs, chips, panels, scrollbar thumb and the mobile toggle. The one round form is the three window-chrome dots in product window title bars, part of the window device. Borders are thin and structural: 1px hairlines, 1.5px outlines on inputs, chips and the accordion icon, 2px navy rules opening lists, a 3px cobalt top edge on work cards, a 32x4px cobalt tick above fact headings. Screenshots sit in Bezel frames (6px sides, 20px top; 12px and 30px on work panels). Process numerals are outlined, not filled (1.5px cobalt text stroke).

## Components

### Buttons
Heavy, square, cool and magnetic.
- **Shape:** square (0px).
- **Primary (nav CTA):** Cobalt fill, white Chakra Petch 700 uppercase 15px at 0.04em, padding 12px 18px, trailing chevron.
- **Block CTA:** the same treatment full width, Title or CTA Hero size, padding up to 22px 24px; used for the hero action and the form submit.
- **Hover / Focus:** fill deepens to Cobalt Deep, the chevron slides 4px right; on fine pointers the button drifts toward the cursor (8% x, 25% y). Pressed: down 1px, scale 0.98. Focus: 2px cobalt outline at 3px offset.
- **Ghost (intro Skip):** Intro Navy ground, On-Navy text, 1px outline at 35%; hover turns border and text coral.
- **Text link (work panels):** cobalt uppercase label with a 2px cobalt underline; the gap to its chevron widens on hover.

### Chips
- **Style:** square, transparent, 1.5px Hairline Strong outline, navy Manrope 600 15px, padding 10px 14px.
- **State:** hover outlines cobalt; selected fills cobalt with white text. Static tags use the 13px label face in Mist with a 1px outline and turn cobalt on hover.

### Cards / Containers
- **Corner Style:** square (0px).
- **Background:** Surface panels; work cards are Surface plates set inside the panel with a cobalt top edge and the Deep Drop.
- **Shadow Strategy:** the two-light rim; Deep Drop only for objects floating in depth or tilted out of the page.
- **Internal Padding:** about 24 to 32px.
- **Hover:** facts lift 6px, steps lift 8px (both swapping their rim lights), work panels tilt up to 8 degrees with glare and their screenshot scales 1.04.

### Inputs / Fields
- **Style:** Ground background, 1.5px Hairline Strong border, square, Manrope 500 18px, padding 13px 14px, cobalt caret. Labels in the 13px uppercase label face in Mist above.
- **Focus:** border turns cobalt, background drops to Ground Deep, no outline ring.
- **Error:** Signal Error border on user-invalid; error messages in Signal Error, success messages in cobalt.

### Navigation
Sticky 72px bar on Ground at 86% with a 14px backdrop blur and a hairline bottom. The navy-and-blue logo (edgevyn-logo-dark.png) sits left at 30px tall; Mist uppercase links right turn navy on hover with a 2px cobalt underline growing from the left; the cobalt CTA comes last. Under 900px the links collapse behind a square 44px burger into a Ground Deep drop-down of 22px bold rows. The footer uses the white-and-blue logo (edgevyn-logo.png) at 40px on navy.

### Product Window (signature)
A white window with a Ground Deep title bar (three dots, the first cobalt, then the product URL in the label face) over a real screenshot, edged by the two-light rim and floated on Deep Drop. Three windows stack at 70, 140 and 210px depth in the hero; each pushes 40px closer on hover. A cobalt media card anchors the stage's lower right.

### Practices Accordion
A 2px navy rule opens a list of hairline rows. Hovering a row tints it with cobalt at 4%, indents its head 14px and turns it cobalt; the square plus icon rotates into a cobalt-filled minus when open, and the open row reveals text, tags and a screenshot tilted -8 degrees in Y that flattens on hover. Photographs in the panel are greyscale. One row open at a time.

### Statement Band
A full-bleed navy band in Display type. Each old-tool line is set in On-Navy Soft and struck through by a thin coral bar drawn left to right as the band scrolls in; the final line, the turn, stands unstruck in On-Navy.

### Process Steps
Four rim-lit white steps, each led by an outlined cobalt numeral 01 to 04, a title, short text and a Coral Deep "Out:" line. A 4px track beneath fills with a coral-to-cobalt gradient as the steps scroll past.

### Stack Ring
Stack names on a slowly turning 3D ring, alternating navy, cobalt and Coral Deep, masked to fade at both edges and hidden as they turn past about 65 degrees. Whichever name faces the visitor lights its row in the adjacent list (cobalt tint at 10%, 12px indent, cobalt underline). It turns only while on screen.

### Hero Wave Field
A WebGL grid of round points behind the hero (Three.js r149) that ripples continuously and rises under the pointer, drawn under the Ink Field Rule. The camera lifts slightly as the hero scrolls away. It pauses when the hero leaves the screen and renders one still frame under reduced motion; without WebGL the light hero stands on its own.

### Intro Film
The client's own film plays once per browser session on an Intro Navy overlay, inside a centred 16:9 frame (width min(100vw, 100vh x 16/9), video cover-fitted), so any letterboxing is the film's own navy. A small Intro Navy patch masks the exporter's corner mark (left 87.8%, top 91.2%, 11.8% x 7.6% of the frame). The film runs at 2.2x speed; a 3px cobalt progress line along the bottom tracks film time to the 3.6s mark, and a square Skip button sits top right (Escape also skips). Once film time reaches 3.6s and the page has loaded, or at a 4000ms safety cap, the overlay lifts away as a curtain (clip-path inset to the top, 0.7s, cubic-bezier(0.76, 0, 0.24, 1)), is removed 750ms later, and the hero entrance begins. Skipped entirely under reduced motion.

## Do's and Don'ts

### Do:
- **Do** fill every action with Cobalt (#2B5FD9) and set its text in white; hover to Cobalt Deep (#1E4BB8).
- **Do** edge raised panels with the two-light rim: 1px transparent border, border-box gradient coral, faint navy at 38 to 62%, cobalt; swap the lights on hover.
- **Do** set headings in uppercase Chakra Petch 700 at -0.01em with line-height 0.88 to 1.05, and emphasise words with the cobalt highlighter bar and white letters.
- **Do** use Coral Deep (#B8402F), not Coral, for any small coral text on the light ground.
- **Do** keep corners square (0px) on every control and panel.
- **Do** run sections full bleed inside the clamp(16px, 4vw, 72px) gutter so all content shares one left edge.
- **Do** bring sections in by position and tilt (rise about 70px, untilt from -18 degrees, expo-out over 1.1s) with content fully visible from the first frame.
- **Do** pause continuous effects (wave field, stack ring) when offscreen, and make every effect static under reduced motion.
- **Do** size hero type and the hero CTA by min(vw, vh) so the action stays in the first viewport on short wide screens.
- **Do** use the navy logo on light grounds and the white logo on navy.

### Don't:
- **Don't** fill controls with coral or put navy text on cobalt.
- **Don't** add coloured blurred glows, gradient text or glassmorphism cards; colour light comes only from the rim, the field, strikes and lines.
- **Don't** add kickers or eyebrow labels above headings.
- **Don't** number sections; the 01 to 04 process numerals are the only numbering.
- **Don't** use side-stripe accents on cards or rounded corners anywhere.
- **Don't** use any shadow other than the navy-tinted Deep Drop, and only for objects floating in depth.
- **Don't** add dark grounds beyond the navy statement band and footer.
- **Don't** use Intro Navy (#000631) outside the intro film overlay.
