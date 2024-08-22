import axios from 'axios';
import { process } from 'node';

const instance = axios.create({
  baseURL: process.env.VITE_API_URL,
  withCredentials: true, // Asegúrate de incluir las credenciales
});

export default instance;