/** @type {import('next').NextConfig} */
const { withSentryConfig } = require("@sentry/nextjs")

const sentryWebpackPluginOptions = {
  silent: true,
}

const nextConfig = {
  reactStrictMode: true,
  sentry: {
    disableServerWebpackPlugin: true,
    disableClientWebpackPlugin: true,
    hideSourceMaps: true,
    widenClientFileUpload: true,
  },
}

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions)
