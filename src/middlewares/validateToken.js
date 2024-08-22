import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config/config.js"; // Asegúrate de importar TOKEN_SECRET

export const authRequired = (req, res, next) => {
  const token = req.cookies.token || req.headers["authorization"];
  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }
  try {
    const decoded = jwt.verify(token, TOKEN_SECRET);
    req.user = decoded; // Cambia esto de decoded.user a decoded
    next();
  } catch (error) {
    res.status(401).json({ message: "Token is not valid" });
  }
};