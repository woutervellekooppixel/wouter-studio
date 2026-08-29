@AGENTS.md

## wouter.studio - stack en openstaande punten

<!-- overgenomen uit Claude Code-geheugen, 2026-08-29 -->

Full portfolio site for Wouter Vellekoop (creatief strateeg & interim creatief directeur).

**Stack:** Next.js 16 (App Router), Tailwind CSS v4, TypeScript, Resend for contact form email. Deployed to Vercel, domain wouter.studio.

**Key design decisions:**
- Accent color: terracotta `#C4714A` (user still needs to decide between terracotta and dark green `#2D5A3D`)
- Background: `#F9F9F7`, text: `#111111`
- Font: Geist Sans (variable, weights 400–800)
- Max-width: 720px text content, 1100px page container

**Contact form:** Uses Resend. Needs `RESEND_API_KEY` in `.env.local` to work. Sender address `contact@wouter.studio` must be verified in Resend dashboard.

**Pending TODOs (from brief):**
- [ ] Portretfoto voor /over (placeholder box exists)
- [ ] Beeldmateriaal WTC Rotterdam (cases page)
- [ ] Beeldmateriaal VA Magazine (cases page)
- [ ] Telefoonnummer invullen op /contact
- [ ] Mailadres @wouter.studio instellen + Resend API key configureren
- [ ] Beslissen: accent kleur terracotta of groen?
- [ ] Domein wouter.studio registreren / koppelen aan Vercel

**How to apply:** When building features or making design changes, refer to these constraints. The accent color decision is still open — ask user before using it in new prominent places.
