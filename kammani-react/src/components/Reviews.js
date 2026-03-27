import React from 'react';
import { useReveal } from '../hooks/useReveal';
import './Reviews.css';

const reviews = [
  {
    stars: 5,
    text: "Absolutely delicious — the food tastes like a true home-cooked Telugu meal. The staff is very attentive and the ambiance is neat and clean. Best place in the area for a family outing!",
    author: "Priya M.",
    source: "Google Review · Bachupally Branch",
  },
  {
    stars: 5,
    text: "The fish pool in the centre of the dining area adds a unique and calming touch. Staff are polite and attentive. Manager Prasanth showed outstanding hospitality — truly appreciated.",
    author: "Ravi K.",
    source: "Google Review · Mallampet Branch",
  },
  {
    stars: 4,
    text: "Guttivankay pulao is good — definitely try it. Paya soup is excellent. Apricot delight is a must for dessert lovers. Good ambience and comfortable seating with ample parking.",
    author: "Suresh R.",
    source: "Google Review · Bachupally Branch",
  },
];

function StarRating({ count }) {
  return (
    <div className="review-stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ color: i < count ? '#FFD700' : '#ccc' }}>★</span>
      ))}
    </div>
  );
}

function ReviewCard({ review }) {
  const ref = useReveal();
  return (
    <div className="review-card reveal" ref={ref}>
      <StarRating count={review.stars} />
      <p className="review-text">"{review.text}"</p>
      <div className="review-author">{review.author}</div>
      <div className="review-source">{review.source}</div>
    </div>
  );
}

export default function Reviews() {
  const headerRef = useReveal();
  return (
    <section id="reviews" className="reviews-section">
      <div className="container">
        <div className="reviews-header reveal" ref={headerRef}>
          <div className="section-label">Customer Love</div>
          <h2 className="section-title">What Our Guests Say</h2>
          <div className="rating-badge">
            <span className="rating-stars">★★★★★</span>
            <span className="rating-score">4.4</span>
            <span className="rating-count">based on 1,875+ Google reviews</span>
          </div>
        </div>
        <div className="reviews-grid">
          {reviews.map((r) => (
            <ReviewCard key={r.author} review={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
