import axios from "axios";

const LOCAlSTORAGE_TOKEN_KEY = "access_token";
export const setToken = (rawToken: string) => {
  const token = rawToken.split(" ")[1];
  localStorage.setItem(LOCAlSTORAGE_TOKEN_KEY, token);
};
export const getToken = () => {
  const token = localStorage.getItem(LOCAlSTORAGE_TOKEN_KEY);
  return token;
};

const BASE_URL = "";
const axiosClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getToken()}`,
  },
});
export default axiosClient;
