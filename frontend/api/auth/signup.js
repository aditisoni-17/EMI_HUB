const { pool } = require("../_db");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { fullName, phoneNumber, password } = req.body || {};
    if (!fullName || !phoneNumber || !password) {
      return res.status(400).json({ message: "fullName, phoneNumber and password are required" });
    }

    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        full_name VARCHAR(255) NOT NULL,
        phone_number VARCHAR(20) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    const [existing] = await pool.query("SELECT id FROM users WHERE phone_number = ? LIMIT 1", [phoneNumber]);
    if (existing.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    await pool.query("INSERT INTO users (full_name, phone_number, password) VALUES (?, ?, ?)", [
      fullName,
      phoneNumber,
      password,
    ]);

    return res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Signup error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};
