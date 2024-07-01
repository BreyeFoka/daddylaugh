import axios from 'axios';

const api = axios.create({
  baseURL: 'https://icanhazdadjoke.com',
  headers: {
    'Accept': 'application/json', // Accept JSON format
  },
});

export default api;