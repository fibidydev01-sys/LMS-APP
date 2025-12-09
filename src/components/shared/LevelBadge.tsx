// src/components/shared/LevelBadge.tsx

import { Badge } from "@/src/components/ui/badge";
import { cn, getLevelColor, getLevelLabel } from "@/src/lib/utils";

interface LevelBadgeProps {
  level: string;
  className?: string;
}

export default function LevelBadge({ level, className }: LevelBadgeProps) {
  return (
    <Badge className={cn(getLevelColor(level), className)}>
      {getLevelLabel(level)}
    </Badge>
  );
}