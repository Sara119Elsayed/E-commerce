import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { Outlet } from 'react-router-dom';
import { ShopProvider } from './Context/ShopContext';

function Layout() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="page-content">
        <Outlet />
      </main>
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
