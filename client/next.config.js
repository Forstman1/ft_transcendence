/** @type {import('next').NextConfig} */

const nextConfig = {
  async headers() {
    return [
      {
        source: "/auth/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Accept, Authorization, X-Requested-With, Access-Control-Allow-Origin, Access-Control-Allow-Headers, Access-Control-Allow-Credentials, Access-Control-Allow-Methods",
          },
        ],
      },
    ];
  },

  images: {
    remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.intra.42.fr',
        },
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com',
        },
        {
          protocol: 'https',
          hostname: 'avatars.githubusercontent.com',
        },
        {
          protocol: 'http',
          hostname: 'localhost',
          port: '3001',
          pathname: '/profile/avatars/**',
        }
      ],
  },


};

module.exports = nextConfig;
