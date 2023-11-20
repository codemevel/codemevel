/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const withPWA = require("@imbios/next-pwa")({
  disable: process.env.NODE_ENV === 'development',
  dest: 'public',
  register: true,
  skipWaiting: false,
})
const nextConfig = withPWA({
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
})

module.exports = nextConfig
