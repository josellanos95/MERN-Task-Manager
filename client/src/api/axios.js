import axios from 'axios';
import Cookies from 'js-cookie';
import { isTokenExpired } from '../../../../../c:/Users/Jose/Desktop/Mern-Crud-Auth/src/libs/tokenUtils.js';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, // Asegúrate de incluir las credenciales
});

instance.interceptors.request.use((config) => {
  const token = Cookies.get('token');
  console.log(token); // Verifica que el token no sea undefined
  if (token && !isTokenExpired(token)) {
    config.headers['Authorization'] = `Bearer ${token}`; // Asegúrate de que el token se envíe correctamente
  } else {
    console.log("Token has expired or is not available");
  }
  return config;
});

export default instance;