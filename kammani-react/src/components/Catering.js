import React from 'react';
import { useReveal } from '../hooks/useReveal';
import './Catering.css';

const features = [
  { icon: '💍', title: 'Weddings & Engagements', desc: 'Traditional Telugu wedding feasts — complete, authentic, and unforgettable.' },
  { icon: '🏢', title: 'Corporate Events', desc: 'Reliable, hygienic, and on-time catering for office events and team lunches.' },
  { icon: '🎂', title: 'Birthday & House Parties', desc: 'Make your celebration delicious with our customizable catering packages.' },
  { icon: '🍽️', title: 'Custom Menus', desc: 'Work with our team to build a menu that matches your event perfectly.' },
];

export default function Catering() {
  const leftRef = useReveal();
  const rightRef = useReveal();
  return (
    <section id="catering" className="catering-section">
      <div className="container">
        <div className="catering-grid">
          <div className="reveal" ref={leftRef}>
            <div className="section-label">Catering Services</div>
            <h2 className="section-title">Your Celebration, Our Kitchen</h2>
            <p className="section-sub">
              Whether it's an intimate family gathering or a grand corporate event, we bring
              authentic Telugu flavours to your door.
            </p>
            <div className="catering-features">
              {features.map(({ icon, title, desc }) => (
                <div className="catering-feature" key={title}>
                  <div className="catering-feature-icon">{icon}</div>
                  <div className="catering-feature-text">
                    <h4>{title}</h4>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal" ref={rightRef}>
            <div className="catering-cta-box">
              <div className="catering-count">250+</div>
              <div className="catering-count-label">Catering projects completed</div>
              <h3>Ready to Book?</h3>
              <p>
                Slots fill up fast — especially for weekends. Reach out now and let's plan the
                perfect menu for your event.
              </p>
              <a href="tel:+919133456668" className="btn-primary">📞 Call +91 91334 56668</a>
              <p className="catering-hours">Open 11 AM – 11 PM · All Days</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
