import Navigation from '@/components/Navigation';
import Link from 'next/link';
import './guide.css';

const posts = [
  {
    id: 1,
    title: "Combating Hard Water in Bartow County",
    excerpt: "Why Cartersville's water might be turning your blonde brassy, and the expert-approved detox solutions to restore your color.",
    date: "March 15, 2026",
    category: "Hair Science"
  },
  {
    id: 2,
    title: "The Truth About Lived-In Color",
    excerpt: "Discover why low-maintenance doesn't mean low-effort, and how we create custom dimension that grows out seamlessly for months.",
    date: "February 28, 2026",
    category: "Color Theory"
  },
  {
    id: 3,
    title: "Extension Aftercare: The Ultimate Guide",
    excerpt: "Protect your investment with these essential brushing, washing, and sleeping routines for volume and hand-tied extensions.",
    date: "February 10, 2026",
    category: "Extensions"
  }
];

export default function Guide() {
  return (
    <main className="guide-page">
      <Navigation />
      
      <header className="page-header">
        <h1 className="page-title animate-fade-in">The Cartersville Guide</h1>
        <p className="page-subtitle animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Expert insights, local knowledge, and hair science from the Authority.
        </p>
      </header>

      <section className="blog-section animate-fade-in" style={{ animationDelay: "0.4s" }}>
        <div className="posts-container">
          {posts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-meta">
                <span className="blog-category">{post.category}</span>
                <span className="blog-date">{post.date}</span>
              </div>
              <h2 className="blog-title">{post.title}</h2>
              <p className="blog-excerpt">{post.excerpt}</p>
              <Link href={`/guide/${post.id}`} className="read-more">
                Read Article <span>→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="seo-footer">
        <div className="seo-content">
          <h2>Your Local Hair Authority in Bartow County</h2>
          <p>
            Located conveniently in Cartersville, GA, Locks By Lindsay specializes in addressing the unique 
            challenges of our local environment—from hard water buildup to humidity. Whether you're commuting 
            from Acworth, Dallas, or Rome, our studio offers a premier destination for transformative, 
            health-focused hair care.
          </p>
        </div>
      </section>
    </main>
  );
}
