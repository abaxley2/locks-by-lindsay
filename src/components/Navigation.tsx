"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import './Navigation.css';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`main-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link href="/" className="nav-brand">
          Locks By Lindsay
        </Link>
        
        <div className="nav-links">
          <Link href="/lookbook" className="nav-link">Lookbook</Link>
          <Link href="/investment" className="nav-link">Investment</Link>
          <Link href="/guide" className="nav-link">The Guide</Link>
          <Link href="/contact" className="nav-cta">Reserve</Link>
        </div>

        {/* Mobile menu button */}
        <button className="mobile-menu-btn" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
