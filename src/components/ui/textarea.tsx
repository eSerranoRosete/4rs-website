import * as React from "react";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: "underline";
  textSize?: "lg";
}

const textareaVariants = cva(
  "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
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

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, textSize, ...props }, ref) => {
    return (
      <textarea
        className={cn(textareaVariants({ className, variant, textSize }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
