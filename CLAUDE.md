# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A **Nextra 2 documentation site** (Next.js 14, pages router) holding the study plan and progress
tracker for a 27-month Kotlin/JVM **game-server backend** roadmap. There is **no Kotlin code
here** — the learner's code lives in separate repos. Everything in `pages/` is Vietnamese prose.

## Commands

```bash
npm install     # first time
npm run dev     # http://localhost:3000
npm run build   # production build — the only real check in the repo
npm start       # serve the production build
```

There is no test suite, linter, or formatter. **Node v24 LTS is installed** at
`~/.local/opt/node-v24.20.0-linux-x64` with `node`/`npm`/`npx` symlinked into `~/.local/bin`, so
`npm run build` runs locally — that is the real check and it must pass. `scripts/mdxlint.py` is a
faster pre-check, not a substitute. Deploy is automatic on push to `main`.

## Architecture

- `pages/*.mdx` — every page. File path = URL (`pages/phase-0/bai-tap.mdx` → `/phase-0/bai-tap`).
- `pages/_meta.json`, `pages/phase-0/_meta.json` — sidebar **order and labels**. A new `.mdx` does
  not appear in navigation until its slug is added there. `mo-rong` is deliberately
  `"display": "hidden"` — reachable only by direct link.
- `theme.config.tsx` — the only TSX file: logo, footer, SEO description, sidebar/TOC behavior.
  The footer and `<meta name="description">` render on every page; they carry roadmap facts and
  must be updated whenever the headline numbers change.
- `next.config.mjs` — wraps Next in `nextra()`, plus a permanent redirect
  `/phase-0/lich-12-tuan` → `/phase-0/lich-14-tuan` for old bookmarks.

No `_app`, no `components/`, no custom MDX components. Pages are plain GFM markdown (tables,
checkboxes, code fences, emoji). Keep it that way — the content is edited by a non-JSX audience.

`package.json` `overrides` pin patched transitive deps (`next-mdx-remote`, `postcss`, `nanoid`,
`dompurify`). Do not drop them. `npm audit` still reports 9 findings that only clear by upgrading
Nextra 2 → 4 (which pulls Next 16 and the App Router); none are reachable here — the site is
pages-router, fully static, no `next/image`, no middleware, no Server Components. README has the
per-package reasoning.

## MDX v2 build trap

Bare `<`, `{`, `}` in prose are parsed as JSX/expressions and **break the build**. Always wrap
them in backticks or a code fence: write `` `List<T>` ``, never `List<T>` raw. This is the single
most common way to break the build here.

Pre-check MDX with the static linter before running the full build:

```bash
python3 scripts/mdxlint.py pages
```

It strips fenced blocks, inline code spans and valid JSX tags, then flags what is left. It must
report `OK: 0 problem(s)`.

## Canonical numbers — every page must agree

Changing any of these means updating every page that prints them, plus `theme.config.tsx`,
`README.md` and `package.json`.

| Fact | Value |
|---|---|
| Start | **W1 = Monday 07/09/2026** (01/08/2026 is dead) |
| End | Sunday 03/12/2028 — **26.9 months** |
| Weeks | 117 calendar · 20 buffer · **97 running** |
| Hours | **1,100h** clock-hours (839h + 261h: 133h pulled back from `/mo-rong`, 128h closing seven depth gaps) |
| Phases | P0 W1–15 116h · P1 W16–35 187h · P2 W36–64 282h · P3 W65–85 209h · P4 W86–109 234h · P5 W110–117 72h |
| Pace | ramp 6h → 8h → 10h in P0 (unchanged), then 12h/week tier from W16, cap 14h; plan is 11.3h per running week |

**Market milestones anchor to the calendar, not to running weeks.** If 21/02/2028 arrives while
the learner is still mid-P3, they apply anyway with whatever artifacts exist.

## Progress tracking convention

Progress is GFM checkboxes and status tables inside the `.mdx` files — no database, no
localStorage. Ticking `- [ ]` → `- [x]` is a content edit, and **each tick is its own commit**;
git history is deliberately the evidence trail. Never tick a box on the learner's behalf unless
asked. `pages/progress.mdx` uses `⬜ / 🔄 / ✅` and requires an evidence entry (commit link,
filename, measurement) — never a feeling.

**No checkbox may appear before the "Ngày 1" section on the home page.** The previous version had
27 setup checkboxes and a 12-question entry test gating week 1; that is diagnosed as the cause of
five weeks at zero hours. Both were deleted. Day 1 is 90 minutes: IntelliJ, one runnable
`main.kt`, one commit, tag `v0.0.1`.

Commit messages: conventional-commit prefix, Vietnamese subject (`docs: đồng bộ site với roadmap`).

## The AI contract — read before mentoring

`pages/he-thong-hoc.mdx` is the authority. It binds how AI is used for the learner's **Kotlin
work**; editing this docs site is normal work and is not covered by it.

**AI-free for all 27 months** (an R0–R4 ladder from P2 teaches professional AI use *outside* these zones — it never opens them) — no code, not even pseudo-code; only concept names, doc links and
questions: tick loop · packet serialize/deserialize · session and connection handling · anything
touching `Mutex`/`Channel`/`Atomic`/shared state · reconnect and state sync.

**Phase 0 adds:** Tier 1 katas, the five timed katas of module 0.10, every blank-file round, and
the final week of Project 2 (`caro-cli`, W14) — not Project 1's final week (W11), which contains a
Bug Hunt Kata that AI sets and grades.

Core rules:

- **Never write, refactor, or skeleton Kotlin for the learner.** Not "just an example", not "to
  unblock". If an example is unavoidable when explaining a concept, the learner must close it and
  retype from memory.
- Default answer to a concept or bug question is 1–2 **guiding questions**.
- **Performance questions**: the entry fee is one measurement. Every other bug keeps the 30-minute
  struggle rule plus `notes/ERRORS.md` (hypothesis, 2 experiments, observed results).
- **Concurrency bugs**: do not offer a hypothesis. Ask only "what could run concurrently with this
  line?"
- Code review returns BLOCKER / SHOULD / NIT as **questions**, never a corrected version. Netcode
  and concurrency reviews use a fixed checklist: which thread? who holds the lock? what happens on
  two packets at once / garbage / a lost packet / 500ms late / two instances?
- **Numbers before words** — any performance or stability claim must come with how it was measured.
- **The learner's own machine** (JDK, Gradle wrapper, GitHub SSH/PAT, Android SDK, IDE wizards) is
  not learning content: help step by step. **Server config** (Dockerfile, Compose, systemd, Caddy,
  CI yaml) *is* learning content: supply an annotated sample with **three deliberate errors** for
  the learner to find, fix and explain.
- **"Shooting range" zone** — load generators, chaos scripts, fake logs with a planted root cause,
  test data, mock take-homes and mock JDs: AI may write these, but only *after* the corresponding
  module has passed its threshold with the learner's own implementation. Protocol and shared DTOs
  are always the learner's.
- **Examiner mode**: probe with changed-condition questions and two levels of "why"; answering with
  a library name instead of a mechanism is a fail.

Freely allowed: generating exercises, quizzes, adversarial test cases, test data, terminology
translation, and scaffolding unrelated to the learning goal (`.gitignore`).

**Blank-file test** replaces the old Friday Rebuild: every two weeks from W6, AI picks one
component the learner wrote; they rewrite it from an empty file with no internet and no AI, then
commit it as-is — even if it does not compile — to `rebuild/<date>-<name>.kt`.

`pages/phase-1.mdx` is locked. Do not fill it in until the learner passes DP2 at the end of W14
(graduation table ≥8/10 with items 1–5 mandatory, in `pages/phase-0/tot-nghiep.mdx`).

## Working conventions

**Model routing.** Hard work — complex design, large refactors, architecture analysis and
decisions, anything needing high reasoning — goes to a **Fable subagent**: the `Agent` tool with
`model: "fable"`, or `agent(prompt, {model: 'fable'})` inside a Workflow script. Mechanical work
(lookups, small mechanical edits, file moves) stays on the default model. State which route was
taken when reporting back.

**Career direction (chốt 05/09/2026).** Target job = **Backend Engineer (Kotlin/Java) at any
Vietnamese company**, entered through the general-backend door with a game-shaped product (CARO).
Game studios are a year-3–4 target, not a year-1 one: there is effectively no junior game-backend
opening in Vietnam. Android is 30h of internals (`/android-core`) plus a 16h Compose client (cap 20h) at P2; the client exists to demo and verify the server.
Unity/Godot = 0h, explicitly refused. Three foundation tracks (`/nen-tang-he-thong`,
`/android-core`, `/backend-core`) add 84h of Linux/kernel/thread, Android internals and general
backend depth woven into P1–P4. Every content change in `pages/` must serve that.
