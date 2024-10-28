import { createDb } from '@/db'

declare global {
  var db: ReturnType<typeof createDb> | undefined
}

let db: ReturnType<typeof createDb>

if (process.env.NODE_ENV === 'production') {
  db = createDb(process.env.DB as D1Database)
} else {
  if (!global.db) {
    global.db = createDb(process.env.DB as D1Database)
  }
  db = global.db
}

export { db }