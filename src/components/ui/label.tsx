import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  {
    variants: {
      tone: {
        default: "text-slate-800 dark:text-slate-200",
        muted: "text-slate-500 dark:text-slate-400",
        accent: "text-indigo-600 dark:text-indigo-400",
      },
      required: {
        true: "after:ml-0.5 after:text-red-500 after:content-['*']",
        false: "",
      },
    },
    defaultVariants: {
      tone: "default",
      required: false,
    },
  }
);

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelVariants> {
  srOnly?: boolean;
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, tone, required, srOnly, children, htmlFor, ...props }, ref) => {
    return (
      <label
        ref={ref}
        htmlFor={htmlFor}
        className={cn(
          labelVariants({ tone, required }),
          srOnly && "sr-only",
          className
        )}
        {...props}
      >
        {children}
      </label>
    );
  }
);
Label.displayName = "Label";

export { Label, labelVariants };
