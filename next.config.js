/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "en",
    localeDetection: false, // Recommended to disable for explicit language switching
  },
  images: {
    domains: [], // Add any external image domains if needed
  },
};

module.exports = nextConfig;

