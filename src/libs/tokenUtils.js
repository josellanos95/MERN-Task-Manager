import jwt from "jsonwebtoken";

/**
 * Verifica si el token ha expirado.
 * @param {string} token - El token JWT.
 * @returns {boolean} - Retorna true si el token ha expirado, de lo contrario false.
 */
export const isTokenExpired = (token) => {
  if (!token) return true;

  const decodedToken = jwt.decode(token);
  if (!decodedToken || !decodedToken.exp) return true;

  const currentTime = Math.floor(Date.now() / 1000);
  return decodedToken.exp < currentTime;
};