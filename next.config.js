/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['raw.githubusercontent.com', 'github.com'],
  },
  experimental: {
    appDir: true,
  }
}

module.exports = nextConfig
