import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { WishlistProvider } from './pages/Wishlist';
import { BasketProvider } from './context/BasketContext';
import { AuthProvider } from './context/AuthContext';

// Lazy loading страниц
const Home = React.lazy(() => import('./pages/Home'));
const Shop = React.lazy(() => import('./pages/Shop'));
const ProductDetails = React.lazy(() => import('./pages/ProductDetails'));
const Basket = React.lazy(() => import('./pages/basket'));
const Wishlist = React.lazy(() => import('./pages/Wishlist'));
const Profile = React.lazy(() => import('./pages/Profile'));
const SearchResults = React.lazy(() => import('./pages/SearchResults')); // Страница результатов поиска
const ShopPage = React.lazy(() => import('./pages/ShopPage')); // Новый маршрут
const Contact = React.lazy(() => import('./pages/Contact'));
const About = React.lazy(() => import('./pages/About'));
const FAQ = React.lazy(() => import('./pages/FAQ'));



function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <WishlistProvider>
          <BasketProvider>
            <Layout>
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/shop" element={<ShopPage />} /> {/* Изменено */}
                  <Route path="/product/:id" element={<ProductDetails />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/About" element={<About />} />
                  <Route path="/FAQ" element={<FAQ />} />
                  <Route path="/basket" element={<Basket />} />
                  <Route path="/wishlist" element={<Wishlist />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/search" element={<SearchResults />} /> {/* Новый маршрут */}
                  <Route path="*" element={<div>Page not found</div>} />
                </Routes>
              </Suspense>
            </Layout>
          </BasketProvider>
        </WishlistProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
