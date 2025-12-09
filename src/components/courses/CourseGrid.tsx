// src/components/courses/CourseGrid.tsx

import CourseCard from "./CourseCard";
import EmptyState from "@/src/components/shared/EmptyState";
import type { CourseCard as CourseCardType } from "@/src/types";

interface CourseGridProps {
  courses: CourseCardType[];
}

export default function CourseGrid({ courses }: CourseGridProps) {
  if (courses.length === 0) {
    return (
      <EmptyState
        title="Belum ada course"
        description="Course yang kamu cari belum tersedia."
      />
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <CourseCard key={course._id} course={course} />
      ))}
    </div>
  );
}