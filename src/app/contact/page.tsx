import Navigation from '@/components/Navigation';
import Link from 'next/link';
import './contact.css';

export default function Contact() {
  return (
    <main className="contact-page">
      <Navigation />
      
      <header className="page-header">
        <h1 className="page-title animate-fade-in">Reserve Your Transformation</h1>
        <p className="page-subtitle animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Ready for lived-in color that lasts? Book your appointment at our Cartersville studio.
        </p>
      </header>

      <section className="contact-section">
        <div className="contact-container">
          
          <div className="booking-widget animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h2>New to Locks By Lindsay?</h2>
            <p>
              Before booking an extension service or major color correction, we require a brief digital 
              consultation to perfectly tailor your journey.
            </p>
            <Link href="/client-portal" className="btn-secondary dark-btn">
              Complete Digital Consultation
            </Link>

            <div className="calendar-embed-container mt-8">
              <h3>Returning Clients</h3>
              <p className="mb-4">Access our real-time calendar below.</p>
              {/* Placeholder for real booking widget (Vagaro/GlossGenius/Calendly) */}
              <div className="calendar-placeholder">
                <div className="placeholder-content">
                  <span className="calendar-icon">📅</span>
                  <p>Interactive Booking Calendar Embed</p>
                  <button className="btn-primary">Load Availability</button>
                </div>
              </div>
            </div>
          </div>

          <div className="studio-info animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="info-card">
              <h3>The Studio</h3>
              <address>
                <strong>Locks By Lindsay</strong><br />
                123 Main Street, Suite 100<br />
                Cartersville, GA 30120
              </address>
              
              <div className="contact-details">
                <p><strong>Phone:</strong> <a href="tel:+15550123">(555) 012-3456</a></p>
                <p><strong>Email:</strong> <a href="mailto:hello@locksbylindsay.com">hello@locksbylindsay.com</a></p>
              </div>

              <div className="hours">
                <h4>Hours of Operation</h4>
                <ul>
                  <li><span>Tuesday - Thursday:</span> 10am - 7pm</li>
                  <li><span>Friday:</span> 10am - 5pm</li>
                  <li><span>Saturday:</span> 9am - 3pm</li>
                  <li><span>Sunday - Monday:</span> Closed</li>
                </ul>
              </div>
            </div>

            <div className="map-container">
              {/* Placeholder for Google Maps Embed */}
              <div className="map-placeholder">
                <p>Google Maps: Cartersville, GA 30120</p>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </main>
  );
}
