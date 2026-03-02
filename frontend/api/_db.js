import mysql from "mysql2/promise";

function createPoolFromEnv() {
  const dbUrlStr = process.env.DATABASE_URL || "mysql://root:@localhost:3306/emi_hub";
  const url = new URL(dbUrlStr);
  const sslRequired = url.searchParams.get("ssl-mode") === "REQUIRED";
  const dbName = url.pathname.replace("/", "") || "emi_hub";

  return mysql.createPool({
    host: url.hostname,
    port: url.port,
    user: decodeURIComponent(url.username || ""),
    password: decodeURIComponent(url.password || ""),
    database: dbName,
    ssl: sslRequired ? { rejectUnauthorized: false } : undefined,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });
}

export const pool = createPoolFromEnv();
