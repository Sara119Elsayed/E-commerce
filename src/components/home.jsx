import React from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../Context/ShopContext';

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, isWishlisted } = useShop();

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <Link to={`/product/${product.id}`}>
          <img src={product.thumbnail} alt={product.title} className="product-image" />
        </Link>
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3>
          <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            {product.title}
          </Link>
        </h3>
				<div className="product-meta">
					<span>⭐ {product.rating}</span>
					<span>Stock: {product.stock}</span>
				</div>
				<div className="product-footer">
					<strong>${product.price}</strong>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="ui-button primary" onClick={() => addToCart(product, 1)}>Add to cart</button>
            <button
              className={isWishlisted(product.id) ? 'ui-button secondary' : 'ui-button'}
              onClick={() => toggleWishlist(product)}
              aria-pressed={isWishlisted(product.id)}
            >
              {isWishlisted(product.id) ? 'Remove ❤️' : 'Wishlist ♡'}
            </button>
          </div>
				</div>
			</div>
		</article>
	);
}
