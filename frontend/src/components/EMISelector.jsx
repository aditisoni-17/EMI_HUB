import React from 'react';

const EMISelector = ({ plans, selectedPlan, onSelectPlan, price }) => {
    const downpayment = Math.round(price * 0.15);

    return (
        <div className="space-y-6">
            {/* Downpayment info */}
            <div className="flex items-center gap-3 p-4 bg-lime-50 rounded-xl border border-lime-100">
                <div className="w-8 h-8 bg-black/5 rounded flex items-center justify-center">
                    <svg className="w-5 h-5 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                </div>
                <div>
                    <p className="text-sm font-bold text-gray-800">Pay Now : ₹{downpayment.toLocaleString()} Downpayment</p>
                </div>
            </div>

            <div>
                <h3 className="text-[11px] font-bold text-gray-900 mb-4 uppercase tracking-[0.1em]">Choose EMI Tenure</h3>
                <div className="space-y-2.5">
                    {plans.map((plan) => (
                        <div
                            key={plan.tenure}
                            onClick={() => onSelectPlan(plan)}
                            className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex items-center justify-between ${selectedPlan.tenure === plan.tenure
                                    ? 'border-primary bg-primary/5'
                                    : 'border-gray-100 hover:border-gray-200'
                                }`}
                        >
                            <div className="flex items-center gap-4">
                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${selectedPlan.tenure === plan.tenure ? 'border-primary' : 'border-gray-200'
                                    }`}>
                                    {selectedPlan.tenure === plan.tenure && <div className="w-3 h-3 rounded-full bg-primary" />}
                                </div>
                                <div>
                                    <span className="text-lg font-bold text-gray-800">₹{plan.amount.toLocaleString()}</span>
                                    <span className="text-gray-400 text-sm font-medium ml-2">x {plan.tenure} months</span>
                                </div>
                            </div>

                            <div className="flex flex-col items-end gap-1">
                                {plan.interest === 0 ? (
                                    <span className="bg-secondary text-[#004d49] text-[9px] font-bold px-2 py-0.5 rounded-md uppercase tracking-tighter">
                                        *0% EMI
                                    </span>
                                ) : (
                                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter">
                                        {plan.interest}% Interest
                                    </span>
                                )}
                                {plan.cashback > 0 && (
                                    <span className="text-[9px] font-bold text-green-600 uppercase tracking-tighter">
                                        ₹{plan.cashback.toLocaleString()} Cashback
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <p className="text-[10px] text-gray-400 mt-4 font-medium italic">
                    EMIs starting 3rd Apr
                </p>
            </div>
        </div>
    );
};

export default EMISelector;
