import { useCallback, useState } from "react";

export type ToastVariant = "success" | "error";

export interface ToastProps {
  id?: number;
  title: string;
  description: string;
  variant: ToastVariant;
}
export function useToast() {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const toast = useCallback(
    (options: ToastProps) => {
      const id = toasts.length + 1;
      const newToast = {
        ...options,
        id,
        variant: options.variant ?? "success",
      };

      setToasts((prev) => [...prev, newToast]);

      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 3000);
    },
    [toasts],
  );

  return { toast, toasts };
}
