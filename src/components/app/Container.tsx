import { cn } from "@/lib/utils";
import React from "react";

interface Props extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className, ...rest }: Props) => {
  return (
    <div
      {...rest}
      className={cn("container relative m-auto h-full w-full", className)}
    >
      {children}
    </div>
  );
};
