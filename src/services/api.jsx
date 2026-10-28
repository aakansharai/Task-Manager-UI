import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

api.interceptors.request.use((configs) => {
  const token = localStorage.getItem("token");

  if (token) {
    configs.headers.Authorization = `Bearer ${token}`;
  }

  return configs;
});

export default api;
