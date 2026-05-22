import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();
const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function testConnection() {
  try {
    const result = await pool.query("SELECT 1");
    console.log("Database connected successfully:", result.rows);

    // Test if waitlist_users table exists
    const tableCheck = await pool.query(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_name = 'waitlist_users'
      );
    `);
    console.log("waitlist_users table exists:", tableCheck.rows[0].exists);

    process.exit(0);
  } catch (err) {
    console.error("Database connection failed:");
    console.error("Error message:", err.message);
    console.error("Error code:", err.code);
    console.error("Full error:", err);
    process.exit(1);
  }
}

testConnection();
