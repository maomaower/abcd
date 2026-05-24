import { useState, useEffect } from 'react';
import NewsCard from './components/NewsCard';
import TrendingSidebar from './components/TrendingSidebar';
import './App.css';

function App() {
  const [news, setNews] = useState([]);
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [newsRes, trendsRes] = await Promise.all([
          fetch('http://localhost:8000/api/news'),
          fetch('http://localhost:8000/api/trends')
        ]);
        
        if (!newsRes.ok || !trendsRes.ok) {
          throw new Error('Failed to fetch data');
        }

        const newsData = await newsRes.json();
        const trendsData = await trendsRes.json();

        setNews(newsData.data);
        setTrends(trendsData.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">TechEdge News</div>
        <nav className="nav-links">
          <a href="#" className="nav-link active">Home</a>
          <a href="#" className="nav-link">AI</a>
          <a href="#" className="nav-link">Quantum</a>
          <a href="#" className="nav-link">Hardware</a>
        </nav>
      </header>

      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : error ? (
        <div className="error-message glass-panel">
          <h3>Error loading news</h3>
          <p>{error}</p>
          <button onClick={() => window.location.reload()} className="retry-btn">Retry</button>
        </div>
      ) : (
        <>
          <main className="main-content">
            <h2 className="section-title">Latest Updates</h2>
            <div className="news-grid">
              {news.map(article => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          </main>
          
          <TrendingSidebar trends={trends} />
        </>
      )}
    </div>
  );
}

export default App;
