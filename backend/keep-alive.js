// Simple script to keep backend running
import { spawn } from "child_process";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log("Starting backend with auto-restart...");

function startServer() {
  console.log(`[${new Date().toLocaleTimeString()}] Starting server.js...`);

  const server = spawn("node", ["server.js"], {
    cwd: __dirname,
    stdio: "inherit",
  });

  server.on("close", (code) => {
    console.log(`[${new Date().toLocaleTimeString()}] Server exited with code ${code}`);
    console.log(`[${new Date().toLocaleTimeString()}] Restarting in 3 seconds...`);
    setTimeout(startServer, 3000);
  });

  server.on("error", (err) => {
    console.error(`[${new Date().toLocaleTimeString()}] Failed to start server:`, err);
    setTimeout(startServer, 3000);
  });

  return server;
}

startServer();

// Handle Ctrl+C
process.on("SIGINT", () => {
  console.log("\nShutting down...");
  process.exit(0);
});
