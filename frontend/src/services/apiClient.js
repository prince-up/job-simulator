import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Auth APIs
export const register = (userData) => apiClient.post('/auth/register', userData);
export const login = (credentials) => apiClient.post('/auth/login', credentials);
export const linkedInAuth = () => apiClient.get('/auth/linkedin');

// Jobs APIs
export const getAllJobs = () => apiClient.get('/jobs');
export const getJobsByRole = (role) => apiClient.get(`/jobs?role=${role}`);
export const getRecommendedJobs = () => apiClient.get('/jobs/recommended');

// Applications APIs
export const submitApplication = (applicationData) => apiClient.post('/applications', applicationData);
export const getUserApplications = () => apiClient.get('/applications');

export default apiClient;
