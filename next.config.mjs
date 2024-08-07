import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '',
    assetPrefix: '',
};
 
export default withNextIntl(nextConfig);