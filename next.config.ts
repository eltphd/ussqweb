import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Atlas Academy is a static site folded into this deployment (public/atlas).
      // /atlas serves its landing page; the sub-pages are reached by file name.
      { source: "/atlas", destination: "/atlas/index.html" },
    ];
  },
};

export default nextConfig;
