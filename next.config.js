/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'supermomos-app-resources-us.s3.amazonaws.com',
        port: '',
        pathname: '/Images/SocialBanner/**',
      },
    ],
  },

    
};

module.exports = nextConfig;
