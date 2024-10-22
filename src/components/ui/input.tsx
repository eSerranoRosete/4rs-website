import * as React from "react";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const inputVariants = cva(
  "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        underline:
          "border-0 border-b-2 border-input rounded-none px-0 focus-visible:ring-0 focus-visible:border-b-2 focus-visible:border-brand",
      },
      textSize: {
        lg: "text-lg",
      },
    },
  }
);

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "underline";
  textSize?: "lg";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, textSize, ...props }: InputProps, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, className, textSize }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
