import axios from "axios";

const api = axios.create({
  baseURL: 'https://oi8uk2nee5.execute-api.sa-east-1.amazonaws.com/dev',
});

export default api;
