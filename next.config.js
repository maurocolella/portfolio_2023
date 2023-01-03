const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    runtime: 'edge-experimental',
  },
  reactStrictMode: false,
}

module.exports = withBundleAnalyzer(nextConfig)
