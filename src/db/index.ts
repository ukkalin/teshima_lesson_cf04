import { drizzle } from 'drizzle-orm/d1';
import { drizzle as drizzleBetter } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as schema from './schema';

export function createDb(d1?: D1Database) {
  if (process.env.NODE_ENV === 'development' || !d1) {
    const sqlite = new Database('sqlite.db');
    return drizzleBetter(sqlite, { schema });
  }
  return drizzle(d1, { schema });
}

export type DbClient = ReturnType<typeof createDb>;

declare global {
  var db: DbClient | undefined
}

let db: DbClient

if (process.env.NODE_ENV === 'production') {
  if (!process.env.DB || typeof process.env.DB === 'string') {
    throw new Error('DB environment variable is not properly configured');
  }
  db = createDb(process.env.DB as D1Database);
} else {
  if (!global.db) {
    global.db = createDb();
  }
  db = global.db;
}

export { db }