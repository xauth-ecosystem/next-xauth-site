import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enables Static HTML Export
  // Optional: Add a base path if deploying to a subdirectory like GitHub Pages
  // basePath: '/your-repo-name',
};

export default nextConfig;
