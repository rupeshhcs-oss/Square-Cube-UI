/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  env: {
    NEXT_PUBLIC_SITE_NAME: 'Square and Cube',
    NEXT_PUBLIC_SITE_DESCRIPTION: 'Premium Construction Consultancy & Project Management',
  },
}

module.exports = nextConfig
