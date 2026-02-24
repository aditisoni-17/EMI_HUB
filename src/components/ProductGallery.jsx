import React, { useState } from 'react';

const ProductGallery = ({ images }) => {
    const [activeImage, setActiveImage] = useState(images[0]);

    return (
        <div className="flex flex-col md:flex-row gap-6">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 order-2 md:order-1">
                {images.map((img, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveImage(img)}
                        className={`w-16 h-16 rounded-xl border-2 overflow-hidden transition-all ${activeImage === img ? 'border-primary' : 'border-gray-100 hover:border-gray-300'
                            }`}
                    >
                        <img src={img} alt={`thumbnail-${idx}`} className="w-full h-full object-cover" />
                    </button>
                ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 order-1 md:order-2">
                <div className="aspect-square rounded-2xl bg-gray-50 flex items-center justify-center p-8 border border-gray-100 relative overflow-hidden group">
                    <img
                        src={activeImage}
                        alt="Product"
                        className="max-w-full max-h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

                {/* Color/Variant Selection (Visual only for now) */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="p-3 bg-white border border-gray-200 rounded-xl cursor-not-allowed">
                        <span className="text-[10px] text-gray-400 uppercase block mb-1">Color</span>
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold">Silver</span>
                            <span className="text-xs text-gray-400">▼</span>
                        </div>
                    </div>
                    <div className="p-3 bg-white border border-gray-200 rounded-xl cursor-not-allowed">
                        <span className="text-[10px] text-gray-400 uppercase block mb-1">Variant</span>
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold truncate">256 GB, RAM...</span>
                            <span className="text-xs text-gray-400">▼</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductGallery;
