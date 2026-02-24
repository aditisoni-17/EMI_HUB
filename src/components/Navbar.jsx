import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center gap-8">
                    {/* Logo */}
                    <div className="flex items-center gap-1 cursor-pointer">
                        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                            <span className="text-secondary font-bold text-xl">S</span>
                        </div>
                        <span className="text-2xl font-bold tracking-tight text-primary">snapmint</span>
                    </div>

                    {/* Search */}
                    <div className="hidden md:flex items-center flex-1 max-w-md ml-8">
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Search for TV, Mobiles, Headphones & more"
                                className="w-full bg-gray-100 rounded-full py-2 px-6 pr-10 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                            />
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-6 text-sm font-medium text-gray-600">
                    <div className="hidden lg:flex items-center gap-1 cursor-pointer hover:text-primary transition-colors">
                        <span>💼</span> For Business
                    </div>
                    <div className="hidden lg:flex items-center gap-1 cursor-pointer hover:text-primary transition-colors">
                        <span>💳</span> Pay EMI
                    </div>
                    <button className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2 hover:bg-gray-50 transition-colors">
                        <span>👤</span> Sign-up
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
