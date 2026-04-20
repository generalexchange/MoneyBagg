import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold font-sans transition-colors focus:outline-none focus:ring-2 focus:ring-signal-500/60 focus:ring-offset-2 focus:ring-offset-ink",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-signal-500/15 text-signal-glow border-signal-500/30",
        secondary:
          "border-transparent bg-ink-raised text-bone-muted",
        outline: "text-bone border-ink-border",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
