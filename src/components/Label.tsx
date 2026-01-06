import React from "react";

const Label = ({ className, ...props }: React.ComponentProps<"label">) => {
  return (
    <label
      className={`flex items-center gap-2 text-sm pl-1 ${className}`}
      {...props}
    />
  );
};

export default Label;
