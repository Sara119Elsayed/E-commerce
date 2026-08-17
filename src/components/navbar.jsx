import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useShop } from '../Context/ShopContext';
export default function Navbar() {
  const { cartCount, wishlist } = useShop();
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="top-nav">
      <div className="brand-block">
        <span >🛒</span>
        <div>
          <strong>Shelfly</strong>
          </div>
      </div>

      <nav className="nav-links">
        <Link to="/" className={`nav-button ${isActive('/') && location.pathname === '/' ? 'active' : ''}`}>Home</Link>
        <Link to="/products" className={`nav-button ${isActive('/products') ? 'active' : ''}`}>Shop</Link>
        <Link to="/about" className={`nav-button ${isActive('/about') ? 'active' : ''}`}>About</Link>
       <Link to="/wishlist" className="nav-button">Wishlist</Link>

      </nav>

      <div className="nav-actions">
        <Link to="/cart" className="nav-button">Cart</Link>
        <Link to="/login" className="ui-button primary">Login</Link>
        <Link to="/signup" className="ui-button primary">Sign up</Link>

      </div>
    </header>
  );
}
