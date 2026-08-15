import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-col">
          <h4>Shop</h4>
          <ul>
            <li><a href="#">All products</a></li>
            <li><a href="#">New arrivals</a></li>
            <li><a href="#">Best sellers</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Help center</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Returns</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Follow us</h4>
          <div className="footer-social">
            <a href="#">🐦</a>
            <a href="#">📸</a>
            <a href="#">📘</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} Shelfly. All rights reserved.
      </div>
    </footer>
  );
}