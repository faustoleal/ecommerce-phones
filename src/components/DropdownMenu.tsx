import React from "react";

const DropdownMenu = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      className={`relative inline-block text-left ${className}`}
      {...props}
    />
  );
};

const DropdownMenuTrigger = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      className={`rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  );
};

const DropdownMenuContent = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black/5 focus:outline-none z-50 ${className}`}
      {...props}
    />
  );
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
