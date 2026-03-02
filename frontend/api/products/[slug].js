const { pool } = require("../_db");

module.exports = async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { slug } = req.query;
    const [products] = await pool.query("SELECT * FROM products WHERE slug = ?", [slug]);
    if (products.length === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    const product = products[0];
    const [plans] = await pool.query("SELECT * FROM emi_plans WHERE product_id = ?", [product.id]);
    product.emiPlans = plans;
    product.variantImages =
      typeof product.variantImages === "string" ? JSON.parse(product.variantImages) : product.variantImages;
    product.variants = typeof product.variants === "string" ? JSON.parse(product.variants) : product.variants;
    product.storages = typeof product.storages === "string" ? JSON.parse(product.storages) : product.storages;

    return res.status(200).json(product);
  } catch (err) {
    console.error("DB Error fetching product:", err);
    return res.status(500).json({ message: "Server error" });
  }
};
