const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { MongoMemoryServer } = require('mongodb-memory-server');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const ProductSchema = new mongoose.Schema({
    name: String,
    slug: { type: String, unique: true },
    variant: String,
    storage: String,
    mrp: Number,
    price: Number,
    variantImages: Object,
    emiPlans: Array,
    variants: Array,
    storages: Array
});
const Product = mongoose.model('Product', ProductSchema);

// USE A MORE SPECIFIC PREFIX FOR SLUGS
app.get('/api/product/detail/:slug', async (req, res) => {
    try {
        console.log('Fetching Product by Slug:', req.params.slug);
        const product = await Product.findOne({ slug: req.params.slug });
        if (!product) {
            console.log('Product not found for slug:', req.params.slug);
            return res.status(404).json({ message: 'Not found' });
        }
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: 'Error' });
    }
});

app.get('/api/products', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

const start = async () => {
    const mongod = await MongoMemoryServer.create();
    await mongoose.connect(mongod.getUri());

    await Product.deleteMany({});
    await Product.insertMany([
        {
            name: "Apple iPhone 17 Pro",
            slug: "iphone-17-pro",
            variant: "Silver",
            storage: "256 GB",
            mrp: 139900,
            price: 134900,
            variantImages: { "Silver": ["main.png"] },
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
            variantImages: { "Gray": ["main.png"] },
            emiPlans: [{ tenure: 6, amount: 20833, interest: 0, cashback: 0 }],
            variants: ["Gray"],
            storages: ["512 GB"]
        }
    ]);
    console.log('Backend Seeded Internal');

    app.listen(5001, () => console.log('Server running on 5001'));
};

start();
