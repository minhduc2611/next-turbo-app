/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // images: {
  //   domains: [ "supermomos-app-resources-us.s3.amazonaws.com"],
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'supermomos-app-resources-us.s3.amazonaws.com',
        port: '',
        pathname: '/Images/SocialBanner/**',
      },
      {
        protocol: 'https',
        hostname: 'supermomos-app-resourcesus.s3.amazonaws.com',
        port: '',
        pathname: '/Images/SocialBanner/**',
      },
    ],
  },
  // images: {
  //   formats: ['image/jpg', 'image/avif', 'image/webp'],
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'supermomos-app-resources-us.s3.amazonaws.com',
  //       port: '',
  //       pathname: 'Images/SocialBanner/**',
  //     },
  //   ],
    
};

module.exports = nextConfig;
