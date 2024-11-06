/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "lh3.googleusercontent.com" }, // google avatar image url
      { protocol: "https", hostname: "images.pexels.com" }, // google avatar image url
    ],
  },
};

export default nextConfig;
