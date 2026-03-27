import React from 'react';
import { useReveal } from '../hooks/useReveal';
import './About.css';

export default function About() {
  const cardRef = useReveal();
  const textRef = useReveal();

  const pillars = [
    { icon: '🫕', label: 'Authentic Recipes' },
    { icon: '🏡', label: 'Home-style Cooking' },
    { icon: '📦', label: 'Delivery Available' },
    { icon: '🎉', label: 'Catering Services' },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-visual reveal" ref={cardRef}>
            <div className="about-card">
              <div className="about-card-quote">"</div>
              <p>
                If you're looking for authentic flavours, Kammani Telugu Kitchen is a must-visit.
                The food tastes like a true home-cooked Telugu meal.
              </p>
              <div className="about-card-author">— Verified Google Review</div>
            </div>
            <div className="about-floating-badge">
              <strong>250+</strong>
              <span>Catering Events</span>
            </div>
          </div>

          <div className="about-text reveal" ref={textRef}>
            <div className="section-label">Our Story</div>
            <h2 className="section-title">Telugu Ruchulu, Straight from the Heart</h2>
            <p>
              Born from a passion to bring the warmth of a Telugu household kitchen to the streets
              of Hyderabad, Kammani Telugu Kitchen has grown into a beloved dining destination —
              now with 5 branches spread across the city.
            </p>
            <p>
              From the rich aroma of slow-cooked biryani to the tangy depth of gongura curries,
              every dish tells the story of our culture, our homes, and our people.
            </p>
            <div className="about-pillars">
              {pillars.map(({ icon, label }) => (
                <div className="pillar" key={label}>
                  <span className="pillar-icon">{icon}</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
