/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // Required for GitHub Pages
  images: {
    unoptimized: true,   // Required for GitHub Pages
  },
  // Ensure no basePath is set here
};

export default nextConfig;