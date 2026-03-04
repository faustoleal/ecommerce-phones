import React from "react";

export type ToastVariant = "success" | "error";

interface ToastProps {
  variant: ToastVariant;
  title: string;
  description: string;
}

const Toaster: React.FC<ToastProps> = ({ variant, title, description }) => {
  const variantStyles: Record<ToastVariant, string> = {
    success: "border bg-background text-foreground",
    error: " border border-destructive bg-destructive-foreground text-white",
  };

  return (
    <div
      className={`group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all ${variantStyles[variant]}`}
    >
      <h2 className="text-sm font-semibold">{title}</h2>
      <p className="text-sm opacity-90">{description}</p>
    </div>
  );
};

export default Toaster;
