import React from 'react';

const Navbar = ({ onSignupClick }) => {
    return (
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-[60]">
            <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
                <div className="flex items-center gap-12 flex-1">
                    {/* Logo */}
                    <div className="flex items-center gap-2 cursor-pointer group">
                        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/10 group-hover:scale-105 transition-transform">
                            <span className="text-secondary font-black text-xl">S</span>
                        </div>
                        <span className="text-3xl font-black tracking-tighter text-primary">snapmint</span>
                    </div>

                    {/* Search */}
                    <div className="hidden md:flex items-center flex-1 max-w-xl">
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Search for TV, Mobiles, Headphones & more"
                                className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-3 px-12 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all text-sm font-medium shadow-inner"
                            />
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-8 text-sm font-bold text-gray-500 uppercase tracking-wider ml-8">
                    <div className="hidden lg:flex items-center gap-1 cursor-pointer hover:text-primary transition-colors hover:scale-105">
                        For Business
                    </div>
                    <div className="hidden lg:flex items-center gap-1 cursor-pointer hover:text-primary transition-colors hover:scale-105">
                        Pay EMI
                    </div>
                    <button
                        onClick={onSignupClick}
                        className="flex items-center gap-2 border-2 border-gray-100 rounded-xl px-6 py-2.5 hover:bg-gray-50 hover:border-primary/20 hover:text-primary transition-all active:scale-95 shadow-sm"
                    >
                        Sign-up
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
