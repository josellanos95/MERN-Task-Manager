import axios from 'axios';
import Cookies from 'js-cookie';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, // Asegúrate de incluir las credenciales
});

instance.interceptors.request.use((config) => {
  const token = Cookies.get('token');
  console.log(token); // Verifica que el token no sea undefined
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`; // Asegúrate de que el token se envíe correctamente
  }
  return config;
});

export default instance;