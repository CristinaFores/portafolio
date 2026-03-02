/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Local images in /public are optimized by Next.js automatically.
    // Formats listed in order of preference (AVIF first for best compression).
    formats: ["image/avif", "image/webp"],
  },
}

export default nextConfig
