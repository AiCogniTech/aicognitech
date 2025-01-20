/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
      ignoreBuildErrors: true,
  },
  eslint: {
      ignoreDuringBuilds: true,
  },
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: "**",
              port: ''
          },
          {
              protocol: 'http',
              hostname: "**.com",
              port: ''
          },
      ]
  },
};


export default nextConfig;
