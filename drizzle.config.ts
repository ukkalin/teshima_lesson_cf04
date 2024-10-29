import type { Config } from 'drizzle-kit';
import 'dotenv/config';

export default {
  schema: './src/db/schema.ts',
  out: './drizzle',
  driver: 'better-sqlite',
  dbCredentials: {
    url: 'sqlite.db'
  }
} satisfies Config;