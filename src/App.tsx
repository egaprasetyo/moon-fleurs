import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import CategoriesPage from './pages/CategoriesPage';
import CategoryDetail from './pages/CategoryDetail';
import WishlistPage from './pages/WishlistPage';
import AdminLogin from './pages/AdminLogin';
import AdminPage from './pages/AdminPage';
import { WishlistProvider } from './context/WishlistContext';

export default function App() {
  return (
    <WishlistProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/category/:id" element={<CategoryDetail />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Router>
    </WishlistProvider>
  );
}
