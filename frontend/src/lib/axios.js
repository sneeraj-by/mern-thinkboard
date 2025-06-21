import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5001/api",
});

export default apiClient;
