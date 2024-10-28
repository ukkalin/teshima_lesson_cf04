/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['imagedelivery.net'], // CloudflareのImage Delivery用
  },
}

module.exports = nextConfig