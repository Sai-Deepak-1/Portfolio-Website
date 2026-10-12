# Design notes — reference study

Reference inspected in a browser on 12 October 2026 at 1440px and 390px wide. These notes describe **the design system mechanics only**. The portfolio deliberately uses its own blue/lilac palette, copy, SVG illustrations, information architecture, and branding.

## Measured tokens

| Area | Reference measurement | Portfolio adaptation |
| --- | --- | --- |
| Paper / ink | `#fff` / `#1e1e1e` | warm white / deep blue-black |
| Accent / tint | `#3aced6`, `#ebf6f7` | cobalt / pale periwinkle |
| Hairline / muted | `#dedede` / `#636363` | cool grey-blue equivalents |
| Display / body / mono | Onest Variable / Schibsted Grotesk Variable / DM Mono | locally bundled Mona Sans narrow / Geist / Geist Mono to avoid external font requests |
| Radius | chip 6px, control 10px, surface 18px, pill 16px | 8px, 14px, 20px, and 999px respectively |
| Small controls | 40–44px high | 44px minimum target (keyboard/touch friendly) |
| Hairline | 1px (`#dedede`) | 1px cool-grey border |

## Type and layout

- Body is 16px / 24px at a normal weight; small meta text is 14px / 20px; labels use a monospace face.
- Measured display heading: 72px, 500 weight, `-2.16px` tracking, 70.56px leading at 1440px; 48px, `-1.44px` tracking, 47.04px leading at roughly 700px. The rebuild uses `clamp(3.25rem, 8.2vw, 7.5rem)` with tight, negative tracking.
- The desktop main frame is `max-width: 80rem` with a 24px internal gutter; at 1440px its visible container is 1280px wide. Header content uses 48px outer margins and 24px horizontal padding.
- Mobile uses 16px page padding. Main content begins after a 32px top pad. Desktop section spacing is in 64px, 80px and 112px steps; mobile tightens to 48px and 64px.
- The base spacing unit is 4px. Cards preserve whitespace instead of relying on heavy shadows.

## Surfaces and interaction styling

- The header is sticky. At rest it is transparent; once scrolled its rounded 20px inner bar gains a 1px border, ~85% paper background, and 24px backdrop blur. Its transition is 300ms `cubic-bezier(0, 0, .2, 1)`.
- Text navigation uses transparent pill buttons; hover adds a hairline and restores ink. Default UI colour/border transitions are 150–200ms with Material-style ease-out `cubic-bezier(0, 0, .2, 1)`.
- Focus is explicit: a 2px ink outline with offset. The skip link is initially translated above the viewport and translates into view on focus.
- The search/command trigger is a bordered, high-radius control. The expanded palette is full viewport on a small screen and uses a capped `42rem` reading column. Its input is 52px tall, white, 16px rounded, with an 18px leading inset.
- Content lists are plain, directory-like rows with 1px separators, strong title hierarchy, short supporting metadata, and a small “Show more” continuation action.

## Motion, overlays and scroll

- Reference spring-like entrance curve: `cubic-bezier(.16, 1, .3, 1)`; exit: `cubic-bezier(.76, 0, .24, 1)`; a second settling curve is `cubic-bezier(.22, 1, .36, 1)`.
- Measured durations: small hover 150–200ms, header 300ms, palette entrance 460ms, menu entrance 520ms, menu row entrance 560ms (staggered), decorative arrow transform 680ms. The rebuild applies these only to `transform` and `opacity`.
- Reference uses a fixed, full-viewport menu/dialog and staggered entry. Its mobile menu uses 72px tall rounded tiles and a very light tinted backdrop. The portfolio turns this into a keyboard-modal navigation overlay with original geometric previews that change on hover/focus.
- The reference has sticky scroll chrome and short visual/sentence sequences. The rebuild uses viewport-triggered opacity/translate reveal for storytelling sections, leaving every section in normal document flow to prevent layout shift.
- Every motion treatment has a `prefers-reduced-motion: reduce` override that removes animation/transition and exposes the final state immediately.

## Responsive behaviour measured

- Key reference thresholds include 480px, 600px, 768px, 780px, 1150px, then 40rem, 48rem, 64rem, 80rem and 96rem utility steps.
- The rebuild treats 360px as the minimum: fixed-size decorative objects are contained in a reserved hero canvas; cards drop to one column; directory rows stack their metadata; controls remain at least 44px tall.
- A compact menu trigger appears below the 768px navigation threshold; the portfolio keeps the same information available in its full overlay at every width.

## Deliberate differences

The result does **not** reuse the reference’s city/food-safety wording, editorial imagery, cut-outs, names, code, logo, or source assets. It replaces them with portfolio-specific placeholders and in-CSS/original inline SVG motifs, and keeps all personal claims visibly tagged `[PLACEHOLDER]` until supplied by the site owner.
