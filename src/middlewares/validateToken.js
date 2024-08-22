import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config/config.js";
import { isTokenExpired } from "../libs/tokenUtils.js";

export const authRequired = (req, res, next) => {
  const token = req.cookies.token || req.headers["authorization"]?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  if (isTokenExpired(token)) {
    return res.status(401).json({ message: "Token has expired" });
  }

  try {
    const decoded = jwt.verify(token, TOKEN_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Token is not valid" });
  }
};