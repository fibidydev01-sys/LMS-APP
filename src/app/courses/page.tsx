// src/app/courses/page.tsx

import type { Metadata } from "next";
import PageHeader from "@/src/components/shared/PageHeader";
import CourseGrid from "@/src/components/courses/CourseGrid";
import { getCourses } from "@/src/lib/sanity/fetch";

export const metadata: Metadata = {
  title: "Courses",
  description: "Semua course yang tersedia untuk belajar coding",
};

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <>
      <PageHeader
        title="📚 Semua Courses"
        description="Pilih course yang mau kamu pelajari. Semua course dasar GRATIS!"
      />

      <section className="py-12">
        <div className="container mx-auto px-4">
          <CourseGrid courses={courses} />
        </div>
      </section>
    </>
  );
}