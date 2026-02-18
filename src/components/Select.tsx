"use client";

import * as React from "react";

import { ChevronDownIcon, CheckIcon } from "lucide-react";

function Select({ ...props }: React.ComponentProps<"div">) {
  return <div className="relative" {...props} />;
}

function SelectGroup({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={`scroll-my-1 p-1 ${className}`} {...props} />;
}

function SelectValue({ ...props }: React.ComponentProps<"span">) {
  return <span {...props} />;
}

function SelectTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      className={`border-input  focus-visible:border-ring focus-visible:ring-ring/50  gap-1.5 rounded-lg border bg-transparent py-2 pr-2 pl-2.5 text-sm transition-colors select-none focus-visible:ring-3  d flex items-center justify-between whitespace-nowrap outline-none ${className}`}
      {...props}
    >
      {children}
      <span>
        <ChevronDownIcon className="text-muted-foreground size-4 pointer-events-none" />
      </span>
    </button>
  );
}

function SelectContent({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div>
      <div
        className={`bg-white text-popover-foreground  ring-foreground/10 min-w-36 rounded-lg shadow-md  duration-100 absolute top-10  z-50 overflow-y-auto 
          border-input gap-1.5 rounded-lg border py-2 pr-2 pl-2.5 text-sm transition-colors select-none d flex w-fit items-center justify-between whitespace-nowrap outline-none
         ${className}`}
        {...props}
      >
        <ul>{children}</ul>
      </div>
    </div>
  );
}

function SelectLabel({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      className={`text-muted-foreground px-1.5 py-1 text-xs ${className}`}
      {...props}
    />
  );
}

const SelectItem = ({
  className,
  children,
  isSelect,
}: {
  className?: string;
  children: React.ReactNode;
  isSelect: boolean;
}) => {
  return (
    <li
      className={`gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm  relative flex w-full cursor-default items-center outline-hidden select-none bg-popover z-10 flex cursor-default items-center justify-center py-1 hover:bg-muted
        ${className}`}
    >
      <span className="pointer-events-none absolute right-2 flex size-1 items-center justify-center">
        <span>
          {isSelect && <CheckIcon className="pointer-events-none h-4 w-4" />}
        </span>
      </span>
      <span>{children}</span>
    </li>
  );
};

function SelectSeparator({ className, ...props }: React.ComponentProps<"hr">) {
  return (
    <hr
      className={`bg-border -mx-1 my-1 h-px pointer-events-none ${className}`}
      {...props}
    />
  );
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
