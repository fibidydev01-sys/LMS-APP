// src/components/lessons/NoteBox.tsx

import { Info, AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import { cn } from "@/src/lib/utils";

type NoteVariant = "info" | "warning" | "success" | "error";

interface NoteBoxProps {
  children: React.ReactNode;
  variant?: NoteVariant;
  className?: string;
}

const variantConfig = {
  info: {
    icon: Info,
    bg: "bg-blue-50 border-blue-200",
    text: "text-blue-800",
    iconColor: "text-blue-500",
  },
  warning: {
    icon: AlertTriangle,
    bg: "bg-yellow-50 border-yellow-200",
    text: "text-yellow-800",
    iconColor: "text-yellow-500",
  },
  success: {
    icon: CheckCircle,
    bg: "bg-green-50 border-green-200",
    text: "text-green-800",
    iconColor: "text-green-500",
  },
  error: {
    icon: XCircle,
    bg: "bg-red-50 border-red-200",
    text: "text-red-800",
    iconColor: "text-red-500",
  },
};

export default function NoteBox({
  children,
  variant = "info",
  className,
}: NoteBoxProps) {
  const config = variantConfig[variant];
  const Icon = config.icon;

  return (
    <div
      className={cn(
        "flex gap-3 rounded-lg border p-4",
        config.bg,
        className
      )}
    >
      <Icon className={cn("mt-0.5 h-5 w-5 shrink-0", config.iconColor)} />
      <div className={cn("text-sm", config.text)}>{children}</div>
    </div>
  );
}