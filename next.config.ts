import type { NextConfig } from "next";

const isNetlifyStaticBuild = process.env.NETLIFY === "true";

const nextConfig: NextConfig = {
  output: isNetlifyStaticBuild ? "export" : undefined,
  trailingSlash: isNetlifyStaticBuild,
};

export default nextConfig;
