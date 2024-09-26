
import axios from "axios";

const API_URL = "https://dummyjson.com/";

export const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

/* api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');  
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;  
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
); */