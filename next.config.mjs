/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This tells Next.js to create the /out folder
  images: {
    unoptimized: true, // GitHub Pages doesn't support the default Next.js Image Optimization
  },
};

module.exports = nextConfig;