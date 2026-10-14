# Hành trình Kotlin/Java của Hải

Site tài liệu học bằng thực hành, dùng Nextra 2 / Next.js 14. **Kotlin/Java là nền chuyên môn chính cho game server và ứng dụng Android; fullstack web chỉ phụ trợ.** Người học đã rõ cú pháp Kotlin cơ bản, chưa tự hoàn thiện chương trình nhỏ, có 9–12 giờ/tuần.

## Bắt đầu

- [Xưởng thực hành K01–K06](pages/phase-0/xuong-thuc-hanh.mdx): Kho đồ từ một luồng nhập/xuất tới core dùng được trên Android.
- [Luật hướng dẫn](pages/he-thong-hoc.mdx): giải thích cơ chế trực tiếp, trợ giúp H0–H3, tự code, review và thử biến thể.
- [Roadmap](pages/roadmap.mdx): CLI/core → Android → game server → đồng thời/dữ liệu → đo và đào sâu. Đi tiếp bằng cổng năng lực, không dự báo tổng số tháng.
- [Kotlin/Java](pages/kotlin-java-core.mdx) · [Android](pages/android-core.mdx) · [Game server/backend](pages/backend-core.mdx) · [Web phụ trợ](pages/web-phu-tro.mdx).
- [Cơ sở thiết kế](pages/co-so-thiet-ke.mdx): nguồn đã đối chiếu, phần đã xem, quyết định và giới hạn.
- [Bốn tuần đầu](pages/phase-0/lich-14-tuan.mdx): 9 giờ nền/tuần, tối đa 3 giờ linh hoạt; review tuần 2 và 4.
- [Tiến độ](pages/progress.mdx): hành vi, test, giải thích, mức trợ giúp và chuyển giao; không tự đánh dấu đã học.

Giáo án và luật được sửa ngày **14/10/2026** theo phản hồi người học. Các lab chuyên sâu cũ giữ để tra cứu, không cộng thêm vào lịch mới. Tiến độ trước thay đổi được lưu ở [docs/history](docs/history/progress-before-2026-10-14.md), không bị xoá hoặc biến thành thành tích mới.

## Local development

```bash
npm install
npm run dev
python3 scripts/mdxlint.py pages
npm run build
```

Nội dung ở `pages/*.mdx`; thứ tự sidebar ở các `_meta.json`; theme/SEO ở `theme.config.tsx`. Không có Kotlin project trong repo này. Code bài học ở repo của người học, do người học triển khai.

## Sửa nội dung

Giữ MDX/GFM thuần. Bọc `<`, `{`, `}` trong code span/fence nếu dùng trong văn xuôi. Trang mới phải đăng ký trong `_meta.json`. Chạy MDX check rồi production build trước khi bàn giao. Giữ các dependency overrides; cập nhật framework là việc riêng.

Tiến độ là nội dung có bằng chứng, chỉnh trong file và commit khi cần; không bắt mỗi tick là một commit. Push lên `main` có cấu hình auto-deploy Vercel, nên không tự push trong tác vụ sửa tài liệu nếu chưa được yêu cầu.

Hướng dẫn agent hiện hành: [AGENTS.md](AGENTS.md); Claude dùng [CLAUDE.md](CLAUDE.md). Cả hai cùng dẫn về một hợp đồng học, không giữ hai bộ luật cạnh tranh.
