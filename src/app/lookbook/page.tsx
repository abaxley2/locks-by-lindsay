"use client";

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import './lookbook.css';

const categories = ["All", "Blondes", "Brunettes", "Extensions", "Curly"];

const lookbookData = [
  { id: 1, category: "Blondes", image: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?auto=format&fit=crop&q=80&w=800", alt: "Bright dimensional blonde balayage" },
  { id: 2, category: "Brunettes", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800", alt: "Rich lived-in brunette color" },
  { id: 3, category: "Extensions", image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=800", alt: "Hand-tied weft volume extensions" },
  { id: 4, category: "Blondes", image: "https://images.unsplash.com/photo-1553798987-3b4f29c0d7b4?auto=format&fit=crop&q=80&w=800", alt: "Seamless root smudge blonde" },
  { id: 5, category: "Curly", image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=800", alt: "Natural curly cut and color" },
  { id: 6, category: "Brunettes", image: "https://images.unsplash.com/photo-1618354691229-88d47f285158?auto=format&fit=crop&q=80&w=800", alt: "Mocha balayage brunette" },
];

export default function Lookbook() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredImages = activeFilter === "All" 
    ? lookbookData 
    : lookbookData.filter(item => item.category === activeFilter);

  return (
    <main className="lookbook-page">
      <Navigation />
      
      <header className="page-header">
        <h1 className="page-title animate-fade-in">The Lookbook</h1>
        <p className="page-subtitle animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Explore our portfolio of seamless, lived-in color and expert extensions.
        </p>
      </header>

      <section className="gallery-section">
        <div className="filter-nav animate-fade-in" style={{ animationDelay: "0.4s" }}>
          {categories.map((category) => (
            <button 
              key={category}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredImages.map((item) => (
            <div key={item.id} className="gallery-item animate-fade-in">
              <img src={item.image} alt={item.alt} />
              <div className="gallery-overlay">
                <span className="gallery-category">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
