import axios from "axios";




const BASE_URL = "https://localhost:7137";
const axiosClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});


export default axiosClient;
