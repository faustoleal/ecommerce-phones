import React, { useState } from "react";

const DropdownMenu = ({ className, children }: React.ComponentProps<"div">) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`relative inline-block text-left ${className}`}>
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

const DropdownMenuTrigger = ({
  className,
  children,
  setOpen,
}: {
  className?: string;
  children: React.ReactNode;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={`rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      onClick={() => setOpen?.((prev) => !prev)}
    >
      {children}
    </div>
  );
};

const DropdownMenuContent = ({
  className,
  children,
  open,
}: {
  className?: string;
  children: React.ReactNode;
  open?: boolean;
}) => {
  if (!open) return null;
  if (open) {
    return (
      <div
        className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black/5 focus:outline-none z-50 ${className}`}
      >
        {children}
      </div>
    );
  }
};

const DropdownMenuItem = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      className={`"w-full text-left px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100 cursor-pointer focus:bg-gray-100 focus:outline-none ${className}`}
      {...props}
    />
  );
};

const DropdownMenuSeparator = ({ className }: React.ComponentProps<"hr">) => {
  return <hr className={`border-t my-1 border-gray-200 ${className}`} />;
};

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
};
