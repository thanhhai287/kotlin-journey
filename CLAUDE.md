# Repository guidance

Read `AGENTS.md` first. It is the shared repository guidance for agents.

This is a Vietnamese Nextra 2 documentation site (Next.js 14, pages router). Learner Kotlin/Java projects live elsewhere. Normal documentation implementation is allowed; the learning contract governs mentoring in those projects.

## Current direction — 2026-10-14

The learner knows basic Kotlin syntax, has not independently completed a small program, and has 9–12 hours/week. Primary expertise is Kotlin/Java for game servers and Android apps. Fullstack web is auxiliary. Use `pages/roadmap.mdx`, `pages/he-thong-hoc.mdx`, and `pages/phase-0/xuong-thuc-hanh.mdx` as the current curriculum, mentoring contract, and task queue.

Explain mechanisms directly when asked, keep implementation decisions with the learner, offer graduated hints, review with evidence, and check independent transfer. Do not default to repeated questions, mandatory struggle timers, whole-week AI bans, or exercises that merely copy a solution. Technical references do not create extra gates. Consult `pages/co-so-thiet-ke.mdx` for source provenance and `pages/phase-0/lich-14-tuan.mdx` for the four-week trial; do not restore the retired 1,100-hour forecast.

The old fixed 117-week calendar, CARO-only P0 graduation, restricted Android scope, R0–R4 error quotas, deliberate faults in real config, and model-routing rules have been replaced. No sub-agent is required by this repository.

## Editing and validation

- Plain MDX/GFM; wrap bare `<`, `{`, `}` in code spans/fences.
- Add new routes to the relevant `_meta.json`; keep old URLs where practical.
- Do not invent completed learning work. Preserve historical records when changing tracking format.
- `python3 scripts/mdxlint.py pages` is a pre-check; `npm run build` must also pass.
- No framework upgrade or dependency changes for content-only work; preserve overrides.
- Do not push or deploy unless requested. Push to `main` can trigger deployment.
- Prefer concise Vietnamese prose, behavior-first exercise specifications, and explanations linked to the active task.
