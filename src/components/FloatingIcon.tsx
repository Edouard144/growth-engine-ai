import type { ReactNode } from "react";

interface FloatingIconProps {
  children: ReactNode;
  className?: string;
}

export function FloatingIcon({ children, className = "" }: FloatingIconProps) {
  return (
    <div
      className={
        "flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-pill)] ring-4 ring-background " +
        className
      }
    >
      {children}
    </div>
  );
}