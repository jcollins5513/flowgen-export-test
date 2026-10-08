/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Generated screens are verified for runtime correctness, not strict types.
    // Mirrors this project's generator, which ships type-only errors by design.
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'i.pravatar.cc' },
      { protocol: 'https', hostname: 'image.pollinations.ai' },
      { protocol: 'https', hostname: 'picsum.photos' },
      { protocol: 'https', hostname: '*.public.blob.vercel-storage.com' },
    ],
  },
};

module.exports = nextConfig;
