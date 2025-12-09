// src/components/shared/SectionHeader.tsx

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/src/lib/utils";

interface SectionHeaderProps {
  title: string;
  description?: string;
  href?: string;
  linkText?: string;
  className?: string;
}

export default function SectionHeader({
  title,
  description,
  href,
  linkText = "Lihat Semua",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between",
        className
      )}
    >
      <div>
        <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
        {description && (
          <p className="mt-2 text-muted-foreground">{description}</p>
        )}
      </div>

      {href && (
        <Link
          href={href}
          className="inline-flex items-center gap-2 font-medium text-primary hover:underline"
        >
          {linkText}
          <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}