import React from 'react';

const TechnicalSpecs = ({ storage, color }) => {
    const specs = [
        { label: "Storage", value: storage },
        { label: "Color", value: color },
        { label: "Front Camera", value: "18MP" },
        {
            label: "Front Camera Features",
            value: "18MP front cam with autofocus, Center Stage, Night mode, HDR 5, portraits, Animoji, 4K stabilized video, spatial audio, and dual capture features."
        },
        { label: "Rear Camera", value: "48MP + 48MP + 48MP" },
        {
            label: "Rear Camera Features",
            value: "48MP Fusion system with 4 lenses, 8x zoom, up to 40x digital, ProRAW, Night mode, Smart HDR 5, macro, spatial photos, and advanced stabilization."
        },
        { label: "Screen Size", value: "6.3 inch" },
        { label: "Screen Resolution", value: "2622 x 1206 Pixels" }
    ];

    return (
        <div className="mt-16 bg-white rounded-3xl p-10 border border-gray-100 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-2xl font-black text-gray-800 mb-10 tracking-tight">Product Details</h2>

            <div className="space-y-6">
                {specs.map((spec, idx) => (
                    <div key={idx} className="flex flex-col gap-1 pb-6 border-b border-gray-50 last:border-0 last:pb-0">
                        <span className="text-xs font-bold text-primary/60 uppercase tracking-widest">{spec.label}</span>
                        <p className="text-gray-700 font-medium leading-relaxed">{spec.value}</p>
                    </div>
                ))}
            </div>

            <button className="mt-12 text-primary font-black flex items-center gap-2 group hover:gap-3 transition-all">
                <span>View all</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </button>
        </div>
    );
};

export default TechnicalSpecs;
