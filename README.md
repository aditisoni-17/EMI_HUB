# 1Fi Full-Stack Developer Assignment - EMI Store

A premium full-stack web application that displays smartphones with dynamic EMI plans, variants, and a smooth user experience.

## 🚀 Tech Stack

- **Frontend**: React, Tailwind CSS, React Router, Lucide React (icons), Tailwind-Animate.
- **Backend**: Node.js, Express, Mongoose.
- **Database**: MongoDB (In-memory for easy demoing/portability).

## 🛠️ Features

- **Dynamic Product Pages**: Unique URLs for each product (e.g., `/products/iphone-17-pro`).
- **3+ Products & Variants**: iPhone 17 Pro, Samsung S24 Ultra, and Pixel 9 Pro with multiple color/storage options.
- **EMI Integration**: Real-time interest and cashback calculations from backend APIs.
- **Premium Sidebar**: Slide-out navigation overlay matching the reference design.
- **Functional Signup**: Phone-based authentication flow connected to the backend.
- **Variant Switching**: Seamless image transitions when switching product colors.

## 📂 Project Structure

```text
emi_store_3/
├── frontend/             # React application
│   ├── src/
│   │   ├── components/  # Reusable UI parts (Sidebar, QR Modal, etc.)
│   │   ├── assets/      # Product images and icons
│   │   └── App.jsx      # Router and main logic
├── backend/              # Node.js Express server
│   ├── models/           # Mongoose schemas (User, Product)
│   ├── routes/           # API Endpoints (Auth, Products)
│   └── index.js          # Server entry point
```

## 🔌 API Endpoints

- `GET /api/products`: Fetch all products.
- `GET /api/products/:slug`: Fetch a single product by its URL-friendly slug.
- `POST /api/products/seed`: (Dev only) Reset and seed the database with assignment data.
- `POST /api/auth/signup`: Register a new user.

## 🏃 Setup & Run

### 1. Backend
```bash
cd backend
npm install
node index.js
```
*Wait for "Using In-Memory MongoDB" and "Database seeded" messages.*

### 2. Frontend
```bash
cd frontend
npm install
npm run dev
```
Visit the local URL (usually `http://localhost:5173`).

---
*Developed by Antigravity for the 1Fi Full Stack Assignment.*
