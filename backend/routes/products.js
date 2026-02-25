const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Seed data route - moved UP TO ENSURE IT'S NOT CAUGHT BY :slug
router.post('/seed', async (req, res) => {
    try {
        await Product.deleteMany({});
        const products = [
            {
                name: "Apple iPhone 17 Pro",
                slug: "iphone-17-pro",
                variant: "Silver",
                storage: "256 GB",
                mrp: 139900,
                price: 134900,
                variantImages: {
                    "Silver": ["main.png"]
                },
                emiPlans: [{ tenure: 6, amount: 22480, interest: 0, cashback: 0 }],
                variants: ["Silver"],
                storages: ["256 GB"]
            },
            {
                name: "Samsung Galaxy S24 Ultra",
                slug: "samsung-s24-ultra",
                variant: "Gray",
                storage: "512 GB",
                mrp: 129999,
                price: 124999,
                variantImages: {
                    "Gray": ["main.png"]
                },
                emiPlans: [{ tenure: 6, amount: 20833, interest: 0, cashback: 0 }],
                variants: ["Gray"],
                storages: ["512 GB"]
            },
            {
                name: "Google Pixel 9 Pro",
                slug: "google-pixel-9-pro",
                variant: "Obsidian",
                storage: "128 GB",
                mrp: 109999,
                price: 99999,
                variantImages: {
                    "Obsidian": ["main.png"]
                },
                emiPlans: [{ tenure: 6, amount: 16666, interest: 0, cashback: 0 }],
                variants: ["Obsidian"],
                storages: ["128 GB"]
            }
        ];
        await Product.insertMany(products);
        console.log('Seeded 3 products successfully.');
        res.json({ message: 'Seeded' });
    } catch (err) {
        console.error("Seed error:", err);
        res.status(500).json({ message: 'Seed failed' });
    }
});

// Get product by slug - MUST BE AFTER SEED
router.get('/detail/:slug', async (req, res) => {
    try {
        const product = await Product.findOne({ slug: req.params.slug });
        if (!product) return res.status(404).json({ message: 'Not found' });
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: 'Error' });
    }
});

module.exports = router;
