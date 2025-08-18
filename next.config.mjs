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
<<<<<<< HEAD
=======
      {
        protocol: "https",
        hostname: "api.sun-nextblog.ir",
        pathname: "/uploads/**",
      },
>>>>>>> fix resposive mobile bugs
    ],
  },
};

export default nextConfig;
