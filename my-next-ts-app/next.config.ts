import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "store.storeimages.cdn-apple.com",
        port: "",
        pathname: "/4982/as-images.apple.com/**",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
