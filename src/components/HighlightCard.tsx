import type { ReactNode } from "react";

interface HighlightCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function HighlightCard({ icon, title, description }: HighlightCardProps) {
  return (
    <div className="relative pt-8">
      {/* Floating icon overlapping the top edge */}
      <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-background shadow-[var(--shadow-icon)]">
          {icon}
        </div>
      </div>
      <div className="h-full rounded-3xl border border-border/40 bg-card/90 px-6 pb-8 pt-12 text-center shadow-[var(--shadow-card-lg)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-1">
        <h3 className="text-lg font-semibold tracking-tight text-foreground">{title}</h3>
        <p className="mx-auto mt-3 max-w-[18rem] text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}
