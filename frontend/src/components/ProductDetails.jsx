import React from 'react';

const ProductDetails = ({ name = "Product", variant = "", storage = "", mrp = 0, price = 0 }) => {
    const savings = mrp - price;
    const savingsPercent = mrp > 0 ? Math.round((savings / mrp) * 100) : 0;

    return (
        <div className="border-b border-gray-100 pb-6">
            <h1 className="text-3xl font-bold text-gray-900 leading-tight">
                {name} ({variant}, {storage})
            </h1>
            <p className="text-gray-500 mt-2 text-sm">(Storage: {storage}, Color: {variant})</p>

            <div className="mt-6 flex items-baseline gap-4">
                <span className="text-4xl font-extrabold text-gray-900">₹{price.toLocaleString()}</span>
                <span className="text-lg text-gray-400 line-through">₹{mrp.toLocaleString()}</span>
                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-md">
                    {savingsPercent}% OFF
                </span>
            </div>
        </div>
    );
};

export default ProductDetails;
