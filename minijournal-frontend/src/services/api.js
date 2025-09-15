import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5050/api',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = (data) => api.post('/auth/login', data);
export const register = (data) => api.post('/auth/register', data);
export const getEntries = () => api.get('/entries');
export const createEntry = (data) => api.post('/entries', data);
export const updateEntry = (id, data) => api.patch(`/entries/${id}`, data);
export const deleteEntry = (id) => api.delete(`/entries/${id}`);