// src/components/lessons/LessonHeader.tsx

import { Clock, FileText, Code } from "lucide-react";
import { Badge } from "@/src/components/ui/badge";
import type { LessonType } from "@/src/types";

interface LessonHeaderProps {
  title: string;
  lessonType: LessonType;
  duration?: string;
  moduleName?: string;
}

export default function LessonHeader({
  title,
  lessonType,
  duration,
  moduleName,
}: LessonHeaderProps) {
  return (
    <div>
      {moduleName && (
        <p className="mb-2 text-muted-foreground">{moduleName}</p>
      )}

      <h1 className="mb-4 text-2xl font-bold md:text-3xl">{title}</h1>

      <div className="flex items-center gap-3">
        <Badge
          variant={lessonType === "tutorial" ? "default" : "secondary"}
          className="gap-1"
        >
          {lessonType === "tutorial" ? (
            <>
              <FileText className="h-3 w-3" /> Tutorial
            </>
          ) : (
            <>
              <Code className="h-3 w-3" /> Code Snippet
            </>
          )}
        </Badge>

        {duration && (
          <span className="flex items-center gap-1 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" /> {duration}
          </span>
        )}
      </div>
    </div>
  );
}