/** @type {import('next').NextConfig} */
const nextConfig = {
  // The public URL contract uses trailing slashes (/services/, /solutions/...).
  // Keep this aligned with `urlConfig.trailingSlash` in src/shared/config/site.config.js.
  trailingSlash: true,

  /*
    Case study photography is sourced from Unsplash rather than committed to the
    repository: the write-ups arrive without artwork, and a stock photograph
    chosen from the study's own subject beats a broken image or a grey plate.
  */
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
