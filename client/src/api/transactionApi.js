import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((config) => {
  const token = typeof window !== "undefined" ? localStorage.getItem("pantrypro-token") : null;
  if (token) config.headers = { ...(config.headers || {}), Authorization: `Bearer ${token}` };
  return config;
});

/* GET */
export const fetchTransactions = () => API.get("/api/transactions");

/* CREATE */
export const createTransaction = (data) => API.post("/api/transactions", data);

/* DELETE */
export const removeTransaction = (id) => API.delete(`/api/transactions/${id}`);