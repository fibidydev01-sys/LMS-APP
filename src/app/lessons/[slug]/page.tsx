// src/app/lessons/[slug]/page.tsx

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumb from "@/src/components/shared/Breadcrumb";
import LessonHeader from "@/src/components/lessons/LessonHeader";
import LessonContent from "@/src/components/lessons/LessonContent";
import LessonNav from "@/src/components/lessons/LessonNav";
import { getLessonWithNav, getLessonSlugs } from "@/src/lib/sanity/fetch";
import type { MetadataProps, PageProps } from "@/src/types";

export async function generateStaticParams() {
  const slugs = await getLessonSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { slug } = await params;
  const lesson = await getLessonWithNav(slug);

  if (!lesson) {
    return { title: "Lesson Not Found" };
  }

  return {
    title: lesson.title,
    description: `Belajar ${lesson.title}`,
  };
}

export default async function LessonDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const lesson = await getLessonWithNav(slug);

  if (!lesson) {
    notFound();
  }

  const breadcrumbItems = [
    { label: "Courses", href: "/courses" },
    ...(lesson.courseName && lesson.courseSlug
      ? [
        {
          label: lesson.courseName,
          href: `/courses/${lesson.courseSlug.current}`,
        },
      ]
      : []),
    { label: lesson.title },
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <section className="border-b bg-background py-8">
        <div className="container mx-auto px-4">
          <Breadcrumb items={breadcrumbItems} className="mb-6" />
          <LessonHeader
            title={lesson.title}
            lessonType={lesson.lessonType}
            duration={lesson.duration}
            moduleName={lesson.moduleName}
          />
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-xl border bg-card p-6 shadow-sm md:p-8">
              <LessonContent lesson={lesson} />
            </div>

            <LessonNav
              prevLesson={lesson.prevLesson}
              nextLesson={lesson.nextLesson}
              courseSlug={lesson.courseSlug}
            />
          </div>
        </div>
      </section>
    </div>
  );
}