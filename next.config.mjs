/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // 【核心改动】将之前的配置替换为 Cloudinary 的域名
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/demo/image/upload/**', // 路径可以更具体一些
      },
    ],
  },
};

export default nextConfig;