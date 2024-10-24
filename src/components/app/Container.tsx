import { cn } from "@/lib/utils";
import React from "react";

interface Props extends React.HTMLProps<HTMLDivElement> {}

export const Container = ({ children, className, ...rest }: Props) => {
  return (
    <div
      {...rest}
      className={cn("w-full h-full container m-auto relative", className)}
    >
      {children}
    </div>
  );
};
