/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_MAINTENANCE_MODE: process.env.MAINTENANCE_MODE || 'false',
  },
}

module.exports = nextConfig 