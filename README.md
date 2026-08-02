# 🚀 Hành trình Kotlin của Hải

Tài liệu học tập và tracker tiến độ cho lộ trình **24 tháng: từ "biết cú pháp" đến Mobile Dev
chuyên nghiệp**. Dựng bằng [Nextra](https://nextra.site), deploy trên [Vercel](https://vercel.com).

🌐 **Site:** _cập nhật URL sau khi deploy_ · 📅 **Bắt đầu:** 01/08/2026 · 📍 **Đang ở:** Phase 0, tuần 0

## 📚 Nội dung

Markdown sources trong [`pages/`](pages/):

| File | Trang |
|---|---|
| [`index.mdx`](pages/index.mdx) | Trang chủ — toạ độ hiện tại, 3 sự thật, checklist Tuần 0 |
| [`roadmap.mdx`](pages/roadmap.mdx) | Roadmap 24 tháng — 6 phase, những gì đã cắt, thang 11 project |
| [`he-thong-hoc.mdx`](pages/he-thong-hoc.mdx) | Hệ thống học & luật AI — nhịp buổi tối, hợp đồng với AI, đo lường |
| [`phase-0/`](pages/phase-0/) | **Tài liệu Phase 0 đầy đủ** — 8 trang, xem bảng dưới |
| [`phase-1.mdx`](pages/phase-1.mdx) | Phase 1 — khoá cho đến khi tốt nghiệp Phase 0 |
| [`progress.mdx`](pages/progress.mdx) | Tiến độ — bảng điểm, số liệu tuần, nhật ký buổi học |

### Phase 0 — Nền móng (tháng 1–3, ~125–140h)

| File | Trang |
|---|---|
| [`phase-0/index.mdx`](pages/phase-0/index.mdx) | Tổng quan — triết lý, test đầu vào, 10 lỗ hổng điển hình, tâm lý |
| [`phase-0/lich-12-tuan.mdx`](pages/phase-0/lich-12-tuan.mdx) | Lịch 12 tuần — việc phải xong từng tuần |
| [`phase-0/meta-skills.mdx`](pages/phase-0/meta-skills.mdx) | Meta-skills — IOSTV, đọc error, debug, đọc docs, git |
| [`phase-0/kotlin-core-1.mdx`](pages/phase-0/kotlin-core-1.mdx) | Kotlin Core I — module 4.1–4.5 (tuần 1–5) |
| [`phase-0/kotlin-core-2.mdx`](pages/phase-0/kotlin-core-2.mdx) | Kotlin Core II — module 4.6–4.10 (tuần 6–10) |
| [`phase-0/bai-tap.mdx`](pages/phase-0/bai-tap.mdx) | Bài tập — kata, Error Zoo, Docs Quest, decomposition drill |
| [`phase-0/projects.mdx`](pages/phase-0/projects.mdx) | Hai project — Sổ Chi Tiêu CLI, Flashcard CLI (capstone) |
| [`phase-0/tot-nghiep.mdx`](pages/phase-0/tot-nghiep.mdx) | Tốt nghiệp — 10 tiêu chí, vấn đáp, benchmark |

Thứ tự và nhãn sidebar: [`pages/_meta.json`](pages/_meta.json) và [`pages/phase-0/_meta.json`](pages/phase-0/_meta.json).

## ✅ Cách đánh dấu tiến độ

Checkbox trong site là **markdown GFM thuần**. Đánh dấu bằng cách sửa file `.mdx`:

```
- [ ] Việc chưa xong
- [x] Việc đã xong
```

Rồi commit. **Mỗi lần tick là một commit** — và commit chính là bằng chứng, đúng nguyên tắc
"đo bằng chứng cứ, không đo bằng cảm tính" của roadmap. Tiến độ nằm trong git history,
không nằm trong localStorage, nên nó theo bạn qua mọi máy và không bao giờ mất.

## 🛠️ Tech stack

- [Next.js 14](https://nextjs.org) + [Nextra 2](https://nextra.site) (`nextra-theme-docs`), pages router
- TypeScript · cấu hình theme: [`theme.config.tsx`](theme.config.tsx)
- Deploy: Vercel — auto-deploy mỗi `git push` về `main`

## 💻 Local dev

```bash
npm install     # lần đầu
npm run dev     # http://localhost:3000
npm run build   # build production (Vercel chạy lệnh này)
```

## ✏️ Sửa nội dung

1. Sửa file `.mdx` trong `pages/`
2. `git add . && git commit -m "..." && git push`
3. Site update sau khoảng 30 giây

> ⚠️ Nội dung `.mdx` chạy qua MDX v2: mọi ký tự `<`, `{`, `}` trong văn xuôi phải nằm trong
> backtick hoặc code fence, nếu không build sẽ vỡ. Viết `` `List<T>` ``, đừng viết trần.

## 🤝 Vai trò của AI trong repo này

Hợp đồng đầy đủ ở trang [Hệ thống học & luật AI](pages/he-thong-hoc.mdx). Tóm tắt: AI là
**mentor / examiner / reviewer — không bao giờ là author**. Site này chứa tài liệu và đề bài;
code Kotlin nằm ở repo project riêng và phải do người học tự gõ.
