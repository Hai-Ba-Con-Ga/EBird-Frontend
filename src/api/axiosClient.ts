import axios from "axios";
const getToken = () => {
  const token = localStorage.getItem("access_token")
    ? localStorage.getItem("access_token")
    : "";
  return token ? JSON.parse(token) : "";
};
const BASE_URL = "https://wyvernpserver.tech";
const axiosClient = axios.create({
  baseURL: BASE_URL,
  // withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${getToken().accessToken}`,
  },
});

export default axiosClient;
