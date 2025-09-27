/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { axiosClient } from "../api/axios";
import { useLocation } from "react-router-dom";

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [authenticated ,setAuthenticated] = useState(false)
  const[loading,setLoading]=useState(true)
  const [loadingAuth, setLoadingAuth] = useState(true);
  
 

  // Fetch the authenticated user
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axiosClient.get("/api/user");
        console.log("Fetched user:", data);
        setUser(data);
        setAuthenticated(true)
      } catch (err) {
        console.log("Fetch user error:", err.response?.data || err.message);
        setUser(null);
        setAuthenticated(false)
      } finally {
        setLoading(false)
        setLoadingAuth(false)
      }
    };
    fetchUser();
  }, []);

  const login = async (email, password) => {
    try {
      // Fetch CSRF token
      // await axiosClient.get("/sanctum/csrf-cookie");
      // console.log("CSRF token fetched for login");

      // login
      await axiosClient.post("/login", { email, password });
      console.log("Login successful");

      // Fetch user data
      const { data } = await axiosClient.get("/api/user");
      console.log("User after login:", data);
      setUser(data);
      setAuthenticated(true)
      
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      setAuthenticated(false)
      throw err;
    }
  };

  const logout = async () => {
    try {
      await axiosClient.post("/logout");
      console.log("Logout successful");
      setUser(null);
    } catch (err) {
      setAuthenticated(false);
      console.error("Logout error:", err.response?.data || err.message);
      throw err;
    }
  };

  


  return (
    <AuthContext.Provider
      value={{
        user,
        authenticated,
        setUser,
        login,
        logout,
        loading,
        loadingAuth
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);