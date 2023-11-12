/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/auth/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "http://localhost:3001"
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
};

module.exports = nextConfig;