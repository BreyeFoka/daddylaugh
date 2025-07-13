// import axios from "axios";






import React, { useState, useEffect } from 'react';
import api from './api';
import './App.css';

const AnimatedBackground = () => (
  <div className="animated-bg">
    {[...Array(12)].map((_, i) => (
      <span key={i} className={`bg-shape shape-${i+1}`}></span>
    ))}
  </div>
);

const App = () => {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(true);
  const [animate, setAnimate] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const fetchJoke = async () => {
      setLoading(true);
      try {
        const res = await api.get('/');
        setData(res.data.joke);
        setAnimate(true);
      } catch (err) {
        setData('Oops! Could not fetch a joke.');
      }
      setLoading(false);
      setTimeout(() => setFooterVisible(true), 800);
    };
    fetchJoke();
  }, []);

  const handleClick = async () => {
    setAnimate(false);
    setLoading(true);
    setTimeout(async () => {
      try {
        const res = await api.get('/');
        setData(res.data.joke);
        setAnimate(true);
      } catch (err) {
        setData('Oops! Could not fetch a joke.');
      }
      setLoading(false);
    }, 300);
  };

  return (
    <div className="container">
      <AnimatedBackground />
      <div className="glass-card animated-card card-hover">
        <div className="emoji" title="Dad Jokes">😂 <span className="icon">🎤</span></div>
        <h1 className="title">DaddyLaugh <span className="icon">✨</span></h1>
        <p className="subtitle">The best dad jokes, delivered with style!</p>
        <div className={`joke-text ${animate ? 'fade-in' : ''}`}>{loading ? <span className="loader"></span> : <span className="joke-animated">{data}</span>}</div>
        <button className="animated-btn" onClick={handleClick} disabled={loading}>
          <span role="img" aria-label="refresh">🔄</span> Get Another Joke
        </button>
      </div>
      <footer className={`footer ${footerVisible ? 'footer-entrance' : ''}`}>Made for dads everywhere</footer>
    </div>
  );
};

export default App;