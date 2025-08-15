import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import { betterAuth } from "better-auth";
import { Pool } from "pg";
import { nextCookies } from 'better-auth/next-js';

export const auth = betterAuth({
  database: new Pool({
    connectionString: process.env.DATABASE_URL,
  }),

  emailAndPassword: {
    enabled: true,
  },

  plugins: [nextCookies()]
})