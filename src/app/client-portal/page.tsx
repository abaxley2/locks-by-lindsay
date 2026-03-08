"use client";

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import './client-portal.css';

export default function ClientPortal() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    hairHistory: '',
    goal: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for actual form submission logic
    console.log("Form submitted", formData);
    alert("Thank you! Your consultation request has been received. We will be in touch shortly.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="portal-page">
      <Navigation />
      
      <header className="page-header">
        <h1 className="page-title animate-fade-in">New Client Portal</h1>
        <p className="page-subtitle animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Begin your journey. Complete our digital consultation below.
        </p>
      </header>

      <section className="form-section animate-fade-in" style={{ animationDelay: "0.4s" }}>
        <div className="form-container">
          <div className="form-info">
            <h2>Digital Consultation</h2>
            <p>
              To ensure we pair you with the perfect journey, please provide some details about your current hair and your ultimate goals. 
              <strong> For extension inquiries, please prepare two photos (current hair and goal hair) for upload.</strong>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="consultation-form">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  required 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="hairHistory">Hair History (Last 2 Years) *</label>
              <textarea 
                id="hairHistory" 
                name="hairHistory" 
                rows={4} 
                required
                placeholder="Please include any color, chemical treatments, or box dye..."
                value={formData.hairHistory}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="goal">Your Hair Goal *</label>
              <textarea 
                id="goal" 
                name="goal" 
                rows={3} 
                required
                placeholder="Describe your dream hair..."
                value={formData.goal}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="photo-uploads">
              <h3>Photo Requirements</h3>
              <p className="upload-help">Please upload clear, well-lit photos taken in natural lighting.</p>
              
              <div className="upload-grid">
                <div className="upload-box">
                  <label htmlFor="currentPhoto" className="upload-label">
                    <span className="upload-icon">+</span>
                    <span>Current Hair</span>
                    <span className="upload-sub">(Front & Back)</span>
                  </label>
                  <input type="file" id="currentPhoto" accept="image/*" className="file-input" />
                </div>
                
                <div className="upload-box">
                  <label htmlFor="goalPhoto" className="upload-label">
                    <span className="upload-icon">+</span>
                    <span>Goal Hair</span>
                    <span className="upload-sub">(Inspiration)</span>
                  </label>
                  <input type="file" id="goalPhoto" accept="image/*" className="file-input" />
                </div>
              </div>
            </div>

            <button type="submit" className="btn-primary submit-btn">
              Submit Consultation
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
