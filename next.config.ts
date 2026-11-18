import type { NextConfig } from "next";

// Atlas is a Measurement Ally, Inc. initiative with its own site.
// Temporary (307) until the Atlas site has its final domain; then update the
// address and switch `permanent` to true.
const ATLAS_SITE = "https://atlas-site-green.vercel.app";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/atlas", destination: ATLAS_SITE, permanent: false },
      { source: "/atlas/:path*", destination: ATLAS_SITE, permanent: false },
    ];
  },
};

export default nextConfig;
