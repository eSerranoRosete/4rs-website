import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

export const Container = ({ children, className }: Props) => {
  return (
    <div className={cn("w-full h-full container m-auto relative", className)}>
      {children}
    </div>
  );
};
