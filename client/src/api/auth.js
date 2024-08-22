import axios from "./axios";
import Cookies from 'js-cookie';

export const registerRequest = async (user) => {
  try {
    const response = await axios.post('/register', user);
    // Guardar el token en las cookies
    Cookies.set('token', response.data.token);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      if (error.response.data.errors) {
        throw error.response.data.errors;
      } else {
        throw [error.response.data.message || "Ha ocurrido un error inesperado"];
      }
    } else {
      throw ["Ha ocurrido un error inesperado"];
    }
  }
};

export const loginRequest = async (user) => {
  try {
    const response = await axios.post('/login', user);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      if (error.response.data.errors) {
        throw error.response.data.errors;
      } else {
        throw [error.response.data.message || "Ha ocurrido un error inesperado"];
      }
    } else {
      throw ["Ha ocurrido un error inesperado"];
    }
  }
}

export const verifyTokenRequest = async () => {
  try {
    const response = await axios.get('/verify');
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      if (error.response.data.errors) {
        throw error.response.data.errors;
      } else {
        throw [error.response.data.message || "Ha ocurrido un error inesperado"];
      }
    } else {
      throw ["Ha ocurrido un error inesperado"];
    }
  }
}