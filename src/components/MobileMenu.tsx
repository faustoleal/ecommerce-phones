import React, { useState } from "react";
import Button from "./Button";
import { Menu, X } from "lucide-react";

const MobileMenu = ({ className, children }: React.ComponentProps<"div">) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className={`relative z-50 ${className}`}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
            React.cloneElement(child as React.ReactElement<any>, {
              open,
              setOpen,
            })
          : child,
      )}
    </div>
  );
};

const MobileMenuTrigger = ({
  className,
  setOpen,
}: React.ComponentProps<"div"> & {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={`px-3 py-2  rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    >
      <Button className="h-9 w-9">
        <Menu className="h-5 w-5" onClick={() => setOpen?.(true)} />
      </Button>
    </div>
  );
};

const MobileMenuContent = ({
  className,
  open,
  setOpen,
  children,
}: {
  className?: string;
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  if (!open) return null;
  if (open)
    return (
      <div
        className={`fixed inset-y-0 right-0 h-screen w-80 bg-white shadow-lg border-l border-gray-200 flex flex-col focus:outline-none ${className}`}
      >
        <MobileMenuHeader className="h-16" setOpen={setOpen} />
        {children}
      </div>
    );
};

const MobileMenuHeader = ({
  className,
  setOpen,
}: {
  className?: string;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={`px-4 py-3 border-b border-gray-200 flex items-center justify-between ${className}`}
    >
      <MobileMenuTitle>Menú</MobileMenuTitle>
      <X className="h-5 w-5" onClick={() => setOpen?.(false)} />
    </div>
  );
};

const MobileMenuTitle = ({
  className,
  ...props
}: React.ComponentProps<"h1">) => {
  return (
    <h1
      className={`text-lg font-semibold text-gray-900  ${className}`}
      {...props}
    />
  );
};

export {
  MobileMenu,
  MobileMenuTrigger,
  MobileMenuContent,
  MobileMenuHeader,
  MobileMenuTitle,
};
