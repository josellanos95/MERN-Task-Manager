import jwt from "jsonwebtoken";

export const authRequired = (req, res, next) => {
  const token = req.cookies.token || req.headers["authorization"];
  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Token is not valid" });
  }
};