/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: '/elis-ian-salon/',
  env: {
      BACKEND_URL: '/elis-ian-salon',
  }
}

module.exports = nextConfig
