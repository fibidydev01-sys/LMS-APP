// src/components/lessons/LessonNav.tsx

import Link from "next/link";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import type { LessonNav as LessonNavType, SanitySlug } from "@/src/types";

interface LessonNavProps {
  prevLesson?: LessonNavType | null;
  nextLesson?: LessonNavType | null;
  courseSlug?: SanitySlug;
}

export default function LessonNav({
  prevLesson,
  nextLesson,
  courseSlug,
}: LessonNavProps) {
  return (
    <div className="mt-8 flex items-center justify-between border-t pt-8">
      <div>
        {prevLesson ? (
          <Button asChild variant="outline">
            <Link href={`/lessons/${prevLesson.slug.current}`}>
              <ChevronLeft className="mr-1 h-4 w-4" />
              <span className="hidden sm:inline">{prevLesson.title}</span>
              <span className="sm:hidden">Previous</span>
            </Link>
          </Button>
        ) : (
          <div />
        )}
      </div>

      <div>
        {courseSlug && (
          <Button asChild variant="ghost">
            <Link href={`/courses/${courseSlug.current}`}>
              <Home className="mr-1 h-4 w-4" /> Course
            </Link>
          </Button>
        )}
      </div>

      <div>
        {nextLesson ? (
          <Button asChild>
            <Link href={`/lessons/${nextLesson.slug.current}`}>
              <span className="hidden sm:inline">{nextLesson.title}</span>
              <span className="sm:hidden">Next</span>
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        ) : (
          <Button disabled>🎉 Selesai!</Button>
        )}
      </div>
    </div>
  );
}