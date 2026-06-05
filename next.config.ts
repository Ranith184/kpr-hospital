import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const isVercel = process.env.VERCEL === "1" || !!process.env.VERCEL;
const basePath = (isProd && !isVercel) ? "/kpr-hospital" : "";

const nextConfig: NextConfig = {
  // Disable static export on Vercel to allow full platform support, keep it for GitHub Pages
  output: isVercel ? undefined : "export",
  basePath: basePath,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
