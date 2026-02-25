import React, { useState } from 'react';

const ProductGallery = ({
    images,
    variants = [],
    storages = [],
    activeVariant,
    setActiveVariant,
    activeStorage,
    setActiveStorage
}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [showVariantDropdown, setShowVariantDropdown] = useState(false);
    const [showStorageDropdown, setShowStorageDropdown] = useState(false);

    // Close dropdowns when images prop changes
    React.useEffect(() => {
        setShowVariantDropdown(false);
        setShowStorageDropdown(false);
    }, [images]);

    const activeImage = images[activeIndex] || images[0];

    return (
        <div className="flex flex-col lg:flex-row gap-6">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-3 order-2 lg:order-1">
                {images.map((img, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        className={`w-16 h-16 rounded-xl border-2 overflow-hidden transition-all bg-white ${activeIndex === idx ? 'border-primary shadow-md' : 'border-gray-100 hover:border-gray-300'
                            }`}
                    >
                        <img src={img} alt={`thumbnail-${idx}`} className="w-full h-full object-cover" />
                    </button>
                ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 order-1 lg:order-2">
                <div className="aspect-square rounded-3xl bg-gray-50 flex items-center justify-center p-8 border border-gray-100 relative overflow-hidden group">
                    <img
                        src={activeImage}
                        alt="Product"
                        className="max-w-full max-h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110"
                    />
                </div>

                {/* Selection Dropdowns */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                    {/* Color Selector */}
                    <div className="relative">
                        <div
                            onClick={() => setShowVariantDropdown(!showVariantDropdown)}
                            className="p-3 bg-white border border-gray-200 rounded-xl cursor-pointer hover:border-primary transition-all shadow-sm"
                        >
                            <span className="text-[10px] text-gray-400 font-bold uppercase block mb-0.5">Color</span>
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-bold text-gray-700">{activeVariant}</span>
                                <span className={`text-[10px] text-gray-400 transition-transform ${showVariantDropdown ? 'rotate-180' : ''}`}>▼</span>
                            </div>
                        </div>
                        {showVariantDropdown && (
                            <div className="absolute bottom-full mb-2 left-0 w-full bg-white border border-gray-100 rounded-xl shadow-xl z-10 animate-in slide-in-from-bottom-2 duration-200">
                                {variants.map(v => (
                                    <div
                                        key={v}
                                        onClick={() => { setActiveVariant(v); setShowVariantDropdown(false); }}
                                        className="p-3 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-primary cursor-pointer first:rounded-t-xl last:rounded-b-xl border-b last:border-0 border-gray-50"
                                    >
                                        {v}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Storage Selector */}
                    <div className="relative">
                        <div
                            onClick={() => setShowStorageDropdown(!showStorageDropdown)}
                            className="p-3 bg-white border border-gray-200 rounded-xl cursor-pointer hover:border-primary transition-all shadow-sm"
                        >
                            <span className="text-[10px] text-gray-400 font-bold uppercase block mb-0.5">Variant</span>
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-bold text-gray-700 truncate">{activeStorage}</span>
                                <span className={`text-[10px] text-gray-400 transition-transform ${showStorageDropdown ? 'rotate-180' : ''}`}>▼</span>
                            </div>
                        </div>
                        {showStorageDropdown && (
                            <div className="absolute bottom-full mb-2 left-0 w-full bg-white border border-gray-100 rounded-xl shadow-xl z-10 animate-in slide-in-from-bottom-2 duration-200">
                                {storages.map(s => (
                                    <div
                                        key={s}
                                        onClick={() => { setActiveStorage(s); setShowStorageDropdown(false); }}
                                        className="p-3 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-primary cursor-pointer first:rounded-t-xl last:rounded-b-xl border-b last:border-0 border-gray-50"
                                    >
                                        {s}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductGallery;
