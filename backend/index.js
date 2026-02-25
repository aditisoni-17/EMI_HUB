const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
    uri: process.env.DATABASE_URL || 'mysql://root:@localhost:3306/emi_hub',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

app.get('/api/products/:slug', async (req, res) => {
    try {
        const [products] = await pool.query('SELECT * FROM products WHERE slug = ?', [req.params.slug]);
        if (products.length === 0) return res.status(404).json({ message: 'Product not found' });

        let product = products[0];

        const [plans] = await pool.query('SELECT * FROM emi_plans WHERE product_id = ?', [product.id]);
        product.emiPlans = plans;

        product.variantImages = typeof product.variantImages === 'string' ? JSON.parse(product.variantImages) : product.variantImages;
        product.variants = typeof product.variants === 'string' ? JSON.parse(product.variants) : product.variants;
        product.storages = typeof product.storages === 'string' ? JSON.parse(product.storages) : product.storages;

        res.json(product);
    } catch (err) {
        console.error("DB Error fetching product:", err);
        res.status(500).json({ message: 'Server error' });
    }
});

app.get('/api/products', async (req, res) => {
    try {
        const [products] = await pool.query('SELECT * FROM products');
        for (let product of products) {
            const [plans] = await pool.query('SELECT * FROM emi_plans WHERE product_id = ?', [product.id]);
            product.emiPlans = plans;
            product.variantImages = typeof product.variantImages === 'string' ? JSON.parse(product.variantImages) : product.variantImages;
            product.variants = typeof product.variants === 'string' ? JSON.parse(product.variants) : product.variants;
            product.storages = typeof product.storages === 'string' ? JSON.parse(product.storages) : product.storages;
        }
        res.json(products);
    } catch (err) {
        console.error("DB Error fetching products:", err);
        res.status(500).json({ message: 'Server error' });
    }
});

if (process.env.NODE_ENV !== 'production') {
    app.listen(5001, () => console.log('Server running on port 5001'));
}

module.exports = app;
