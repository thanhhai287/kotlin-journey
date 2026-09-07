import React from 'react';
import type { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: 600 }}>🚀 Hành trình Game Server</span>,
  project: {
    link: 'https://github.com/thanhhai287/kotlin-journey',
  },
  docsRepositoryBase: 'https://github.com/thanhhai287/kotlin-journey/blob/main',
  footer: {
    text: 'Hành trình Kotlin của Hải · Game Server & Backend Engineer · W1 = Thứ Hai 07/09/2026 → 03/12/2028',
  },
  editLink: {
    text: 'Sửa trang này trên GitHub →',
  },
  search: {
    placeholder: 'Tìm trong tài liệu...',
  },
  toc: {
    title: 'Mục lục',
    backToTop: true,
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  darkMode: true,
  faviconGlyph: '🚀',
  useNextSeoProps() {
    return { titleTemplate: '%s — Hành trình Game Server' };
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Lộ trình 27 tháng từ biết cú pháp Kotlin đến Game Server / Backend Engineer — 1.100h, 97 tuần chạy, một sản phẩm CARO chạy public."
      />
    </>
  ),
};

export default config;
