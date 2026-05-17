/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  reactStrictMode: true,
  swcMinify: true,

  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },

  env: {
    NEXT_PUBLIC_SITE_NAME: 'Square and Cube',
    NEXT_PUBLIC_SITE_DESCRIPTION: 'Premium Construction Consultancy & Project Management',
  },
}

module.exports = nextConfig