/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/_',
  assetPrefix: '/_/',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '/vi/**'
      }
    ],
    unoptimized: true,
    loader: 'custom',
    loaderFile: './src/image-loader.js'
  }
}

module.exports = nextConfig 