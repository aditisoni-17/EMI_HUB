import React, { useState } from 'react';
import ProductGallery from './components/ProductGallery';
import ProductDetails from './components/ProductDetails';
import EMISelector from './components/EMISelector';
import Navbar from './components/Navbar';

const productData = {
  name: "Apple iPhone 17 Pro",
  variant: "Silver",
  storage: "256 GB",
  mrp: 139900,
  price: 134900,
  images: [
    "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=800", // iPhone-like image
    "https://images.unsplash.com/photo-1592750475338-74575a4958fc?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&q=80&w=800"
  ],
  emiPlans: [
    { tenure: 6, amount: 22480, interest: 0, cashback: 0 },
    { tenure: 9, amount: 14987, interest: 0, cashback: 0 },
    { tenure: 12, amount: 11240, interest: 0, cashback: 0 },
    { tenure: 18, amount: 8500, interest: 10.5, cashback: 2000 },
  ]
};

function App() {
  const [selectedPlan, setSelectedPlan] = useState(productData.emiPlans[0]);

  return (
    <div className="min-h-screen bg-[#f7f9fa]">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10">
            {/* Left: Product Gallery */}
            <ProductGallery images={productData.images} />

            {/* Right: Product Info & EMI Selector */}
            <div className="flex flex-col gap-8">
              <ProductDetails
                name={productData.name}
                variant={productData.variant}
                storage={productData.storage}
                mrp={productData.mrp}
                price={productData.price}
              />

              <EMISelector
                plans={productData.emiPlans}
                selectedPlan={selectedPlan}
                onSelectPlan={setSelectedPlan}
                price={productData.price}
              />

              <div className="mt-4">
                <button className="w-full btn-primary text-xl py-4">
                  Buy on {selectedPlan.tenure} months EMI
                </button>
                <p className="text-xs text-gray-500 mt-3 italic text-center">
                  *Total extra payment per month/order value. Sold by: Balaji Infocom
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer / Trust Badges */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "2 Days Service Centre Replacement", icon: "🛠️" },
            { label: "Top Brand", icon: "🏆" },
            { label: "Free Delivery", icon: "🚚" },
            { label: "Secure Transaction", icon: "🔒" }
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
              <span className="text-2xl">{item.icon}</span>
              <span className="text-sm font-medium text-gray-700">{item.label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
