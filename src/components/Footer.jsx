import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#e0e0e0] pt-16 pb-8 px-4 border-t border-gray-200">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Company Info */}
                    <div className="col-span-1">
                        <div className="flex items-center gap-2 mb-6 opacity-80">
                            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                                <span className="text-secondary font-bold text-lg">S</span>
                            </div>
                            <span className="text-2xl font-black tracking-tighter text-primary">snapmint</span>
                        </div>
                        <div className="space-y-4 text-[13px] text-gray-600 leading-relaxed font-medium">
                            <p>Snapmint Credit Advisory Private Limited</p>
                            <p>Office No. 201, 2nd Floor, C-Wing, Neelkanth Business Park, Nr. Vidyavihar Station, Vidyavihar (West), Mumbai - 400086</p>
                            <p>Contact number: 022-48931351</p>
                            <p>Monday to Sunday (10AM to 7PM)</p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-span-1">
                        <h3 className="font-bold text-gray-800 mb-6 text-sm uppercase tracking-wider">Quick Links</h3>
                        <ul className="space-y-3.5 text-[13px] text-gray-600 font-medium">
                            <li className="hover:text-primary cursor-pointer transition-colors">About Us</li>
                            <li className="hover:text-primary cursor-pointer transition-colors">Careers</li>
                            <li className="hover:text-primary cursor-pointer transition-colors">FAQ</li>
                            <li className="hover:text-primary cursor-pointer transition-colors">Join as a EMI Store Merchant</li>
                            <li className="hover:text-primary cursor-pointer transition-colors">Request EMI Payment Solution</li>
                            <li className="hover:text-primary cursor-pointer transition-colors">Partners</li>
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div className="col-span-1">
                        <h3 className="font-bold text-gray-800 mb-6 text-sm uppercase tracking-wider">Support Links</h3>
                        <ul className="space-y-3.5 text-[13px] text-gray-600 font-medium">
                            <li className="hover:text-primary cursor-pointer transition-colors">Return Policy</li>
                            <li className="hover:text-primary cursor-pointer transition-colors">Contact Us</li>
                            <li className="hover:text-primary cursor-pointer transition-colors">Terms and Conditions</li>
                            <li className="hover:text-primary cursor-pointer transition-colors">Refund Policy</li>
                            <li className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</li>
                            <li className="hover:text-primary cursor-pointer transition-colors">Corporate Information</li>
                        </ul>
                    </div>

                    {/* Apps & Social */}
                    <div className="col-span-1">
                        <h3 className="font-bold text-gray-800 mb-6 text-sm">Download Snapmint Today</h3>
                        <div className="flex flex-col gap-3 mb-10">
                            {/* Play Store */}
                            <button className="bg-black text-white rounded-xl p-2.5 flex items-center gap-3 w-48 hover:bg-gray-900 transition-all border border-gray-800 shadow-sm group">
                                <div className="w-7 h-7 flex items-center justify-center">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#3DDC84] group-hover:scale-110 transition-transform">
                                        <path d="M3.609 1.814L13.792 12 3.61 22.186c-.18.18-.28.423-.28.678 0 .53.43.96.96.96.255 0 .498-.1.678-.28l10.87-10.874c.375-.374.375-.98 0-1.354L5.038.44A.948.948 0 004.36.16c-.53 0-.96.43-.96.96 0 .255.1.498.28.678l.069.016z" />
                                    </svg>
                                </div>
                                <div className="text-left leading-none">
                                    <div className="text-[9px] uppercase tracking-widest text-gray-400 mb-1">Get it on</div>
                                    <div className="text-[15px] font-bold font-sans">Google Play</div>
                                </div>
                            </button>

                            {/* App Store */}
                            <button className="bg-black text-white rounded-xl p-2.5 flex items-center gap-3 w-48 hover:bg-gray-900 transition-all border border-gray-800 shadow-sm group">
                                <div className="w-7 h-7 flex items-center justify-center">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white group-hover:scale-110 transition-transform">
                                        <path d="M18.71 14.7c-.17-.17-.19-.38-.23-.56-.11-.44-.21-.88-.31-1.32-.22-.96-.44-1.92-.66-2.88-.13-.57-.26-1.15-.39-1.72-.04-.18-.06-.39-.23-.56s-.38-.2-.56-.23c-.96-.11-1.92-.22-2.88-.33l-2.88-.33c-1.15-.13-2.31-.26-3.46-.39-.18-.02-.39-.04-.56-.21s-.2-.37-.23-.55C6.22 5.09 6.11 4.54 6 4c0-.18-.02-.39-.19-.56C5.64 3.27 5.43 3.25 5.25 3.23l-1.33-.14C3.65 3.06 3.44 3.04 3.27 3.21s-.19.38-.21.56c-.11.96-.22 1.92-.33 2.88l-.33 2.88c-.13 1.15-.26 2.31-.39 3.46-.02.18-.04.39-.21.56s-.37.2-.55.23C.54 13.89 0 14 0 14s.06.18.23.35c.17.17.38.19.56.23.96.11 1.92.22 2.88.33l2.88.33c1.15.13 2.31.26 3.46.39.18.02.39.04.56.21s.2.37.23.55c.11.96.22 1.92.33 2.88l.33 2.88c.13 1.15.26 2.31.39 3.46.02.18.04.39.21.56s.37.2.55.23c.71.08 1.41.16 2.12.24s1.42.16 2.13.24c.18.02.39.04.56-.13.17-.17.19-.38.23-.56.11-.7.22-1.4.33-2.1l.33-2.1c.13-1.15.26-2.31.39-3.46.02-.18.04-.39.21-.56s.37-.2.55-.23c.96-.11 1.92-.22 2.88-.33z" />
                                    </svg>
                                </div>
                                <div className="text-left leading-none">
                                    <div className="text-[9px] uppercase tracking-widest text-gray-400 mb-1">Download on the</div>
                                    <div className="text-[15px] font-bold font-sans">App Store</div>
                                </div>
                            </button>
                        </div>

                        <div className="flex gap-4">
                            {/* FB */}
                            <div className="w-10 h-10 rounded-full bg-sky-200 flex items-center justify-center cursor-pointer hover:bg-sky-300 transition-all hover:scale-110">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-sky-700">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </div>
                            {/* IG */}
                            <div className="w-10 h-10 rounded-full bg-sky-200 flex items-center justify-center cursor-pointer hover:bg-sky-300 transition-all hover:scale-110">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-sky-700">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </div>
                            {/* TW */}
                            <div className="w-10 h-10 rounded-full bg-sky-200 flex items-center justify-center cursor-pointer hover:bg-sky-300 transition-all hover:scale-110">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-sky-700">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                            </div>
                            {/* YT */}
                            <div className="w-10 h-10 rounded-full bg-sky-200 flex items-center justify-center cursor-pointer hover:bg-sky-300 transition-all hover:scale-110">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-sky-700">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </div>
                        </div>
                        <p className="mt-8 text-[11px] text-gray-500 font-bold uppercase tracking-wider">Proudly made in India</p>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-300 text-center text-gray-500 text-[11px] font-medium">
                    © 2026 Snapmint. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
