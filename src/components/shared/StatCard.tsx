// src/components/shared/StatCard.tsx

import { cn } from "@/src/lib/utils";

interface StatCardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  className?: string;
}

export default function StatCard({
  icon,
  value,
  label,
  className,
}: StatCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center rounded-xl border bg-card p-6 text-center",
        className
      )}
    >
      <div className="mb-2 text-primary">{icon}</div>
      <div className="text-3xl font-bold">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}