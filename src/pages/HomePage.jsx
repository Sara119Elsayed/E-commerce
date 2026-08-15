import React, { useState } from 'react';
import ProductCard from '../components/home';
import { useProducts } from '../hooks/useProducts';

export default function HomePage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  const { products, categories, loading, error } = useProducts({ query: search, category });

  return (
    <div className="app-shell">

      <section className="hero">
        <h1>Find what you're looking for</h1>
        <p>Browse thousands of products across every category, at prices you'll love.</p>

        <div className="hero-search">
          <input
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </section>

      <div className="page-content">
        <div className="home-page">

          {categories.length > 0 && (
            <div className="category-chip-row">
              <button
                className={`category-chip ${category === '' ? 'active' : ''}`}
                onClick={() => setCategory('')}
              >
                All
              </button>
              {categories.map((c) => {
                const categoryName = typeof c === 'string' ? c : c?.name || c?.slug || '';
                const categoryValue = typeof c === 'string' ? c : c?.slug || c?.name || '';
                return (
                  <button
                    key={categoryValue}
                    className={`category-chip ${category === categoryValue ? 'active' : ''}`}
                    onClick={() => setCategory(categoryValue)}
                  >
                    {categoryName}
                  </button>
                );
              })}
            </div>
          )}

          <div className="section-block">
            <div className="section-heading">
              <h2>{category ? category : 'Featured products'}</h2>
              <span>{products.length} items</span>
            </div>

            {loading && <div className="panel-state">Loading products...</div>}
            {error && <div className="panel-state error">{error}</div>}
            {!loading && !error && products.length === 0 && (
              <div className="panel-state">
                No products found{search ? ` for "${search}"` : ''}.
              </div>
            )}

            <div className="product-grid">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}