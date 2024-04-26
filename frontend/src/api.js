import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

const apiUrl = "https://a70c35fb-90e8-4d6a-8246-c125949efd16-dev.e1-eu-north-azure.choreoapis.dev/djangoreacttutorial/backend/rest-api-be2/v1.0"

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;


