import './InstagramFeed.css';

export default function InstagramFeed() {
  // In a real application, this would fetch from the Instagram Basic Display API
  // or use a service like Elfsight/Snapwidget
  const placeholderPosts = [
    { id: 1, img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=400", likes: 214 },
    { id: 2, img: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?auto=format&fit=crop&q=80&w=400", likes: 187 },
    { id: 3, img: "https://images.unsplash.com/photo-1553798987-3b4f29c0d7b4?auto=format&fit=crop&q=80&w=400", likes: 302 },
    { id: 4, img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=400", likes: 143 },
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
