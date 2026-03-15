import axios from 'axios';

const API_URL = process.env.NODE_ENV === 'production'
    ? 'https://your-render-backend.onrender.com/api'
    : '/api';

const api = axios.create({
    baseURL: API_URL
});

export const getIdeas = () => api.get('/ideas');
export const createIdea = (ideaData) => api.post('/ideas', ideaData);
export const upvoteIdea = (id) => api.put(`/ideas/${id}/upvote`);
export const deleteIdea = (id) => api.delete(`/ideas/${id}`);

export default api;

