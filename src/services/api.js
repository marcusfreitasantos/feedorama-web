import axios from "axios";

const api = axios.create({
  baseURL: 'https://o0b4nvc16e.execute-api.sa-east-1.amazonaws.com/dev',
});

export default api;
