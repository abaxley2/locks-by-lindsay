import Navigation from '@/components/Navigation';
import TrustBar from '@/components/TrustBar';
import InstagramFeed from '@/components/InstagramFeed';
import ReviewSlider from '@/components/ReviewSlider';
import Link from 'next/link';
import './page.css';

export default function Home() {
  return (
    <main className="home-page">
      <Navigation />
      
      <header className="hero-section">
        {/* Placeholder for Hero Video */}
        <div className="hero-video-placeholder">
          {/* Background overlay */}
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content animate-fade-in">
          <h1 className="hero-title">
            The Lived-in Color <br />
            <span className="italic-accent">& Extension Authority</span>
          </h1>
          <p className="hero-subtitle">
            Experience organic sophistication and expert-led transformations in the heart of Bartow County.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="btn-primary">
              Reserve Your Transformation
            </Link>
            <Link href="/lookbook" className="btn-secondary">
              View The Lookbook
            </Link>
          </div>
        </div>
      </header>

      <TrustBar />

      <section className="intro-section">
        <div className="intro-container">
          <div className="intro-text">
            <h2>Welcome to The Transformation Hub</h2>
            <p>
              At Locks By Lindsay, we believe your hair should be as dynamic and effortless as you are. 
              Specializing in custom blonding, seamless extensions, and lived-in color that grows out beautifully.
            </p>
            <Link href="/investment" className="link-arrow">
              Explore The Investment Menu <span>→</span>
            </Link>
          </div>
          <div className="intro-image-grid">
            <div className="img-placeholder primary-img">
              <span>Back-of-head Transformation</span>
            </div>
            <div className="img-placeholder secondary-img">
              <span>Detail Shot</span>
            </div>
          </div>
        </div>
      </section>

      <ReviewSlider />
      <InstagramFeed />

    </main>
  );
}
