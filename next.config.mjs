import nextra from 'nextra';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

export default withNextra({
  reactStrictMode: true,
  redirects: async () => [
    {
      source: '/phase-0/lich-12-tuan',
      destination: '/phase-0/lich-14-tuan',
      permanent: true,
    },
  ],
});
