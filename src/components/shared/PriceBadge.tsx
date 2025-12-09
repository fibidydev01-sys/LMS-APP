// src/components/shared/PriceBadge.tsx

import { formatPrice, cn } from "@/src/lib/utils";

interface PriceBadgeProps {
  price: number;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function PriceBadge({
  price,
  className,
  size = "md",
}: PriceBadgeProps) {
  const isFree = price === 0;

  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  return (
    <span
      className={cn(
        "font-bold",
        isFree ? "text-green-600" : "text-foreground",
        sizeClasses[size],
        className
      )}
    >
      {formatPrice(price)}
    </span>
  );
}