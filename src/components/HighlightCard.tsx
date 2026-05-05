import type { ReactNode } from "react";
import { FloatingIcon } from "./FloatingIcon";

interface HighlightCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function HighlightCard({ icon, title, description }: HighlightCardProps) {
  return (
    <div className="relative pt-7">
      {/* Floating icon overlapping the top edge */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2">
        <FloatingIcon>{icon}</FloatingIcon>
      </div>
      <div className="rounded-2xl border border-border/60 bg-card/70 px-6 pb-7 pt-10 text-center shadow-[var(--shadow-card)] backdrop-blur-sm">
        <h3 className="text-base font-semibold text-foreground">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}