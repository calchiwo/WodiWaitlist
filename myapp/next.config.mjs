/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',         // <-- add this line
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
