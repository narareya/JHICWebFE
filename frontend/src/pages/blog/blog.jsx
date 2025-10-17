import React from "react";
import { CalendarDays } from "lucide-react"; 
import { blogs } from "../../data/blog";
import "./style.css";

const BlogPage = () => {
  const featured = blogs.find((b) => b.featured);
  const others = blogs.filter((b) => !b.featured);

  return (
    <div className="blog-page">
      {/* Featured Article Section */}
      <div className="featured-container">
        <div className="blog-card featured">
          <img src={featured.image} alt={featured.title} className="featured-image" />
          <div className="blog-content featured-content">
            <h2>{featured.title}</h2>
            <p>{featured.description}</p>
            <div className="blog-date">
              <CalendarDays size={16} />
              <span>{featured.date}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent News Section */}
      <div className="news-section">
        <h2 className="section-title">Berita Terbaru</h2>
        <div className="blog-grid">
          {others.map((item) => (
            <div key={item.id} className="blog-card">
              <img src={item.image} alt={item.title} />
              <div className="blog-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="blog-date">
                  <CalendarDays size={14} />
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
