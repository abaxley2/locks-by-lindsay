"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import './FloatingReserveButton.css';

export default function FloatingReserveButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show the floating button after scrolling down a bit
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="floating-button-container">
      <Link href="/contact" className="floating-btn animate-fade-in">
        Reserve Your Transformation
      </Link>
    </div>
  );
}
