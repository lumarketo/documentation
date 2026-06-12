import { fileURLToPath } from "node:url"

import { withContentlayer } from "next-contentlayer2"

import "./env.mjs"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
  serverExternalPackages: ["@prisma/client"],
  // Next 16 builds with Turbopack by default. `withContentlayer` injects a
  // webpack config, so we declare a turbopack config (and pin the workspace
  // root to this app) to avoid the webpack/turbopack ambiguity error.
  turbopack: {
    root: fileURLToPath(new URL(".", import.meta.url)),
  },
}

export default withContentlayer(nextConfig)
