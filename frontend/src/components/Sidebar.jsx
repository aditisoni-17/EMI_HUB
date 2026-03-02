import React from 'react';

function Sidebar({ isOpen = false, onClose = () => {} }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <aside className="absolute left-0 top-0 h-full w-72 bg-white shadow-xl p-5">
        <button
          type="button"
          className="mb-6 text-sm font-semibold text-gray-700"
          onClick={onClose}
        >
          Close
        </button>
        <nav className="space-y-3 text-gray-800">
          <a href="/" className="block hover:text-black">Home</a>
          <a href="/products/iphone-17-pro" className="block hover:text-black">Products</a>
        </nav>
      </aside>
    </div>
  );
}

export default Sidebar;
