import React, { useState, useEffect } from 'react';
// import axios from "axios";
import api from './api';
import './App.css';

const App = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const res = await api.get('/');
        console.log(res.data.joke);
        setData(res.data.joke);
      } catch (err) {
        console.log(err);
      }
    };

    fetchJoke();
  }, []);

  const handleClick = async () => {
    try {
      const res = await api.get('/');
      console.log(res.data.joke);
      setData(res.data.joke);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="container">
        <div className="glass-card">
          <h1>Dad Joke</h1>
          <h2>{data}</h2>
          <button onClick={handleClick}>Get Another Joke</button>
        </div>
      </div>
    </>
  );
};

export default App;