import axios from "axios";

const api = axios.create({
  baseURL: 'https://unckzx6bba.execute-api.sa-east-1.amazonaws.com/dev/',
});

export default api;
