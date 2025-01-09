/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_MAINTENANCE_MODE: process.env.NEXT_PUBLIC_MAINTENANCE_MODE || 'false',
  },
  // Explicitly set runtime config
  publicRuntimeConfig: {
    MAINTENANCE_MODE: process.env.NEXT_PUBLIC_MAINTENANCE_MODE || 'false',
  },
}

module.exports = nextConfig 