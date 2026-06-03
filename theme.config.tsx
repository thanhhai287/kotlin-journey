import React from 'react';
import type { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: 600 }}>🚀 Hành trình Kotlin</span>,
  project: {
    link: 'https://github.com/thanhhai287/kotlin-journey',
  },
  docsRepositoryBase: 'https://github.com/thanhhai287/kotlin-journey/blob/main',
  footer: {
    text: 'Hành trình Kotlin của Hải · 2026',
  },
  editLink: {
    text: 'Sửa trang này trên GitHub →',
  },
  search: {
    placeholder: 'Tìm kiếm trong roadmap...',
  },
  toc: {
    title: 'Mục lục',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  darkMode: true,
};

export default config;
