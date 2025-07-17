/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        port: "8000",
        pathname: "/uploads/**",
        hostname: "localhost",
      },
    ],
  },
};

export default nextConfig;
