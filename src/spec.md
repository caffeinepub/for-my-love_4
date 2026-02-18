# Specification

## Summary
**Goal:** Redesign the initial entrance overlay to feel “very cute” while keeping the love-letter page unchanged after the overlay dismisses.

**Planned changes:**
- Replace the current entrance overlay UI with a newly designed “very cute” overlay (full redesign, not minor tweaks) while preserving the underlying love-letter page layout and content after dismissal.
- Keep the entrance headline text exactly as: "my Feelings for you" and keep its color pinkish (not red).
- Ensure the overlay can be activated via tap/click and keyboard (Enter/Space), plays a short (~1 second) reveal sequence, then dismisses and calls the existing completion callback only after the animation ends (with a fallback timer).
- Respect `prefers-reduced-motion: reduce` by avoiding motion-heavy reveal and dismissing near-immediately; keep all entrance user-facing text in English.

**User-visible outcome:** On load, users see a newly “very cute” entrance overlay with the headline "my Feelings for you"; activating it (tap/click/Enter/Space) reveals the existing love-letter page, with reduced-motion users getting an almost immediate reveal.
