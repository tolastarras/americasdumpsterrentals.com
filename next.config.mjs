/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    'macbookpro.tail6e278d.ts.net',
  ],
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: false,
  },
}

export default nextConfig;
