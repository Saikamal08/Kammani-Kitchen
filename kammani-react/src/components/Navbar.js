import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <a href="#hero" className="nav-logo" onClick={() => handleNavClick('hero')}>
        Kammani <span>Telugu</span> Kitchen
      </a>

      <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
        {['about', 'menu', 'branches', 'catering', 'reviews'].map((id) => (
          <li key={id}>
            <button className="nav-link-btn" onClick={() => handleNavClick(id)}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          </li>
        ))}
      </ul>

      <a href="tel:+919133456668" className="nav-cta">📞 Call Us</a>

      <button
        className={`hamburger${menuOpen ? ' open' : ''}`}
        aria-label="Toggle menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span /><span /><span />
      </button>
    </nav>
  );
}
