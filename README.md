# 🌾 FarmFresh

FarmFresh is a full-stack e-commerce platform built as the **final project** of the Reactive Accelerator course.  
It allows users to buy fresh farm products directly from farmers, manage orders, and experience a complete e-commerce flow with authentication, product management, payments, and reviews.

---

## ✨ Key Features

### 🔑 Authentication

- JWT-based authentication with **Access & Refresh tokens**
- Social login using **Google OAuth**
- Secure password reset via email
- Parallel & intercepting routes for **Login / Signup modals**

### 🏠 User Features

- Browse products with **search & filtering**
- Shop by category
- View featured & related products
- Add to **Cart** and **Favourites**
- Write, edit, and delete **reviews**
- SEO-friendly product pages with OpenGraph support
- Checkout with **fake payment simulation**
- Download and receive **PDF invoices** via email
- Manage orders: view, reorder, cancel, and review

### 👨‍🌾 Farmer Features

- Add new products
- Manage products (edit, publish/unpublish, delete, search, filter)
- View orders for own products
- Update product order status: `Pending → Confirmed → Shipped → Delivered → Canceled`

### 🛠️ Additional Pages

- **Cart Page** (custom built)
- **Favourites Page**
- **Farmers Directory**
- **Bookings Page** (order history for both farmers & users)
- Success & Payment pages

---

## 🧭 Navbar (Dynamic)

- **Guest**: Home, Products, Farmers, About, Login, Signup
- **User**: Home, Products, Farmers, My Orders, About, Logout
- **Farmer**: Home, Add Product, Manage Products, About, Logout

---

## 📂 Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Authentication**: JWT (Access & Refresh), Google OAuth
- **Email & PDF**: Nodemailer, PDFKit
- **Deployment**: Vercel (Frontend) + Render/Heroku (Backend)

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- MongoDB Atlas account
- Google OAuth credentials
