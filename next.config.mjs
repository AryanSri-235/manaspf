/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'socialmasla.com',
      },
      {
        protocol: 'https',
        hostname: 'socialmasla-pm.pages.dev',
      },
      {
        protocol: 'https',
        hostname: 'razorpay.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
