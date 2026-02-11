import React from "react";

const Modal = ({ className, children }: React.ComponentProps<"div">) => {
  return <div className={`${className}`}>{children}</div>;
};

const ModalContent = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      className={`bg-background  ring-foreground/10 grid max-w-[calc(100%-2rem)] gap-4 rounded-xl p-4 text-sm ring-1  sm:max-w-sm fixed top-1/2 left-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2 outline-none ${className}`}
      {...props}
    />
  );
};

const ModalHeader = ({ className, ...props }: React.ComponentProps<"div">) => {
  return <div className={`gap-2 flex flex-col ${className}`} {...props} />;
};

const ModalTitle = ({ className, ...props }: React.ComponentProps<"p">) => {
  return (
    <p
      className={`text-base leading-none font-medium ${className}`}
      {...props}
    />
  );
};

const ModalDescription = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="dialog-description"
      className={`text-muted-foreground *:[a]:hover:text-foreground text-sm *:[a]:underline *:[a]:underline-offset-3
        ${className}`}
      {...props}
    />
  );
};

export { Modal, ModalContent, ModalHeader, ModalTitle, ModalDescription };
