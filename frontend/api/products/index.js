import { pool } from "../_db.js";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const [products] = await pool.query("SELECT * FROM products");
    return res.status(200).json(products);
  } catch (err) {
    console.error("DB Error fetching products:", err);
    return res.status(500).json({ message: "Server error" });
  }
}
