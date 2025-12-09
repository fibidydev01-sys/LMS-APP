// src/components/home/FeaturedCourses.tsx

import SectionHeader from "@/src/components/shared/SectionHeader";
import CourseCard from "@/src/components/courses/CourseCard";
import EmptyState from "@/src/components/shared/EmptyState";
import { getFeaturedCourses } from "@/src/lib/sanity/fetch";

export default async function FeaturedCourses() {
  const courses = await getFeaturedCourses();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="🔥 Course Populer"
          description="Mulai dari course yang paling banyak diminati"
          href="/courses"
          linkText="Lihat Semua Course"
        />

        {courses.length === 0 ? (
          <EmptyState
            title="Belum ada course"
            description="Course akan segera tersedia!"
          />
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={course._id} course={course} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}