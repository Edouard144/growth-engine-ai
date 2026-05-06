import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg;
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

 (async () => {
  try {
    await pool.query(`
      ALTER TABLE waitlist_users
      ADD COLUMN IF NOT EXISTS otp VARCHAR(6),
      ADD COLUMN IF NOT EXISTS otp_expires TIMESTAMP;
      ALTER TABLE waitlist_users DROP COLUMN IF EXISTS token;
      ALTER TABLE waitlist_users ADD CONSTRAINT waitlist_users_email_unique UNIQUE (email);
    `);
    console.log("Database migration completed");
  } catch (err) {
    console.error("Migration failed:", err);
  } finally {
    pool.end();
  }
})();