import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '',
  assetPrefix: '',
  i18n: {
    locales: ['br', 'en', 'es'],
    defaultLocale: 'br',
  },
  async rewrites() {
    return [
      {
        source: '/:locale/:path*',
        destination: '/:path*',
      },
      {
        source: '/',
        destination: '/br',
      },
    ];
  },
};

export default withNextIntl(nextConfig);
