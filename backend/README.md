# Pluto AI Waitlist Backend

## Setup

1. Install dependencies:

   ```bash
   cd backend
   npm install
   ```

2. Create database table in Neon:

   ```sql
   CREATE TABLE waitlist_users (
       id SERIAL PRIMARY KEY,
       email TEXT UNIQUE NOT NULL,
       token TEXT,
       verified BOOLEAN DEFAULT FALSE,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

3. Update `.env` with your Neon connection string and JWT secret

4. Start the backend:
   ```bash
   npm start
   ```

## API Endpoints

- `POST /join` - Join waitlist with email
- `GET /verify?token=...` - Verify email via magic link

## Development

The backend runs on port 5000. The frontend expects it at `http://localhost:5000`.
