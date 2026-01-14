"use client";

import { User, UserRole } from "@/src/types/user";
import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  _id: string;
  name: string;
  username: string;
  email: string;
  role: UserRole;
}

interface AuthContextType {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  login: (params: { email: string; password: string }) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const updateUserFromToken = () => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        setCurrentUser(null);
        setLoading(false);
        return;
      }

      try {
        const decoded = jwtDecode<DecodedToken>(token);
        setCurrentUser({
          _id: decoded._id,
          name: decoded.name,
          username: decoded.username,
          email: decoded.email,
          role: decoded.role,
        });
      } catch (error) {
        console.error("Error decodificando token:", error);
        localStorage.removeItem("authToken");
        setCurrentUser(null);
      } finally {
        setLoading(false);
      }
    };

    updateUserFromToken();
  }, []);

  const logout = () => {
    localStorage.removeItem("authToken");
    setCurrentUser(null);
  };

  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message);

    localStorage.setItem("authToken", data.token);

    const decoded = jwtDecode<DecodedToken>(data.token);
    setCurrentUser({
      _id: decoded._id,
      name: decoded.name,
      username: decoded.username,
      email: decoded.email,
      role: decoded.role,
    });
  };

  const values = {
    currentUser,
    setCurrentUser,
    loading,
    setLoading,
    login,
    logout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de AuthProvider");
  }
  return context;
};
