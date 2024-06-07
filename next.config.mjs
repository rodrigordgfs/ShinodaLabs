/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "i.imgur.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
