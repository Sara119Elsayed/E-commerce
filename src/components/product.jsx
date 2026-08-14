import React from 'react';

export default function ProductDetail({ product }) {
	if (!product) return null;

	return (
		<article className="product-card">
			<div className="product-image-wrap">
				<img src={product.thumbnail} alt={product.title} className="product-image" />
			</div>
			<div className="product-info">
				<h2>{product.title}</h2>
				<p>{product.description}</p>
				<div className="product-meta">
					<span>⭐ {product.rating}</span>
					<span>Stock: {product.stock}</span>
				</div>
				<div className="product-footer">
					<strong>${product.price}</strong>
				</div>
			</div>
		</article>
	);
}
