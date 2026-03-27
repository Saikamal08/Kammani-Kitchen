import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg" />
      <div className="hero-pattern" />
      <div className="hero-glow" />

      <div className="hero-content">
        <div className="hero-badge">⭐ 4.4 Stars · 1,875+ Reviews · Google</div>

        <h1 className="hero-title">
          Maa Illu <em>Vanta</em>
        </h1>
        <p className="hero-tagline">Our home's cooking — you'll feel it in every bite</p>
        <p className="hero-sub">
          Authentic Telugu flavours, crafted with love. Serving Hyderabad families since our
          first pot of biryani. 5 branches across the city.
        </p>

        <div className="hero-actions">
          <a
            href="https://www.swiggy.com/direct/brand/566837"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            🛵 Order on Swiggy
          </a>
          <a href="#catering" className="btn-outline"
            onClick={e => { e.preventDefault(); document.getElementById('catering')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Book Catering
          </a>
        </div>

        <div className="hero-stats">
          {[
            { value: '5', label: 'Branches in Hyderabad' },
            { value: '250+', label: 'Catering Projects' },
            { value: '4.4★', label: 'Google Rating' },
          ].map(({ value, label }) => (
            <div className="hero-stat" key={label}>
              <span>{value}</span>
              <p>{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="scroll-hint">Scroll</div>
    </section>
  );
}
