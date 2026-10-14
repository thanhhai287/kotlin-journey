import React from 'react';
import type { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: 600 }}>🚀 Kotlin/Java · Game Server & Android</span>,
  project: {
    link: 'https://github.com/thanhhai287/kotlin-journey',
  },
  docsRepositoryBase: 'https://github.com/thanhhai287/kotlin-journey/blob/main',
  footer: {
    text: 'Hành trình Kotlin/Java của Hải · Game Server & Android · Tự code, hiểu cơ chế, kiểm chứng',
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
    return { titleTemplate: '%s — Kotlin/Java · Game Server & Android' };
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Học Kotlin/Java để tự xây game server và ứng dụng Android qua tính năng, debug, kiểm thử và giải thích nền tảng. Web chỉ phụ trợ."
      />
    </>
  ),
};

export default config;
