// src/components/courses/CourseInfo.tsx

import Link from "next/link";
import { BookOpen, Clock, BarChart, Users, CheckCircle } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader } from "@/src/components/ui/card";
import PriceBadge from "@/src/components/shared/PriceBadge";
import { getLevelLabel } from "@/src/lib/utils";
import type { Course } from "@/src/types";

interface CourseInfoProps {
  course: Course;
  firstLessonSlug?: string;
}

export default function CourseInfo({ course, firstLessonSlug }: CourseInfoProps) {
  const features = [
    "Akses selamanya",
    "Update materi gratis",
    "Sertifikat digital",
    "Support komunitas",
  ];

  return (
    <Card className="sticky top-24">
      <CardHeader className="pb-2 text-center">
        <PriceBadge price={course.price} size="lg" className="text-3xl" />
      </CardHeader>

      <CardContent className="space-y-4">
        {firstLessonSlug ? (
          <Button asChild className="w-full" size="lg">
            <Link href={`/lessons/${firstLessonSlug}`}>Mulai Belajar</Link>
          </Button>
        ) : (
          <Button className="w-full" size="lg" disabled>
            Coming Soon
          </Button>
        )}

        <div className="space-y-3 pt-4">
          {course.totalLessons && (
            <div className="flex items-center gap-3 text-sm">
              <BookOpen className="h-4 w-4 text-muted-foreground" />
              <span>{course.totalLessons} lessons</span>
            </div>
          )}
          {course.duration && (
            <div className="flex items-center gap-3 text-sm">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span>{course.duration}</span>
            </div>
          )}
          <div className="flex items-center gap-3 text-sm">
            <BarChart className="h-4 w-4 text-muted-foreground" />
            <span>{getLevelLabel(course.level)}</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span>100+ enrolled</span>
          </div>
        </div>

        <div className="space-y-2 border-t pt-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}