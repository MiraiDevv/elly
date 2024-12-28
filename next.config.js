/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/elly-site',
  assetPrefix: '/elly-site/',
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