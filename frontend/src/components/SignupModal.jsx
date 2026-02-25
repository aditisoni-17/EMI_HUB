import React, { useState } from 'react';

const SignupModal = ({ onClose }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleGetOTP = async () => {
        if (!phoneNumber || phoneNumber.length !== 10) {
            setMessage('Please enter a valid 10-digit phone number');
            return;
        }

        setIsLoading(true);
        setMessage('');

        try {
            const response = await fetch('http://localhost:5001/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fullName: 'Guest User', // Defaulting for now
                    phoneNumber,
                    password: 'temporary_password' // Defaulting for now
                }),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage('OTP sent successfully! (Check server console)');
                // In a real app, you'd show an OTP input field now
            } else {
                setMessage(data.message || 'Signup failed');
            }
        } catch (err) {
            setMessage('Error connecting to server');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-white rounded-[2.5rem] w-full max-w-lg p-10 relative shadow-2xl animate-in zoom-in-95 duration-300 mx-4">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute right-8 top-8 text-gray-300 hover:text-primary transition-all p-2 hover:bg-gray-50 rounded-full group"
                >
                    <svg className="w-8 h-8 transition-transform group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="flex flex-col items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-3 mb-10 scale-125">
                        <div className="w-12 h-12 rounded-2xl bg-[#00524d] flex items-center justify-center shadow-lg shadow-primary/20">
                            <span className="text-secondary font-black text-2xl">S</span>
                        </div>
                        <span className="text-4xl font-black tracking-tighter text-primary">snapmint</span>
                    </div>

                    <h2 className="text-xl font-bold text-gray-500 mb-12 text-center max-w-xs leading-snug">
                        Register to get upto ₹1,00,000 credit limit
                    </h2>

                    <div className="w-full space-y-8">
                        <div className="space-y-4">
                            <label className="block text-3xl font-black text-gray-800 tracking-tight">Sign In/Sign Up</label>
                            <div className="relative group">
                                <div className="absolute left-5 top-1/2 -translate-y-1/2 flex items-center gap-3">
                                    <span className="text-2xl font-bold text-gray-400 group-focus-within:text-primary transition-colors">+91</span>
                                    <div className="w-[2px] h-8 bg-gray-100 group-focus-within:bg-primary/20 transition-colors" />
                                </div>
                                <input
                                    type="tel"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                                    placeholder="Enter Phone"
                                    className="w-full border-2 border-gray-100 rounded-3xl py-6 pl-24 pr-6 text-2xl font-bold focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all shadow-inner bg-gray-50/50"
                                    autoFocus
                                />
                            </div>
                            {message && <p className={`text-center font-bold ${message.includes('Error') || message.includes('failed') ? 'text-red-500' : 'text-primary'}`}>{message}</p>}
                        </div>

                        <button
                            onClick={handleGetOTP}
                            disabled={isLoading}
                            className={`w-full bg-[#004d49] text-secondary font-black py-6 rounded-3xl text-2xl hover:bg-[#003d39] transition-all shadow-xl shadow-primary/20 active:scale-[0.98] mt-4 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {isLoading ? 'Processing...' : 'Get OTP'}
                        </button>

                        <div className="flex items-start gap-4 px-2 pt-2">
                            <div className="relative flex items-center">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    className="w-6 h-6 rounded-lg border-2 border-gray-200 text-primary focus:ring-primary/20 transition-all cursor-pointer peer"
                                    defaultChecked
                                />
                                <div className="absolute inset-0 bg-primary rounded-lg opacity-0 peer-checked:opacity-100 pointer-events-none flex items-center justify-center transition-opacity">
                                    <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>
                            <label htmlFor="terms" className="text-sm text-gray-400 font-medium leading-relaxed">
                                I agree to the <span className="text-primary font-bold cursor-pointer hover:underline underline-offset-4 decoration-2">Terms and Conditions</span> and <span className="text-primary font-bold cursor-pointer hover:underline underline-offset-4 decoration-2">Privacy Policy.</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupModal;
