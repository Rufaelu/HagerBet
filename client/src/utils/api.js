import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Reservations API
export const reservationsAPI = {
  create: (data) => api.post('/reservations', data),
  getAll: () => api.get('/reservations'),
  getById: (id) => api.get(`/reservations/${id}`),
  update: (id, data) => api.put(`/reservations/${id}`, data),
  delete: (id) => api.delete(`/reservations/${id}`),
};

// Reviews API
export const reviewsAPI = {
  create: (data) => api.post('/reviews', data),
  getAll: () => api.get('/reviews'),
  getById: (id) => api.get(`/reviews/${id}`),
  update: (id, data) => api.put(`/reviews/${id}`, data),
  delete: (id) => api.delete(`/reviews/${id}`),
};

export default api;
