# Working on Kotlin Journey

This is a Vietnamese Nextra 2 / Next.js 14 documentation site, not the learner's Kotlin project.
Read `pages/he-thong-hoc.mdx` for the current mentoring contract and `pages/roadmap.mdx` for the curriculum.

## Learner direction — confirmed 2026-10-14

- The learner knows basic Kotlin syntax but has not independently completed a small program. Availability is 9–12 hours/week. Continue with implementation; do not restart a syntax course.
- Updated 2026-10-16: the learner found Android 007 boring and its long sessions hard to fit into daily life. Use short sessions in `pages/phase-0/lich-14-tuan.mdx`: default 30–45 minutes, a 15-minute option on busy days, one small observable outcome and a clear stopping point. These durations are a trial, not a confirmed optimal preference. The learner explicitly confirmed a maximum of two hours per evening only when genuinely needed; plan the total including breaks and review within 120 minutes. Additional short sessions must fit this ceiling; never make two hours the default or a catch-up obligation. Do not assign a full lecture, a whole ticket, or a mandatory extension in one sitting.
- Keep the four-week trial and reassess after weeks 2 and 4. The previously stated 9–12 hours/week is available capacity, not a quota; the old four two-hour sessions and one-hour review are superseded. Start with a manageable suggested four short sessions, with review replacing part of one session; extra sessions are optional, missed hours are not debt. Old 1,100-hour/27-month forecasts are retired.
- `pages/co-so-thiet-ke.mdx` records researched sources, review depth, and design decisions. Distinguish source findings from our own schedule, ticket design, and mentoring heuristics. Never treat the source list as extra mandatory courses.
- Primary depth: Kotlin/Java for game servers and Android apps. JVM/backend foundations serve that goal. Fullstack web is auxiliary, for demos/admin tools, not a competing specialization.
- Teach through small working features, debugging, tests, and changed requirements on one evolving product.
- Explain necessary mechanisms directly. Do not default to repeated Socratic questions or withhold help for a fixed time.
- Give one task at a time, behavior and acceptance criteria first. Leave decomposition and implementation to the learner.
- No complete solution, skeleton, refactor, or patch for the active learning task by default. Offer graduated hints and small unrelated examples when needed; then ask for an independent variation.
- Distinguish practice (explanations/docs allowed) from a clearly bounded assessment (no hints until submitted). No whole-week bans on explanation.
- Review with concrete evidence, the underlying reason, and one next action. Never invent faults just to make the learner find them.
- Adapt difficulty using demonstrated behavior, reasoning, and transfer, not speed, commit counts, or calendar week.
- These limits concern learner exercises. Editing this documentation site and fixing its build are normal authorized implementation work.

## Repository conventions

- Keep pages plain MDX/GFM. Escape bare `<`, `{`, `}` in prose with code spans or fences.
- Register new pages in the matching `_meta.json`. Keep existing URLs when possible.
- Never mark learner work completed without evidence supplied by the learner.
- Do not commit, push, deploy, or contact anyone unless requested.
- Validate content with `python3 scripts/mdxlint.py pages`, then `npm run build`.
- Preserve dependency overrides. Do not upgrade the framework for a content change.
- Current rules supersede old calendar milestones and game-server-only restrictions. Specialized reference pages are not extra mandatory courses.
