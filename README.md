# 🚀 Hành trình Game Server của Hải

Tài liệu học tập và tracker tiến độ cho lộ trình **26 tháng: từ "biết cú pháp Kotlin" đến
Game Server / Backend Engineer**. Dựng bằng [Nextra](https://nextra.site), deploy trên
[Vercel](https://vercel.com).

🌐 **Site:** _cập nhật URL sau khi deploy_ · 📅 **W1 = Thứ Hai 07/09/2026** → 05/11/2028 · 📍 **Đang ở:** Phase 0, W1

**Ba con số:** 113 tuần lịch · 94 tuần chạy · **839h** giờ đồng hồ tại bàn
(755h lộ trình sản phẩm + 84h ba trục nền tảng).

## 🎯 Lộ trình này đánh cược vào cái gì

Một sản phẩm duy nhất chạy public — **CARO**, game cờ caro online async có economy thật cộng một
chế độ **ARENA realtime 20Hz** — tự tay dựng từ socket thô lên tới báo cáo load test hai máy.
Cửa xin việc là **backend chung** ở một công ty bất kỳ tại Việt Nam; game là vỏ. Studio game là
đích của năm 3–4, vì ở Việt Nam gần như không tồn tại cửa Junior game backend.

| Phase | Tuần | Giờ | Tên gọi |
|---|---|---|---|
| **P0** | W1–15 | 116h | Kotlin viết được, không chỉ đọc được |
| **P1** | W16–38 | 169h | Server đầu tiên, người thật chơi qua web |
| **P2** | W39–67 | 218h | Dữ liệu bền + Android client + kênh apply mở |
| **P3** | W68–84 | 120h | ARENA tick slice + kinh tế |
| **P4** | W85–103 | 144h | Spring Boot + chịu tải + apply đợt 1 |
| **P5** | W104–113 | 72h | Đi làm hoặc sửa-và-apply-lại |

## 📚 Nội dung

Markdown sources trong [`pages/`](pages/):

| File | Trang |
|---|---|
| [`index.mdx`](pages/index.mdx) | Trang chủ — toạ độ hiện tại, ba sự thật, **Ngày 1 = 90 phút** |
| [`nghe-backend-game.mdx`](pages/nghe-backend-game.mdx) | Nghề backend game — hai nhánh, thị trường VN, stack, mốc thời gian trung thực |
| [`roadmap.mdx`](pages/roadmap.mdx) | Roadmap 26 tháng — 6 phase, thang 12 bậc, danh sách cắt, DP0–DP8 |
| [`he-thong-hoc.mdx`](pages/he-thong-hoc.mdx) | Hệ thống học & luật AI — nhịp buổi tối, ba nghi thức, hợp đồng với AI |
| [`nen-tang-he-thong.mdx`](pages/nen-tang-he-thong.mdx) | Nền tảng hệ thống — Linux, kernel, thread, `epoll`, signal, cgroup |
| [`android-core.mdx`](pages/android-core.mdx) | Android core — Binder, Zygote, ART, Looper, vòng đời tiến trình |
| [`backend-core.mdx`](pages/backend-core.mdx) | Backend core — API, mô hình dữ liệu, danh tính, vận hành |
| [`phase-0/`](pages/phase-0/) | **Tài liệu Phase 0 đầy đủ** — 11 trang, xem bảng dưới |
| [`phase-1.mdx`](pages/phase-1.mdx) | Phase 1 — khoá cho đến khi tốt nghiệp Phase 0 |
| [`progress.mdx`](pages/progress.mdx) | Tiến độ — bảng tuần, số liệu hệ thống, G1–G6, nhật ký |
| [`mo-rong.mdx`](pages/mo-rong.mdx) | Mở rộng — ẩn khỏi nav, chỉ mở khi số cho phép |

### Phase 0 — Kotlin viết được (W1–15, 116h)

| File | Trang |
|---|---|
| [`phase-0/index.mdx`](pages/phase-0/index.mdx) | Tổng quan — Ngày 1, ramp 6→8→10, 10 module, 10 lỗ hổng điển hình |
| [`phase-0/lich-14-tuan.mdx`](pages/phase-0/lich-14-tuan.mdx) | Lịch 14 tuần — việc phải xong từng tuần |
| [`phase-0/meta-skills.mdx`](pages/phase-0/meta-skills.mdx) | Meta-skills — IOSTV, đọc error, debug, đọc docs, git, đọc số đo |
| [`phase-0/kotlin-core-1.mdx`](pages/phase-0/kotlin-core-1.mdx) | Kotlin Core I — module 4.1–4.5 (W1–6) |
| [`phase-0/kotlin-core-2.mdx`](pages/phase-0/kotlin-core-2.mdx) | Kotlin Core II — module 4.6–4.8 (W7–9) |
| [`phase-0/concurrency-nhap-mon.mdx`](pages/phase-0/concurrency-nhap-mon.mdx) | Concurrency nhập môn — lost update thấy tận mắt |
| [`phase-0/game-loop-co-ban.mdx`](pages/phase-0/game-loop-co-ban.mdx) | Game loop & state machine — fixed timestep, seeded RNG |
| [`phase-0/byte-bit-so.mdx`](pages/phase-0/byte-bit-so.mdx) | Byte, bit & số — tràn số, toán tử bit, endian |
| [`phase-0/bai-tap.mdx`](pages/phase-0/bai-tap.mdx) | Bài tập — kata, Error Zoo, Docs Quest, decomposition drill |
| [`phase-0/projects.mdx`](pages/phase-0/projects.mdx) | Hai project — Túi đồ & Ví CLI, `caro-engine` + `caro-cli` |
| [`phase-0/tot-nghiep.mdx`](pages/phase-0/tot-nghiep.mdx) | Tốt nghiệp — 10 tiêu chí, vấn đáp 12 câu, benchmark |

Thứ tự và nhãn sidebar: [`pages/_meta.json`](pages/_meta.json) và
[`pages/phase-0/_meta.json`](pages/phase-0/_meta.json).

## ✅ Cách đánh dấu tiến độ

Checkbox trong site là **markdown GFM thuần**. Đánh dấu bằng cách sửa file `.mdx`:

```
- [ ] Việc chưa xong
- [x] Việc đã xong
```

Rồi commit. **Mỗi lần tick là một commit** — và commit chính là bằng chứng, đúng nguyên tắc
"đo bằng chứng cứ, không đo bằng cảm tính". Tiến độ nằm trong git history, không nằm trong
localStorage, nên nó theo bạn qua mọi máy và không bao giờ mất.

Không có checklist nào đứng trước **Ngày 1**. Bản trước có 27 ô và một bài test 12 câu chặn
trước dòng code đầu tiên — đó là nguyên nhân 5 tuần ở 0h, và cả hai đã bị xoá.

## 🛠️ Tech stack

- [Next.js 14](https://nextjs.org) + [Nextra 2](https://nextra.site) (`nextra-theme-docs`), pages router
- TypeScript · cấu hình theme: [`theme.config.tsx`](theme.config.tsx)
- Deploy: Vercel — auto-deploy mỗi `git push` về `main`

## 🔐 Bảo mật phụ thuộc

`npm audit` báo **9 lỗ hổng** (8 high, 1 moderate). Đánh giá thật, không phải trấn an:

| Gói | Vì sao không với tới được ở site này |
|---|---|
| `next` | Toàn bộ advisory thuộc App Router, Server Components, Server Actions, `next/image`, middleware, rewrite có host do kẻ tấn công điều khiển, custom server, i18n. Site này dùng **pages router**, không có thứ nào trong số đó, và cả 23 route đều prerender tĩnh |
| `js-yaml`, `cross-spawn`, `execa`, `clipboardy`, `title` | Chỉ chạy lúc build. Đầu vào là chính file `.mdx` trong repo này |
| `mermaid`, `dompurify` | Nextra 2 đóng gói sẵn. Site không có một sơ đồ mermaid nào |

Đã vá bằng `overrides` (12 → 9). Dải khai trong `package.json` và phiên bản thực tế resolve về:

| Gói | Override | Resolve về |
|---|---|---|
| `postcss` | `^8.5.28` | 8.5.28 (từ 8.4.31) |
| `nanoid` | `^3.3.18` | 3.3.18 |
| `dompurify` | `^3.4.13` | 3.4.14 |

Build vẫn xanh sau khi vá — kiểm bằng `npm ls postcss nanoid dompurify`.

Chín cái còn lại chỉ hết khi nâng **Nextra 2 → 4** (kéo theo Next 16, chuyển sang App Router, đổi định dạng `theme.config`) — đó là một dự án riêng, không phải sửa vặt. Chạy `npm audit` trước khi quyết định nâng.

## 💻 Local dev

```bash
npm install     # lần đầu
npm run dev     # http://localhost:3000
npm run build   # build production (Vercel chạy lệnh này)
```

## ✏️ Sửa nội dung

1. Sửa file `.mdx` trong `pages/`
2. Kiểm tra MDX: `python3 scripts/mdxlint.py pages` — phải ra `OK: 0 problem(s)`
3. `git add . && git commit -m "..." && git push`
4. Site update sau khoảng 30 giây

> ⚠️ Nội dung `.mdx` chạy qua MDX v2: mọi ký tự `<`, `{`, `}` trong văn xuôi phải nằm trong
> backtick hoặc code fence, nếu không build sẽ vỡ. Viết `` `List<T>` ``, đừng viết trần.
> Script [`scripts/mdxlint.py`](scripts/mdxlint.py) bắt đúng lỗi này mà không cần Node.

Thêm trang mới thì phải đăng ký slug trong `_meta.json` tương ứng, nếu không nó không hiện
trong sidebar.

## 🤝 Vai trò của AI trong repo này

Hợp đồng đầy đủ ở trang [Hệ thống học & luật AI](pages/he-thong-hoc.mdx). Tóm tắt: AI là
**mentor / examiner / reviewer — không bao giờ là author**. Vùng AI-free suốt 26 tháng: vòng
tick, serialize gói tin, session/connection, mọi thứ chạm shared state, reconnect và state sync.
Site này chứa tài liệu và đề bài; code Kotlin nằm ở repo project riêng và phải do người học tự gõ.
