import React from 'react';

export default function AboutPage() {
  return (
    <div className="app-shell">

      <section className="hero">
        <div className="hero-inner">
          <span className="hero-badge">✨ Our story</span>
          <h1>Built to make shopping simple</h1>
          <p>
            We're a small team obsessed with making online shopping fast, honest,
            and easy — from search to checkout.
          </p>
        </div>
      </section>

      <div className="page-content">
        <div className="about-page">
          <div className="info-card">
            <h2>Our mission</h2>
            <p style={{ color: '#475569', marginTop: 12, lineHeight: 1.7 }}>
              We started this store with one goal: make it effortless to find
              what you need, at a price that feels fair. No clutter, no
              confusing checkout, no surprises at the end. Just products you're
              looking for, organized the way you'd expect.
            </p>
          </div>

          <div className="promo-strip">
            <div className="promo-card">
              <span className="promo-icon">📦</span>
              <div>
                <h4>10,000+</h4>
                <p>Products listed</p>
              </div>
            </div>
            <div className="promo-card">
              <span className="promo-icon">🌍</span>
              <div>
                <h4>50,000+</h4>
                <p>Customers served</p>
              </div>
            </div>
            <div className="promo-card">
              <span className="promo-icon">⭐</span>
              <div>
                <h4>4.8 / 5</h4>
                <p>Average rating</p>
              </div>
            </div>
          </div>

          <div className="section-block">
            <div className="section-heading">
              <h2>What you get</h2>
            </div>
            <div className="feature-grid">
              <div className="info-card">
                <h3>Fast search</h3>
                <p style={{ color: '#475569', marginTop: 8, fontSize: '0.9rem' }}>
                  Find exactly what you need in seconds, filtered by category,
                  price, or rating.
                </p>
              </div>
              <div className="info-card">
                <h3>Fair prices</h3>
                <p style={{ color: '#475569', marginTop: 8, fontSize: '0.9rem' }}>
                  We work directly with sellers to keep prices honest — no
                  inflated "discounts."
                </p>
              </div>
              <div className="info-card">
                <h3>Reliable delivery</h3>
                <p style={{ color: '#475569', marginTop: 8, fontSize: '0.9rem' }}>
                  Every order is tracked door-to-door, with real-time updates
                  along the way.
                </p>
              </div>
              <div className="info-card">
                <h3>Easy returns</h3>
                <p style={{ color: '#475569', marginTop: 8, fontSize: '0.9rem' }}>
                  Changed your mind? Send it back within 30 days, no questions
                  asked.
                </p>
              </div>
            </div>
          </div>

          <div className="section-block">
            <div className="section-heading">
              <h2>How we work</h2>
            </div>
            <div className="steps-row">
              <div className="step-card">
                <div className="step-number">1</div>
                <h4>Curate</h4>
                <p>We hand-pick sellers and products that meet our quality bar.</p>
              </div>
              <div className="step-card">
                <div className="step-number">2</div>
                <h4>Verify</h4>
                <p>Every listing is checked for accuracy before it goes live.</p>
              </div>
              <div className="step-card">
                <div className="step-number">3</div>
                <h4>Deliver</h4>
                <p>Orders are packed and shipped through trusted logistics partners.</p>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h2>A note from the team</h2>
            <p style={{ color: '#475569', marginTop: 12, lineHeight: 1.7 }}>
              This is a demo storefront built on the DummyJSON products API,
              showcasing product listing, search, category filtering, and a
              simple cart and login flow. It's meant as a portfolio piece and
              a starting point — not a live store — but every interaction
              works the way a real one would.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}