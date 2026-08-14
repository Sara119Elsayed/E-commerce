import React from 'react';
import { useShop } from '../Context/ShopContext';
import { Link } from 'react-router-dom';

export default function Wishlist() {
	const { wishlist, removeFromWishlist } = useShop();

	if (!wishlist || wishlist.length === 0) {
		return (
			<div className="info-card">
				<h3>Your wishlist is empty</h3>
				<p>Browse products and add items to your wishlist.</p>
			</div>
		);
	}

	return (
		<section className="products-page">
			<h3>Your Wishlist</h3>
			<div className="product-grid">
				{wishlist.map((p) => (
					<article key={p.id} className="product-card">
						<div className="product-image-wrap">
							<Link to={`/product/${p.id}`}>
								<img src={p.thumbnail} alt={p.title} className="product-image" />
							</Link>
						</div>
						<div className="product-info">
							<h4>{p.title}</h4>
							<p>{p.description}</p>
							<div className="product-footer">
								<strong>${p.price}</strong>
								<button className="ui-button" onClick={() => removeFromWishlist(p.id)}>Remove</button>
							</div>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
