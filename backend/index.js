const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const dbUrlStr = process.env.DATABASE_URL || 'mysql://root:@localhost:3306/emi_hub';
const url = new URL(dbUrlStr);
const sslRequired = url.searchParams.get('ssl-mode') === 'REQUIRED';
const dbName = url.pathname.replace('/', '') || 'emi_hub';

const pool = mysql.createPool({
    host: url.hostname,
    port: url.port,
    user: url.username,
    password: url.password,
    database: dbName,
    ssl: sslRequired ? { rejectUnauthorized: false } : undefined,
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

app.post('/api/auth/signup', async (req, res) => {
    try {
        const { fullName, phoneNumber, password } = req.body || {};

        if (!fullName || !phoneNumber || !password) {
            return res.status(400).json({ message: 'fullName, phoneNumber and password are required' });
        }

        // Keep signup working even if users table was not seeded before.
        await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                full_name VARCHAR(255) NOT NULL,
                phone_number VARCHAR(20) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);

        const [existing] = await pool.query(
            'SELECT id FROM users WHERE phone_number = ? LIMIT 1',
            [phoneNumber]
        );
        if (existing.length > 0) {
            return res.status(400).json({ message: 'User already exists' });
        }

        await pool.query(
            'INSERT INTO users (full_name, phone_number, password) VALUES (?, ?, ?)',
            [fullName, phoneNumber, password]
        );

        return res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        console.error('Signup error:', err);
        return res.status(500).json({ message: 'Server error' });
    }
});

if (process.env.NODE_ENV !== 'production') {
    app.listen(5001, () => console.log('Server running on port 5001'));
}

module.exports = app;
