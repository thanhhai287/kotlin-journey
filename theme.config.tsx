import React from 'react';
import type { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: 600 }}>🚀 Hành trình Kotlin</span>,
  project: {
    link: 'https://github.com/thanhhai287/kotlin-journey',
  },
  docsRepositoryBase: 'https://github.com/thanhhai287/kotlin-journey/blob/main',
  footer: {
    text: 'Hành trình Kotlin của Hải · lộ trình 24 tháng · bắt đầu 01/08/2026',
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
    return { titleTemplate: '%s — Hành trình Kotlin' };
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Lộ trình 24 tháng từ biết cú pháp Kotlin đến Mobile Dev chuyên nghiệp — tài liệu học tập và tracker tiến độ."
      />
    </>
  ),
};

export default config;
