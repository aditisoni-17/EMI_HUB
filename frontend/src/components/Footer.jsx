import React from 'react';
import playStoreImg from '../assets/play_store.png';
import appStoreImg from '../assets/app_store.png';

const Footer = () => {
    return (
        <footer className="bg-[#e0e0e0] pt-16 pb-8 px-4 border-t border-gray-200 mt-20">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
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
                        <div className="flex flex-col gap-4 mb-10">
                            {/* Play Store */}
                            <a href="#" className="inline-block transition-transform hover:scale-105 active:scale-95 shadow-lg rounded-xl overflow-hidden">
                                <img src={playStoreImg} alt="Google Play Store" className="h-14 w-auto object-contain" />
                            </a>

                            {/* App Store */}
                            <a href="#" className="inline-block transition-transform hover:scale-105 active:scale-95 shadow-lg rounded-xl overflow-hidden">
                                <img src={appStoreImg} alt="Apple App Store" className="h-14 w-auto object-contain" />
                            </a>
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
