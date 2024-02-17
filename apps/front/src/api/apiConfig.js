import axios from 'axios';
const HOST_URL = import.meta.env.VITE_HOST_URL;
const PORT = import.meta.env.VITE_PORT;

const instance = axios.create({
  withCredentials: false, // Unsafe
  baseURL: `http://${HOST_URL}:${PORT}/api/v1`
});

const errorHandler = (error) => {
  const statusCode = error.response?.status;

  if (statusCode && statusCode !== 401) {
    console.error(error);
  }

  return Promise.reject(error);
};

instance.interceptors.response.use(undefined, (error) => {
  return errorHandler(error);
});

export default instance;
