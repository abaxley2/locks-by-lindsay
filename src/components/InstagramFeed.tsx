import './InstagramFeed.css';

export default function InstagramFeed() {
  // In a real application, this would fetch from the Instagram Basic Display API
  // or use a service like Elfsight/Snapwidget
  const placeholderPosts = [
    { id: 1, img: "https://images.unsplash.com/photo-1560014022-3067160db130?auto=format&fit=crop&q=80&w=400", likes: 124 },
    { id: 2, img: "https://images.unsplash.com/photo-1594916374092-2aeece5f6c8d?auto=format&fit=crop&q=80&w=400", likes: 89 },
    { id: 3, img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=400", likes: 210 },
    { id: 4, img: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&q=80&w=400", likes: 156 },
  ];

  return (
    <section className="instagram-section">
      <div className="instagram-header">
        <h2>Follow The Journey</h2>
        <a href="https://instagram.com/LocksByLindsay" target="_blank" rel="noopener noreferrer" className="insta-handle">
          @LocksByLindsay
        </a>
      </div>
      
      <div className="instagram-grid">
        {placeholderPosts.map((post) => (
          <a 
            key={post.id} 
            href={`https://instagram.com/LocksByLindsay`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="insta-post"
          >
            <img src={post.img} alt="Instagram post" loading="lazy" />
            <div className="insta-overlay">
              <span className="insta-likes">❤️ {post.likes}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
