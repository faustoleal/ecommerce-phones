import React from "react";

const Label = ({ ...props }: React.ComponentProps<"label">) => {
  return (
    <label
      className="flex items-center gap-2 text-md pl-1 font-medium"
      {...props}
    />
  );
};

export default Label;
