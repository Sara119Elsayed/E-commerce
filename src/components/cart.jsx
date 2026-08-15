import React from 'react'
import { Link } from 'react-router-dom'
import { useShop } from '../Context/ShopContext'

export default function Cart() {
  const { cart, cartTotal, updateQuantity, removeFromCart, clearCart } = useShop()

  if (!cart || cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your cart is empty</h2>
        <p>Browse our products and add items to your cart.</p>
        <Link to="/products" className="ui-button primary">Shop products</Link>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <div className="cart-grid">
        <section className="cart-list">
          <h3>Shopping Cart ({cart.length})</h3>

          <div>
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <Link to={`/product/${item.id}`} className="cart-item-image">
                  <img src={item.thumbnail || item.image} alt={item.title} />
                </Link>

                <div className="cart-item-info">
                  <Link to={`/product/${item.id}`} className="cart-item-title">{item.title}</Link>
                  <div className="cart-item-category">{item.category}</div>

                  <div className="cart-item-controls">
                    <div className="cart-qty-control">
                      <button aria-label="decrease" onClick={() => updateQuantity(item.id, Number(item.quantity || 0) - 1)}>-</button>
                      <div className="qty">{item.quantity}</div>
                      <button aria-label="increase" onClick={() => updateQuantity(item.id, Number(item.quantity || 0) + 1)}>+</button>
                    </div>

                    <div className="cart-item-price">${(Number(item.price) * Number(item.quantity || 0)).toFixed(2)}</div>
                  </div>
                </div>

                <div className="cart-item-actions">
                  <button className="remove-link" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <aside className="cart-summary">
          <h4>Order summary</h4>
          <div className="summary-row">
            <span>Subtotal</span>
            <strong>${Number(cartTotal || 0).toFixed(2)}</strong>
          </div>
          <p className="muted">Taxes and shipping calculated at checkout.</p>

          <button className="checkout-button">Checkout</button>
          <button className="clear-button" onClick={() => clearCart()}>Clear cart</button>
        </aside>
      </div>
    </div>
  )
}
