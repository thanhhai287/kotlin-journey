# 🚀 Hành trình Kotlin của Hải

Tài liệu học tập 11 tháng để trở thành **Kotlin backend + fullstack + Android developer**, deploy bằng [Nextra](https://nextra.site) trên [Vercel](https://vercel.com).

🌐 **Site:** _cập nhật URL sau khi deploy lên Vercel_

## 📚 Nội dung

Markdown sources trong [`pages/`](pages/):

- [`index.mdx`](pages/index.mdx) — Trang chủ / overview
- [`roadmap.mdx`](pages/roadmap.mdx) — Roadmap chi tiết 42 tuần
- [`phase-1.mdx`](pages/phase-1.mdx) — Giai đoạn 1 (Kotlin cơ bản, 8 tuần)
- [`progress.mdx`](pages/progress.mdx) — Nhật ký tiến độ hàng tuần

Cấu hình điều hướng sidebar: [`pages/_meta.ts`](pages/_meta.ts).

## 🛠️ Tech stack site

- [Next.js 14](https://nextjs.org) + [Nextra 3](https://nextra.site) docs theme
- TypeScript, Tailwind (qua Nextra)
- Deploy: [Vercel](https://vercel.com) — auto-deploy mỗi `git push`

## 💻 Local dev

```bash
# Lần đầu
npm install

# Chạy dev server
npm run dev    # → http://localhost:3000

# Build production (Vercel sẽ tự chạy lệnh này)
npm run build
```

## 🚀 Deploy lên Vercel

1. Push repo lên GitHub
2. Import vào [vercel.com/new](https://vercel.com/new) — chọn repo `kotlin-journey`
3. Vercel auto-detect Next.js, deploy trong ~1-2 phút
4. Mỗi `git push` về branch `main` → auto rebuild + deploy

## ✏️ Cách chỉnh sửa nội dung

1. Sửa file `.mdx` trong `pages/`
2. `git add . && git commit -m "..." && git push`
3. Site update sau ~30 giây
