"use client";
import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";

export type ToastVariant = "success" | "error";

export interface ToastProps {
  id: string;
  title: string;
  description: string;
  variant: ToastVariant;
}

interface ToastContextType {
  toasts: ToastProps[];
  toast: (options: Omit<ToastProps, "id">) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const toast = useCallback((options: Omit<ToastProps, "id">) => {
    const id = crypto.randomUUID();
    const newToast: ToastProps = { ...options, id };
    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, toast }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast debe usarse dentro de ToastProvider");
  return ctx;
};
