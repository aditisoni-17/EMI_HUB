import React, { useState, useEffect } from 'react';
console.log("HMR Reload trigger");
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate, Navigate } from 'react-router-dom';
import ProductGallery from './components/ProductGallery';
import ProductDetails from './components/ProductDetails';
import EMISelector from './components/EMISelector';
import Navbar from './components/Navbar';
import SignupModal from './components/SignupModal';
import Footer from './components/Footer';
import PaymentModal from './components/PaymentModal';
import TechnicalSpecs from './components/TechnicalSpecs';
import Sidebar from './components/Sidebar';
import imgMain from './assets/product/main.png';
import imgCamera from './assets/product/camera.png';
import imgSide from './assets/product/side.png';
import imgFeatures from './assets/product/features.png';
import imgLineup from './assets/product/lineup.png';
import imgBlack from './assets/product/black.png';
import imgTitanium from './assets/product/titanium.png';
import imgGold from './assets/product/gold.png';

const staticProductData = {
  name: "Apple iPhone 17 Pro",
  variant: "Silver",
  storage: "256 GB",
  mrp: 139900,
  price: 134900,
  variantImages: {
    "Silver": [imgMain, imgCamera, imgSide, imgFeatures, imgLineup],
    "Titanium": [imgTitanium, imgCamera, imgSide, imgFeatures, imgLineup],
    "Gold": [imgGold, imgCamera, imgSide, imgFeatures, imgLineup],
    "Black": [imgBlack, imgCamera, imgSide, imgFeatures, imgLineup]
  },
  emiPlans: [
    { tenure: 6, amount: 22480, interest: 0, cashback: 0 },
    { tenure: 9, amount: 14987, interest: 0, cashback: 0 },
    { tenure: 12, amount: 11240, interest: 0, cashback: 0 },
    { tenure: 18, amount: 8500, interest: 10.5, cashback: 2000 },
  ],
  variants: ["Silver", "Titanium", "Gold", "Black"],
  storages: ["128 GB", "256 GB", "512 GB", "1 TB"]
};

function ProductPage() {
  const { slug } = useParams();
  const [productData, setProductData] = useState(staticProductData);
  const [selectedPlan, setSelectedPlan] = useState(staticProductData.emiPlans[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeVariant, setActiveVariant] = useState(staticProductData.variant);
  const [activeStorage, setActiveStorage] = useState(staticProductData.storage);

  if (!productData) return <div className="p-20 text-center font-bold">Product not found.</div>;

  return (
    <div className="min-h-screen bg-[#f7f9fa] font-sans">
      <Navbar
        onSignupClick={() => setIsModalOpen(true)}
        onMenuClick={() => setIsSidebarOpen(true)}
      />

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {isModalOpen && <SignupModal onClose={() => setIsModalOpen(false)} />}

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10">
            <ProductGallery
              images={productData.variantImages[activeVariant] || Object.values(productData.variantImages)[0]}
              variants={productData.variants}
              storages={productData.storages}
              activeVariant={activeVariant}
              setActiveVariant={setActiveVariant}
              activeStorage={activeStorage}
              setActiveStorage={setActiveStorage}
            />

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
                <button
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="w-full bg-primary text-white font-semibold py-4 rounded-xl text-xl hover:bg-primary-dark transition-all"
                >
                  Buy on {selectedPlan.tenure} months EMI
                </button>
                <p className="text-xs text-gray-400 mt-3 italic text-center">
                  *Total extra payment per month/order value. Sold by: Balaji Infocom
                </p>
              </div>
            </div>
          </div>
        </div>

        <TechnicalSpecs storage={activeStorage} color={activeVariant} />
      </main>

      {isPaymentModalOpen && <PaymentModal onClose={() => setIsPaymentModalOpen(false)} />}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/products/:slug" element={<ProductPage />} />
        <Route path="/" element={<Navigate to="/products/iphone-17-pro" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
