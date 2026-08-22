/** @type {import('next').NextConfig} */
const nextConfig = {
  // The public URL contract uses trailing slashes (/services/, /solutions/...).
  // Keep this aligned with `urlConfig.trailingSlash` in src/shared/config/site.config.js.
  trailingSlash: true,
};

export default nextConfig;
