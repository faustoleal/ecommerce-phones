"use client";
import { User } from "../types/user";
import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import { decodedToken, loginUser, logoutUser } from "./authFunction";
import {
  addItemToCart,
  clearCartItems,
  removeItemFromCart,
} from "./cartFunction";

interface UserContextType {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  login: (params: { email: string; password: string }) => Promise<void>;
  isAdmin: () => void;
  logout: () => void;
  addItem: (productoId: string, cantidad?: number) => void;
  removeItem: (productoId: string) => void;
  clearCart: () => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const UserProvider = ({ children }: { children: ReactNode }) => {
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

      const user = decodedToken(token);
      setCurrentUser(user);
      setLoading(false);
    };

    updateUserFromToken();
  }, []);

  const logout = () => {
    logoutUser();
    setCurrentUser(null);
  };

  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const token = await loginUser(email, password);
    const user = decodedToken(token);
    setCurrentUser(user);
  };

  const isAdmin = (): boolean => {
    if (!currentUser) return false;

    return currentUser.role === "admin";
  };

  const addItem = (productoId: string, cantidad: number = 1) => {
    addItemToCart(currentUser, (u) => setCurrentUser(u), productoId, cantidad);
  };

  const removeItem = (productoId: string) => {
    removeItemFromCart(currentUser, (u) => setCurrentUser(u), productoId);
  };

  const clearCart = () => {
    clearCartItems(currentUser, (u) => setCurrentUser(u));
  };

  const values = {
    currentUser,
    setCurrentUser,
    loading,
    setLoading,
    login,
    isAdmin,
    logout,
    addItem,
    removeItem,
    clearCart,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export const useApp = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useApp debe usarse dentro de UserProvider");
  }
  return context;
};
