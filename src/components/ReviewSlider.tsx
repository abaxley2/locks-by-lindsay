"use client";

import { useState, useEffect } from 'react';
import './ReviewSlider.css';

const reviews = [
  {
    id: 1,
    text: "Lindsay is an absolute magician! I've never loved my blonde more, and her extension work gave me the exact volume I was looking for. The studio feels so luxurious too.",
    author: "Sarah M.",
    service: "Signature Transformation"
  },
  {
    id: 2,
    text: "So thankful to find a color expert in Cartersville! The lived-in refresh she gave me genuinely lasts for months without looking grown out.",
    author: "Amanda T.",
    service: "Lived-In Refresh"
  },
  {
    id: 3,
    text: "If you struggle with hard water making your hair brassy, you need the Cartersville Detox. My hair feels incredibly soft and the color is vibrant again.",
    author: "Jessica R.",
    service: "The Cartersville Detox"
  }
];

export default function ReviewSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="reviews-section">
      <div className="reviews-container">
        <h2 className="reviews-heading">Client Stories</h2>
        
        <div className="slider-viewport">
          {reviews.map((review, index) => (
            <div 
              key={review.id}
              className={`review-slide ${index === current ? 'active' : ''}`}
            >
              <div className="quote-mark">"</div>
              <p className="review-text">{review.text}</p>
              <div className="review-meta">
                <span className="review-author">{review.author}</span>
                <span className="review-service">• {review.service}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="slider-dots">
          {reviews.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === current ? 'active' : ''}`}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
