import React from 'react';
import './Footer.css';

const quickLinks = ['about', 'menu', 'branches', 'catering', 'reviews'];

const orderLinks = [
  { label: 'Swiggy', href: 'https://www.swiggy.com/direct/brand/566837' },
  { label: 'Zomato', href: 'https://link.zomato.com/xqzv/rshare?id=100410519305638d4' },
  { label: '+91 91334 56668', href: 'tel:+919133456668' },
  { label: 'Find on Maps', href: 'https://maps.app.goo.gl/dUcVTdNzEnrEEN7m8' },
];

const socials = [
  { icon: '📸', href: 'https://www.instagram.com/kammanitelugukitchen', label: 'Instagram' },
  { icon: '📘', href: 'https://www.facebook.com/profile.php?id=61572382974697', label: 'Facebook' },
  { icon: '▶️', href: 'https://www.youtube.com/@kammaniruchulu-r2u', label: 'YouTube' },
];

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-grid container">
        <div className="footer-brand">
          <button className="nav-logo footer-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Kammani <span>Telugu</span> Kitchen
          </button>
          <p>Authentic Telugu flavours, served with love. From our kitchen to your plate — every bite tells a story.</p>
          <p className="hours"><strong>Mon – Sun:</strong> 11:00 AM – 11:00 PM</p>
          <div className="footer-socials">
            {socials.map(({ icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="social-btn" title={label}>{icon}</a>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            {quickLinks.map((id) => (
              <li key={id}>
                <button className="footer-link-btn" onClick={() => scrollTo(id)}>
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Order Online</h4>
          <ul>
            {orderLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" className="footer-ext-link">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom container">
        <span>© 2025 Kammani Telugu Kitchen. All rights reserved.</span>
        <span>Made with ❤️ in Hyderabad</span>
      </div>
    </footer>
  );
}
