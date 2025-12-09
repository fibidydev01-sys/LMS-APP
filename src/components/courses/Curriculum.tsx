// src/components/courses/Curriculum.tsx

import Link from "next/link";
import { PlayCircle, Clock, FileText, Code } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";
import { Badge } from "@/src/components/ui/badge";
import type { Module } from "@/src/types";

interface CurriculumProps {
  modules: Module[];
}

export default function Curriculum({ modules }: CurriculumProps) {
  if (!modules || modules.length === 0) {
    return <p className="text-muted-foreground">Curriculum belum tersedia.</p>;
  }

  return (
    <Accordion type="multiple" className="w-full">
      {modules.map((module) => (
        <AccordionItem key={module._key} value={module._key}>
          <AccordionTrigger className="hover:no-underline">
            <div className="flex items-center gap-3 text-left">
              <Badge variant="outline" className="shrink-0">
                {module.moduleNumber}
              </Badge>
              <div>
                <div className="font-semibold">{module.title}</div>
                {module.lessons && (
                  <div className="text-sm text-muted-foreground">
                    {module.lessons.length} lessons
                  </div>
                )}
              </div>
            </div>
          </AccordionTrigger>

          <AccordionContent>
            {module.description && (
              <p className="mb-4 pl-10 text-muted-foreground">
                {module.description}
              </p>
            )}

            <div className="space-y-2 pl-10">
              {module.lessons?.map((lesson, index) => {
                if (!lesson) return null;

                return (
                  <Link
                    key={lesson._id}
                    href={`/lessons/${lesson.slug.current}`}
                    className="group flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-muted"
                  >
                    <span className="w-6 text-sm text-muted-foreground">
                      {index + 1}.
                    </span>

                    <div className="flex-1">
                      <div className="font-medium transition-colors group-hover:text-primary">
                        {lesson.title}
                      </div>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        {lesson.lessonType === "tutorial" ? (
                          <span className="flex items-center gap-1">
                            <FileText className="h-3 w-3" /> Tutorial
                          </span>
                        ) : (
                          <span className="flex items-center gap-1">
                            <Code className="h-3 w-3" /> Code Snippet
                          </span>
                        )}
                        {lesson.duration && (
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" /> {lesson.duration}
                          </span>
                        )}
                      </div>
                    </div>

                    <PlayCircle className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                  </Link>
                );
              })}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}