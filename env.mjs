import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    // This is optional because it's only used in development.
    // See https://next-auth.js.org/deployment.
    // NEXTAUTH_URL: z.string().url().optional(),
    // NEXTAUTH_SECRET: z.string().min(1),
    // GITHUB_CLIENT_ID: z.string().min(1),
    // GITHUB_CLIENT_SECRET: z.string().min(1),
    // GITHUB_ACCESS_TOKEN: z.string().min(1),
    // DATABASE_URL: z.string().min(1),
    // SMTP_FROM: z.string().min(1),
    // POSTMARK_API_TOKEN: z.string().min(1),
    // POSTMARK_SIGN_IN_TEMPLATE: z.string().min(1),
    // POSTMARK_ACTIVATION_TEMPLATE: z.string().min(1),
    // STRIPE_API_KEY: z.string().min(1),
    // STRIPE_WEBHOOK_SECRET: z.string().min(1),
    // STRIPE_PRO_MONTHLY_PLAN_ID: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string().min(1),
  },
  runtimeEnv: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    DATABASE_URL: process.env.DATABASE_URL,
    SMTP_FROM: process.env.SMTP_FROM,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NUBEFOOD_API_URL: process.env.NUBEFOOD_API_URL,
  },
})
