
import { createContext, useContext, useEffect, useState } from "react";
import {
  loginUser,
  logout,
  getCurrentUser,
} from "../services/api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    checkAuth();
  }, []);

  async function checkAuth() {
    try {
      const data = await getCurrentUser();

      if (data?.success) {
        setUser(data.user);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error(error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

 

  async function login(credentials) {
    const data = await loginUser(credentials);

    if (data.success) {
      setUser(data.user);
    }

    return data;
  }



  async function signOut() {
    await logout();

    setUser(null);
  }

 

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout: signOut,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}