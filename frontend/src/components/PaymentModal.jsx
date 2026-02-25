import React from 'react';

const PaymentModal = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
            <div
                className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-300"
                onClick={e => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="p-8 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>

                    <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Secure Payment</h3>
                    <p className="text-gray-500 mb-8 max-w-xs">Scan the QR code below to complete your order using any UPI app</p>

                    {/* QR Code Placeholder */}
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-[40px] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
                        <div className="relative p-4 bg-white rounded-[32px] border-2 border-gray-50 shadow-sm">
                            <div className="w-48 h-48 bg-gray-50 rounded-2xl flex items-center justify-center overflow-hidden border border-gray-100">
                                {/* Using a real QR code API placeholder for visual appeal */}
                                <img
                                    src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=EMI_STORE_PAYMENT_SAMPLE"
                                    alt="Payment QR Code"
                                    className="w-40 h-40 object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex items-center gap-3 py-3 px-6 bg-gray-50 rounded-2xl border border-gray-100">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-sm font-bold text-gray-700">Waiting for payment...</span>
                    </div>

                    <button
                        onClick={onClose}
                        className="mt-8 w-full py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-black transition-all shadow-lg"
                    >
                        Back to Product
                    </button>

                    <div className="mt-6 flex gap-4 opacity-50 grayscale">
                        {/* Placeholder for UPI/Card icons */}
                        <div className="h-6 w-12 bg-gray-200 rounded"></div>
                        <div className="h-6 w-12 bg-gray-200 rounded"></div>
                        <div className="h-6 w-12 bg-gray-200 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentModal;
