import { pool } from "../_db.js";

export default async function handler(req, res) {
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
    const [variants] = await pool.query("SELECT * FROM variants WHERE product_id = ?", [product.id]);
    if (variants.length === 0) {
      return res.status(404).json({ message: "No variants found for product" });
    }

    const defaultVariant = variants[0];
    const [plans] = await pool.query("SELECT * FROM emi_plans WHERE variant_id = ?", [defaultVariant.id]);

    const variantNames = [...new Set(variants.map((v) => v.color).filter(Boolean))];
    const storageNames = [...new Set(variants.map((v) => v.storage).filter(Boolean))];
    const defaultImages = ["main.png", "camera.png", "side.png", "features.png", "lineup.png"];
    const variantImages = {};
    for (const v of variantNames) variantImages[v] = defaultImages;

    let emiPlans = plans.map((plan) => ({
      tenure: Number(plan.tenure),
      amount: Number(plan.monthly_payment),
      interest: Number(plan.interest_rate),
      cashback: Number(plan.cashback),
    }));
    if (emiPlans.length === 0) {
      emiPlans = [
        {
          tenure: 12,
          amount: 0,
          interest: 0,
          cashback: 0,
        },
      ];
    }

    return res.status(200).json({
      id: product.id,
      name: product.name,
      slug: product.slug,
      image_url: product.image_url,
      variant: defaultVariant.color || "Default",
      storage: defaultVariant.storage || "",
      price: Number(defaultVariant.price) || 0,
      mrp: Number(defaultVariant.mrp) || 0,
      variants: variantNames,
      storages: storageNames,
      variantImages,
      emiPlans,
    });
  } catch (err) {
    console.error("DB Error fetching product:", err);
    return res.status(500).json({ message: "Server error" });
  }
}
