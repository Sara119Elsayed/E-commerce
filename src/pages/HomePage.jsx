import React, { useState } from 'react';
import ProductCard from '../components/home';
import { useProducts } from '../hooks/useProducts';

export default function HomePage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  const { products, categories, loading, error } = useProducts({ query: search, category });

  return (
    <section className="home-page">
      <div className="toolbar">
        <div className="search-panel">
          <input
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="toolbar-group">
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">All categories</option>
            {categories.map((c) => {
              const categoryName = typeof c === 'string' ? c : c?.name || c?.slug || '';
              const categoryValue = typeof c === 'string' ? c : c?.slug || c?.name || '';
              return (
                <option key={categoryValue} value={categoryValue}>
                  {categoryName}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      {loading && <div className="panel-state">Loading products...</div>}
      {error && <div className="panel-state error">{error}</div>}

      <div className="product-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
