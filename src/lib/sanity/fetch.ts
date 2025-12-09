// src/lib/sanity/fetch.ts

import { sanityFetch } from "./client";
import {
  coursesQuery,
  featuredCoursesQuery,
  courseBySlugQuery,
  courseSlugsQuery,
  lessonBySlugQuery,
  lessonWithNavQuery,
  lessonSlugsQuery,
  postsQuery,
  postBySlugQuery,
  postSlugsQuery,
  resourcesQuery,
} from "./queries";
import type {
  CourseCard,
  Course,
  Lesson,
  LessonWithNav,
  PostCard,
  Post,
  Resource,
} from "@/src/types";

// ============================================
// COURSES
// ============================================

export async function getCourses(): Promise<CourseCard[]> {
  return sanityFetch<CourseCard[]>({
    query: coursesQuery,
    tags: ["courses"],
  });
}

export async function getFeaturedCourses(): Promise<CourseCard[]> {
  return sanityFetch<CourseCard[]>({
    query: featuredCoursesQuery,
    tags: ["courses"],
  });
}

export async function getCourseBySlug(slug: string): Promise<Course | null> {
  return sanityFetch<Course | null>({
    query: courseBySlugQuery,
    params: { slug },
    tags: ["courses", `course-${slug}`],
  });
}

export async function getCourseSlugs(): Promise<string[]> {
  return sanityFetch<string[]>({
    query: courseSlugsQuery,
    tags: ["courses"],
  });
}

// ============================================
// LESSONS
// ============================================

export async function getLessonBySlug(slug: string): Promise<Lesson | null> {
  return sanityFetch<Lesson | null>({
    query: lessonBySlugQuery,
    params: { slug },
    tags: ["lessons", `lesson-${slug}`],
  });
}

export async function getLessonWithNav(
  slug: string
): Promise<LessonWithNav | null> {
  const result = await sanityFetch<{
    _id: string;
    _type: string;
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    title: string;
    slug: { _type: "slug"; current: string };
    lessonType: "tutorial" | "code-snippet";
    duration?: string;
    tutorialContent?: unknown;
    codeSnippet?: unknown;
    course?: {
      title: string;
      slug: { _type: "slug"; current: string };
      modules?: Array<{
        title: string;
        lessons?: Array<{
          _id: string;
          title: string;
          slug: { _type: "slug"; current: string };
        }>;
      }>;
    };
  } | null>({
    query: lessonWithNavQuery,
    params: { slug },
    tags: ["lessons", `lesson-${slug}`],
  });

  if (!result) return null;

  const { course, ...lessonData } = result;
  let prevLesson = null;
  let nextLesson = null;
  let moduleName = "";

  if (course?.modules) {
    const allLessons: Array<{
      _id: string;
      title: string;
      slug: { _type: "slug"; current: string };
      moduleName: string;
    }> = [];

    course.modules.forEach((module) => {
      module.lessons?.forEach((lesson) => {
        allLessons.push({
          ...lesson,
          moduleName: module.title,
        });
      });
    });

    const currentIndex = allLessons.findIndex(
      (l) => l.slug?.current === slug
    );

    if (currentIndex > 0) {
      const prev = allLessons[currentIndex - 1];
      prevLesson = { title: prev.title, slug: prev.slug };
    }

    if (currentIndex < allLessons.length - 1) {
      const next = allLessons[currentIndex + 1];
      nextLesson = { title: next.title, slug: next.slug };
    }

    if (currentIndex !== -1) {
      moduleName = allLessons[currentIndex].moduleName;
    }
  }

  return {
    ...lessonData,
    prevLesson,
    nextLesson,
    moduleName,
    courseName: course?.title,
    courseSlug: course?.slug,
  } as LessonWithNav;
}

export async function getLessonSlugs(): Promise<string[]> {
  return sanityFetch<string[]>({
    query: lessonSlugsQuery,
    tags: ["lessons"],
  });
}

// ============================================
// POSTS
// ============================================

export async function getPosts(): Promise<PostCard[]> {
  return sanityFetch<PostCard[]>({
    query: postsQuery,
    tags: ["posts"],
  });
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  return sanityFetch<Post | null>({
    query: postBySlugQuery,
    params: { slug },
    tags: ["posts", `post-${slug}`],
  });
}

export async function getPostSlugs(): Promise<string[]> {
  return sanityFetch<string[]>({
    query: postSlugsQuery,
    tags: ["posts"],
  });
}

// ============================================
// RESOURCES
// ============================================

export async function getResources(): Promise<Resource[]> {
  return sanityFetch<Resource[]>({
    query: resourcesQuery,
    tags: ["resources"],
  });
}