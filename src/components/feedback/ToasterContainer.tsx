"use client";

import { useToast } from "@/src/context/ToastContext";
import Toaster from "./Toaster";

const ToasterContainer = () => {
  const { toasts } = useToast();

  return (
    <div className="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]">
      {toasts.map((t, i) => (
        <Toaster
          key={i}
          variant={t.variant}
          title={t.title}
          description={t.description}
        />
      ))}
    </div>
  );
};

export default ToasterContainer;
