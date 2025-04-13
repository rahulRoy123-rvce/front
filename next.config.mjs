/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  webpack: (config) => {
    config.externals = [...config.externals, { canvas: 'canvas' }];  // required for Three.js
    return config;
  },
};

export default nextConfig; 