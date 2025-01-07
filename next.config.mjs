/** @type {import('next').NextConfig} */

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "superforex.com",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default withNextIntl(nextConfig);
