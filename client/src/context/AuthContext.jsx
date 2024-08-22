/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest, verifyTokenRequest } from "../api/auth";
import Cookies from "js-cookie";
import { set } from "mongoose";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  const signup = async (user) => {
    try {
      const response = await registerRequest(user);
      if (response.token) {
        Cookies.set("token", response.token);
        setUser(response);
        setIsAuthenticated(true);
        setErrors([]);
      } else {
        throw new Error("No se recibió un token en la respuesta del registro");
      }
    } catch (error) {
      console.error("Error durante el registro:", error);
      setErrors(Array.isArray(error) ? error : [error.toString()]);
    }
  };

  const signin = async (user) => {
    try {
      const response = await loginRequest(user);
      if (response.token) {
        Cookies.set("token", response.token);
        setUser(response);
        setIsAuthenticated(true);
        setErrors([]);
      } else {
        throw new Error("No se recibió un token en la respuesta");
      }
    } catch (error) {
      console.error("Error durante el inicio de sesión:", error);
      setErrors(Array.isArray(error) ? error : [error.toString()]);
    }
  };

  const signout = () => {
    Cookies.remove("token");
    setUser(null);
    setIsAuthenticated(false);
  }

  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get();
    
      if (!cookies.token) {
        setIsAuthenticated(false);
        setLoading(false);
        return setUser(null);
      }
    
      try {
        const res = await verifyTokenRequest();
        if (!res) {
          setIsAuthenticated(false);
          setLoading(false);
          return;
        }
        setIsAuthenticated(true);
        setUser(res);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
      }
    }
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signup,
        signin,
        signout,
        loading,
        user,
        isAuthenticated,
        errors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
