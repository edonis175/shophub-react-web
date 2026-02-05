# ShopHub — Modern React Shopping Experience

ShopHub is a modern, responsive e‑commerce UI built with React and Vite. It provides a clean product browsing experience, product detail pages, authentication flow, and a simple cart/checkout journey.

![ShopHub storefront preview](https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500&h=500&fit=crop)

## Key Features

- Responsive layout and reusable UI components
- Product listing with detailed product pages
- Authentication screen (login/register UX)
- Cart management with checkout flow
- Context-based state management for auth and cart

## Tech Stack

- React + Vite
- Context API for state management
- CSS modules via component-scoped styling

## Getting Started

1. Install dependencies:
   - npm install
2. Start the development server:
   - npm run dev
3. Build for production:
   - npm run build
4. Preview the production build:
   - npm run preview

## Project Structure

- src/components — shared UI components (Navbar, ProductCard)
- src/pages — route pages (Home, ProductDetails, Auth, Checkout)
- src/context — app contexts (AuthContext, CartContext)
- src/data — mock product data

## Notes

This project is a UI-focused storefront and uses mock data for products. You can connect a real backend by replacing the data layer and wiring API calls.
