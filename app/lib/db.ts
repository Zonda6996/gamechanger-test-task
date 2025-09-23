import Database from 'better-sqlite3'
import path from 'path'

const db = new Database(path.resolve('./users.db'))

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    login TEXT UNIQUE,
    email TEXT UNIQUE,
    password TEXT
  )
`)

export default db
