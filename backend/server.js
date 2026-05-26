import express from "express";
import pkg from "pg";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const { Pool } = pkg;
const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_URL }));

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  connectionTimeoutMillis: 20000,
  idleTimeoutMillis: 30000,
  max: 3,
  keepAlive: true,
  ssl: { rejectUnauthorized: false },
});
pool.on('error', (err) => console.error('Unexpected idle client error', err));

// Join waitlist endpoint
app.post("/join", async (req, res) => {
  const { email } = req.body;

  if (!email) return res.status(400).json({ error: "Email required" });

  try {
    await pool.query(
      `INSERT INTO waitlist_users (email) VALUES ($1) ON CONFLICT (email) DO NOTHING`,
      [email],
    );

    console.log(`User joined waitlist: ${email}`);
    res.json({ message: "You're on the waitlist!" });
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ error: err.message });
  }
});

// Health check
app.get("/", (req, res) => {
  res.json({ status: "ok" });
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
