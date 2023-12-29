import axios from "axios";
import Cookies from "js-cookie";

const baseURL = import.meta.env.VITE_BACKEND_URL;

const instanceAxios = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

instanceAxios.interceptors.request.use(
  function (config) {
    const token = Cookies.get("token"); // Obtener el token de la cookie
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }
);

export { instanceAxios };