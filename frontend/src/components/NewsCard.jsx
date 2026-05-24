import React from 'react';
import './NewsCard.css';

export default function NewsCard({ article }) {
  return (
    <article className="news-card glass-panel">
      <div className="card-image-wrapper">
        <img src={article.imageUrl} alt={article.title} className="card-image" loading="lazy" />
        <span className="card-category">{article.category}</span>
      </div>
      <div className="card-content">
        <div className="card-meta">
          <span className="card-source">{article.source}</span>
          <span className="card-date">{new Date(article.date).toLocaleDateString()}</span>
        </div>
        <h3 className="card-title">{article.title}</h3>
        <p className="card-excerpt">{article.excerpt}</p>
        <button className="card-button">Read Full Story</button>
      </div>
    </article>
  );
}
