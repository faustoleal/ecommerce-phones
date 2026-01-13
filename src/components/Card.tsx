import React from "react";

const Card = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      className={`bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm ${className}`}
      {...props}
    />
  );
};

const CardHeader = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      className={`grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 ${className}`}
      {...props}
    />
  );
};

const CardTitle = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div className={`leading-none font-semibold ${className}`} {...props} />
  );
};

const CardDescription = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div className={`text-muted-foreground text-sm ${className}`} {...props} />
  );
};

const CardContent = ({ className, ...props }: React.ComponentProps<"div">) => {
  return <div className={`px-6 ${className}`} {...props} />;
};

export { Card, CardHeader, CardTitle, CardDescription, CardContent };
