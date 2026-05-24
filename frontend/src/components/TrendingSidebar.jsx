import React from 'react';
import './TrendingSidebar.css';

export default function TrendingSidebar({ trends }) {
  return (
    <aside className="trending-sidebar glass-panel">
      <h2 className="sidebar-title">
        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
        Trending Topics
      </h2>
      <ul className="trends-list">
        {trends.map((trend) => (
          <li key={trend.rank} className="trend-item">
            <span className="trend-rank">#{trend.rank}</span>
            <span className="trend-topic">{trend.topic}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
