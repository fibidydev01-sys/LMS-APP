// src/components/lessons/LessonContent.tsx

import Image from "next/image";
import CodeBlock from "./CodeBlock";
import NoteBox from "./NoteBox";
import Explanation from "./Explanation";
import Challenge from "./Challenge";
import { urlForImage } from "@/src/lib/sanity/image";
import type { Lesson } from "@/src/types";

interface LessonContentProps {
  lesson: Lesson;
}

export default function LessonContent({ lesson }: LessonContentProps) {
  // Tutorial Type
  if (lesson.lessonType === "tutorial" && lesson.tutorialContent) {
    const { intro, steps } = lesson.tutorialContent;

    return (
      <div className="space-y-8">
        {intro && (
          <p className="text-lg text-muted-foreground">{intro}</p>
        )}

        {steps && steps.length > 0 && (
          <div className="space-y-6">
            {steps.map((step) => (
              <div
                key={step._key}
                className="rounded-lg border bg-card p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                    {step.stepNumber}
                  </div>

                  <div className="flex-1 space-y-4">
                    <p className="text-foreground">{step.instruction}</p>

                    {step.code && step.copyable && (
                      <CodeBlock code={step.code} />
                    )}

                    {step.code && !step.copyable && (
                      <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm">
                        <code>{step.code}</code>
                      </pre>
                    )}

                    {step.note && (
                      <NoteBox variant="info">{step.note}</NoteBox>
                    )}

                    {step.screenshot && (
                      <div className="relative overflow-hidden rounded-lg border">
                        <Image
                          src={urlForImage(step.screenshot)}
                          alt={`Step ${step.stepNumber}`}
                          width={800}
                          height={450}
                          className="h-auto w-full"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Code Snippet Type
  if (lesson.lessonType === "code-snippet" && lesson.codeSnippet) {
    const {
      intro,
      fileName,
      instruction,
      code,
      preview,
      explanation,
      challenge,
      note,
    } = lesson.codeSnippet;

    return (
      <div className="space-y-6">
        {intro && (
          <p className="text-lg text-muted-foreground">{intro}</p>
        )}

        {instruction && <NoteBox variant="info">{instruction}</NoteBox>}

        {code && (
          <CodeBlock code={code} fileName={fileName} showLineNumbers />
        )}

        {preview && (
          <div className="space-y-2">
            <p className="font-semibold">Preview:</p>
            <div className="relative overflow-hidden rounded-lg border">
              <Image
                src={urlForImage(preview)}
                alt="Preview"
                width={800}
                height={450}
                className="h-auto w-full"
              />
            </div>
          </div>
        )}

        {explanation && explanation.length > 0 && (
          <Explanation items={explanation} />
        )}

        {challenge && <Challenge content={challenge} />}

        {note && <NoteBox variant="warning">{note}</NoteBox>}
      </div>
    );
  }

  return (
    <p className="text-muted-foreground">Konten lesson tidak tersedia.</p>
  );
}