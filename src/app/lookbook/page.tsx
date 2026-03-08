"use client";

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import './lookbook.css';

const categories = ["All", "Blondes", "Brunettes", "Extensions", "Curly"];

const lookbookData = [
  { id: 1, category: "Blondes", image: "https://images.unsplash.com/photo-1615818469622-281b898beab0?auto=format&fit=crop&q=80&w=800", alt: "Bright dimensional blonde" },
  { id: 2, category: "Brunettes", image: "https://images.unsplash.com/photo-1595476108010-b4d1f10cfd14?auto=format&fit=crop&q=80&w=800", alt: "Rich lived-in brunette" },
  { id: 3, category: "Extensions", image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800", alt: "22 inch volume extensions" },
  { id: 4, category: "Blondes", image: "https://images.unsplash.com/photo-1620331309855-6b5eaef3b310?auto=format&fit=crop&q=80&w=800", alt: "Root smudge blonde" },
  { id: 5, category: "Curly", image: "https://images.unsplash.com/photo-1531123414708-bb30aa074fce?auto=format&fit=crop&q=80&w=800", alt: "Natural curly cut and color" },
  { id: 6, category: "Brunettes", image: "https://images.unsplash.com/photo-1605497788044-5a32c707d2f6?auto=format&fit=crop&q=80&w=800", alt: "Mocha balayage" },
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
