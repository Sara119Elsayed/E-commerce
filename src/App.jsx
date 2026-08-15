import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { Outlet } from 'react-router-dom';
import { ShopProvider } from './Context/ShopContext';

function Layout() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="page-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ShopProvider>
      <Layout />
    </ShopProvider>
  );
}
