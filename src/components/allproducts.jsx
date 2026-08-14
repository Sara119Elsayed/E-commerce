import React, { useState } from 'react';
import ProductCard from './home';
import { useProducts } from '../hooks/useProducts';

export default function Allproducts() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [order, setOrder] = useState('asc');
  const [limit, setLimit] = useState(12);
  const [skip, setSkip] = useState(0);

  const { products, categories, loading, error } = useProducts({
    query: search,
    category,
    sortBy,
    order,
    limit,
    skip,
  });

  const currentPage = Math.floor(skip / limit) + 1;

  return (
    <section className="products-page">
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

          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="">Default</option>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
            <option value="title">Title</option>
          </select>

          <select value={order} onChange={(e) => setOrder(e.target.value)}>
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
          </select>

          <select value={limit} onChange={(e) => setLimit(Number(e.target.value))}>
            <option value={6}>6 per page</option>
            <option value={12}>12 per page</option>
            <option value={24}>24 per page</option>
          </select>
        </div>
      </div>

      <div className="results-bar">
        <span>{products.length} products</span>
        {category && <span>Category: {category}</span>}
        {search && <span>Search: {search}</span>}
      </div>

      {loading && <div className="panel-state">Loading products...</div>}
      {error && <div className="panel-state error">{error}</div>}

      <div className="product-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {!loading && products.length > 0 && (
        <div className="pagination-bar">
          <button
            className="ui-button"
            onClick={() => setSkip(Math.max(0, skip - limit))}
            disabled={skip === 0}
          >
            ← Previous
          </button>

          <span>Page {currentPage}</span>

          <button
            className="ui-button"
            onClick={() => setSkip(skip + limit)}
          >
            Next →
          </button>
        </div>
      )}
    </section>
  );
}
