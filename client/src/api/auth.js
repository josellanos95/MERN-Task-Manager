import axios from "./axios";

export const registerRequest = async (user) => {
  try {
    const response = await axios.post('https://mern-task-project.vercel.app/api/register', user);
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
    const response = await axios.post('https://mern-task-project.vercel.app/api/login', user);
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
    const response = await axios.get('https://mern-task-project.vercel.app/api/verify');
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