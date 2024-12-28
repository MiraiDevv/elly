/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  ...(process.env.NODE_ENV === 'production' ? {
    basePath: '/__',
    assetPrefix: '/__/',
  } : {}),
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '/vi/**'
      }
    ],
    unoptimized: true
  }
}

module.exports = nextConfig 