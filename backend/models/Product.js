const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    variant: { type: String },
    storage: { type: String },
    mrp: { type: Number, required: true },
    price: { type: Number, required: true },
    variantImages: {
        type: Map,
        of: [String]
    },
    emiPlans: [{
        tenure: Number,
        amount: Number,
        interest: Number,
        cashback: Number
    }],
    variants: [String],
    storages: [String]
});

module.exports = mongoose.model('Product', ProductSchema);
