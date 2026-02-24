import React from 'react';

const EMISelector = ({ plans, selectedPlan, onSelectPlan, price }) => {
    const downpayment = Math.round(price * 0.15); // Assume 15% downpayment for visual

    return (
        <div className="space-y-6">
            {/* Downpayment info */}
            <div className="flex items-center gap-3 p-4 bg-lime-50 rounded-xl border border-lime-100">
                <span className="text-lime-600 text-xl font-bold">💳</span>
                <div>
                    <p className="text-sm font-semibold text-gray-900">Pay Now : ₹{downpayment.toLocaleString()} Downpayment</p>
                </div>
            </div>

            <div>
                <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Choose EMI Tenure</h3>
                <div className="space-y-3">
                    {plans.map((plan) => (
                        <div
                            key={plan.tenure}
                            onClick={() => onSelectPlan(plan)}
                            className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between ${selectedPlan.tenure === plan.tenure
                                    ? 'border-primary bg-primary/5'
                                    : 'border-gray-100 hover:border-gray-300'
                                }`}
                        >
                            <div className="flex items-center gap-4">
                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${selectedPlan.tenure === plan.tenure ? 'border-primary' : 'border-gray-300'
                                    }`}>
                                    {selectedPlan.tenure === plan.tenure && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
                                </div>
                                <div>
                                    <span className="text-lg font-extrabold">₹{plan.amount.toLocaleString()}</span>
                                    <span className="text-gray-500 text-sm ml-2">x {plan.tenure} months</span>
                                </div>
                            </div>

                            <div className="flex flex-col items-end gap-1">
                                {plan.interest === 0 ? (
                                    <span className="bg-secondary text-primary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">
                                        *0% EMI
                                    </span>
                                ) : (
                                    <span className="text-[10px] font-bold text-gray-400">
                                        {plan.interest}% Interest
                                    </span>
                                )}
                                {plan.cashback > 0 && (
                                    <span className="text-[10px] font-bold text-green-600">
                                        ₹{plan.cashback.toLocaleString()} Cashback
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <p className="text-[11px] text-gray-500 mt-4 italic">
                    EMIs starting 3rd Apr
                </p>
            </div>
        </div>
    );
};

export default EMISelector;
