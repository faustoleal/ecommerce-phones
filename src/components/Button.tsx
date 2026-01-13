import React from "react";

const Button = ({ className, ...props }: React.ComponentProps<"button">) => {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all  outline-none ${className}`}
      {...props}
    />
  );
};

export default Button;
