// src/components/courses/CourseCard.tsx

import Link from "next/link";
import Image from "next/image";
import { Clock, BookOpen } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import LevelBadge from "@/src/components/shared/LevelBadge";
import PriceBadge from "@/src/components/shared/PriceBadge";
import { urlForImage } from "@/src/lib/sanity/image";
import { cn } from "@/src/lib/utils";
import type { CourseCard as CourseCardType } from "@/src/types";

interface CourseCardProps {
  course: CourseCardType;
  className?: string;
}

export default function CourseCard({ course, className }: CourseCardProps) {
  return (
    <Link href={`/courses/${course.slug.current}`}>
      <Card
        className={cn(
          "h-full overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl",
          className
        )}
      >
        <div className="relative aspect-video w-full overflow-hidden">
          {course.thumbnail ? (
            <Image
              src={urlForImage(course.thumbnail)}
              alt={course.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-blue-500 to-purple-600" />
          )}
          {course.featured && (
            <Badge className="absolute right-3 top-3 bg-yellow-500 text-yellow-950">
              ⭐ Featured
            </Badge>
          )}
        </div>

        <CardHeader className="pb-2">
          <div className="mb-2 flex flex-wrap gap-2">
            {course.category && (
              <Badge variant="secondary">{course.category.name}</Badge>
            )}
            <LevelBadge level={course.level} />
          </div>
          <h3 className="line-clamp-2 text-lg font-semibold">{course.title}</h3>
        </CardHeader>

        <CardContent className="pb-2">
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {course.shortDescription}
          </p>
        </CardContent>

        <CardFooter className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            {course.totalLessons && (
              <div className="flex items-center gap-1">
                <BookOpen className="h-4 w-4" />
                <span>{course.totalLessons}</span>
              </div>
            )}
            {course.duration && (
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{course.duration}</span>
              </div>
            )}
          </div>
          <PriceBadge price={course.price} />
        </CardFooter>
      </Card>
    </Link>
  );
}