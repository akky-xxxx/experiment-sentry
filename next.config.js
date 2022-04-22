/** @type {import('next').NextConfig} */
const { withSentryConfig } = require("@sentry/nextjs")

const sentryWebpackPluginOptions = {
  silent: true,
  authToken: process.env.SENTRY_AUTH_TOKEN,
}

const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  sentry: {
    hideSourceMaps: true,
    widenClientFileUpload: true,
  },
}

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions)
