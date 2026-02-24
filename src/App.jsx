import React, { useState } from 'react';
import ProductGallery from './components/ProductGallery';
import ProductDetails from './components/ProductDetails';
import EMISelector from './components/EMISelector';
import Navbar from './components/Navbar';
import SignupModal from './components/SignupModal';
import Footer from './components/Footer';
import imgMain from './assets/product/main.png';
import imgCamera from './assets/product/camera.png';
import imgSide from './assets/product/side.png';
import imgFeatures from './assets/product/features.png';
import imgLineup from './assets/product/lineup.png';

const productData = {
  name: "Apple iPhone 17 Pro",
  variant: "Silver",
  storage: "256 GB",
  mrp: 139900,
  price: 134900,
  images: [imgMain, imgCamera, imgSide, imgFeatures, imgLineup],
  emiPlans: [
    { tenure: 6, amount: 22480, interest: 0, cashback: 0 },
    { tenure: 9, amount: 14987, interest: 0, cashback: 0 },
    { tenure: 12, amount: 11240, interest: 0, cashback: 0 },
    { tenure: 18, amount: 8500, interest: 10.5, cashback: 2000 },
  ],
  variants: ["Silver", "Titanium", "Gold", "Black"],
  storages: ["128 GB", "256 GB", "512 GB", "1 TB"]
};

function App() {
  const [selectedPlan, setSelectedPlan] = useState(productData.emiPlans[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeVariant, setActiveVariant] = useState(productData.variant);
  const [activeStorage, setActiveStorage] = useState(productData.storage);

  return (
    <div className="min-h-screen bg-[#f7f9fa] font-sans">
      <Navbar onSignupClick={() => setIsModalOpen(true)} />

      {isModalOpen && <SignupModal onClose={() => setIsModalOpen(false)} />}

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10">
            {/* Left: Product Gallery */}
            <ProductGallery
              images={productData.images}
              variants={productData.variants}
              storages={productData.storages}
              activeVariant={activeVariant}
              setActiveVariant={setActiveVariant}
              activeStorage={activeStorage}
              setActiveStorage={setActiveStorage}
            />

            {/* Right: Product Info & EMI Selector */}
            <div className="flex flex-col gap-8">
              <ProductDetails
                name={productData.name}
                variant={activeVariant}
                storage={activeStorage}
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
                <button className="w-full bg-primary text-white font-semibold py-4 rounded-xl text-xl hover:bg-primary-dark transition-all">
                  Buy on {selectedPlan.tenure} months EMI
                </button>
                <p className="text-xs text-gray-400 mt-3 italic text-center">
                  *Total extra payment per month/order value. Sold by: Balaji Infocom
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              label: "2 Days Service Centre Replacement",
              icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
            },
            {
              label: "Top Brand",
              icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
            },
            {
              label: "Free Delivery",
              icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            },
            {
              label: "Secure Transaction",
              icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            }
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-4 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-secondary transition-colors">
                {item.icon}
              </div>
              <span className="text-sm font-bold text-gray-700 leading-tight">{item.label}</span>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
