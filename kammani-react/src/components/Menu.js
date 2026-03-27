import React from 'react';
import { useReveal } from '../hooks/useReveal';
import './Menu.css';

const menuItems = [
  {
    emoji: '🍛',
    theme: 'biryani',
    title: 'Non-Veg Biryanis',
    desc: 'Slow-cooked dum biryanis with aromatic basmati, tender meat, and authentic Telugu spices. A celebration in every plate.',
    tag: '★ Chef\'s Favourite',
  },
  {
    emoji: '🥘',
    theme: 'curry',
    title: 'Telugu Curries',
    desc: 'From gongura paneer parcels to guttivankay pulao — our curries carry the soul of Andhra & Telangana kitchens.',
    tag: 'Veg & Non-Veg',
  },
  {
    emoji: '🥡',
    theme: 'chinese',
    title: 'Chinese Varieties',
    desc: 'Indo-Chinese favourites made with the bold flavours Hyderabad loves — fried rice, noodles, and more.',
    tag: 'Popular Pick',
  },
  {
    emoji: '🍢',
    theme: 'starters',
    title: 'Starters',
    desc: 'Crispy, spicy, and perfectly seasoned starters to kick off your meal. Try the Gongura Paneer Parcels!',
    tag: 'Must Try',
  },
  {
    emoji: '🥣',
    theme: 'soup',
    title: 'Soups',
    desc: 'Rich, comforting paya soup and more — traditional Telugu broths that warm you from the inside out.',
    tag: 'Seasonal Special',
  },
  {
    emoji: '🍮',
    theme: 'dessert',
    title: 'Desserts',
    desc: 'End your meal on a sweet note with our signature Apricot Delight — a crowd favourite every time.',
    tag: '★ Highly Rated',
  },
];

function MenuCard({ item }) {
  const ref = useReveal();
  return (
    <div className="menu-card reveal" ref={ref}>
      <div className={`menu-card-img ${item.theme}`}>{item.emoji}</div>
      <div className="menu-card-body">
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
        <span className="menu-tag">{item.tag}</span>
      </div>
    </div>
  );
}

export default function Menu() {
  const headerRef = useReveal();
  return (
    <section id="menu" className="menu-section">
      <div className="container">
        <div className="menu-header reveal" ref={headerRef}>
          <div className="section-label">What We Serve</div>
          <h2 className="section-title">Flavours That Feel Like Home</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Every item on our menu is crafted with authentic Telugu techniques — no shortcuts, just pure flavour.
          </p>
        </div>
        <div className="menu-grid">
          {menuItems.map((item) => (
            <MenuCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
