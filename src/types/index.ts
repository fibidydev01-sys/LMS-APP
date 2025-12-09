// src/types/index.ts

// ============================================
// SANITY BASE TYPES
// ============================================

export interface SanityDocument {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
}

export interface SanitySlug {
  _type: "slug";
  current: string;
}

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
}

export interface SanityReference {
  _type: "reference";
  _ref: string;
}

// ============================================
// CATEGORY
// ============================================

export interface Category extends SanityDocument {
  _type: "category";
  name: string;
  slug: SanitySlug;
  description?: string;
  icon?: string;
  color?: string;
}

// ============================================
// COURSE
// ============================================

export type CourseLevel = "beginner" | "intermediate" | "advanced";

export interface Course extends SanityDocument {
  _type: "course";
  title: string;
  slug: SanitySlug;
  shortDescription: string;
  fullDescription?: string;
  thumbnail?: SanityImage;
  category?: Category;
  level: CourseLevel;
  price: number;
  duration?: string;
  totalLessons?: number;
  modules?: Module[];
  whatYouWillLearn?: string[];
  prerequisites?: string[];
  tools?: string[];
  featured?: boolean;
  active?: boolean;
}

export interface CourseCard {
  _id: string;
  title: string;
  slug: SanitySlug;
  shortDescription: string;
  thumbnail?: SanityImage;
  category?: {
    name: string;
    slug: SanitySlug;
  };
  level: CourseLevel;
  price: number;
  duration?: string;
  totalLessons?: number;
  featured?: boolean;
}

// ============================================
// MODULE & LESSON REFERENCE
// ============================================

export interface ModuleLesson {
  _id: string;
  title: string;
  slug: SanitySlug;
  lessonType: LessonType;
  duration?: string;
}

export interface Module {
  _key: string;
  title: string;
  moduleNumber: number;
  description?: string;
  lessons?: ModuleLesson[];
}

// ============================================
// LESSON
// ============================================

export type LessonType = "tutorial" | "code-snippet";

export interface Lesson extends SanityDocument {
  _type: "lesson";
  title: string;
  slug: SanitySlug;
  lessonType: LessonType;
  duration?: string;
  tutorialContent?: TutorialContent;
  codeSnippet?: CodeSnippetContent;
}

export interface TutorialContent {
  intro?: string;
  steps?: TutorialStep[];
}

export interface TutorialStep {
  _key: string;
  stepNumber: number;
  instruction: string;
  code?: string;
  copyable?: boolean;
  note?: string;
  screenshot?: SanityImage;
}

export interface CodeSnippetContent {
  intro?: string;
  fileName?: string;
  instruction?: string;
  code?: string;
  preview?: SanityImage;
  explanation?: ExplanationItem[];
  challenge?: string;
  note?: string;
}

export interface ExplanationItem {
  _key: string;
  term: string;
  definition: string;
}

// ============================================
// LESSON WITH NAVIGATION
// ============================================

export interface LessonNav {
  title: string;
  slug: SanitySlug;
}

export interface LessonWithNav extends Lesson {
  prevLesson?: LessonNav | null;
  nextLesson?: LessonNav | null;
  moduleName?: string;
  courseName?: string;
  courseSlug?: SanitySlug;
}

// ============================================
// BLOG POST
// ============================================

export type PostCategory = "tutorial" | "career" | "tips" | "tools" | "news";

export interface Post extends SanityDocument {
  _type: "post";
  title: string;
  slug: SanitySlug;
  excerpt?: string;
  content?: unknown[];
  thumbnail?: SanityImage;
  category?: PostCategory;
  tags?: string[];
  publishedAt?: string;
  author?: string;
  featured?: boolean;
}

export interface PostCard {
  _id: string;
  title: string;
  slug: SanitySlug;
  excerpt?: string;
  thumbnail?: SanityImage;
  category?: PostCategory;
  publishedAt?: string;
}

// ============================================
// RESOURCE
// ============================================

export type ResourceType = "cheatsheet" | "guide" | "template" | "tool-list";

export interface Resource extends SanityDocument {
  _type: "resource";
  title: string;
  description?: string;
  type: ResourceType;
  thumbnail?: SanityImage;
  downloadUrl?: string;
  category?: Category;
  featured?: boolean;
}

// ============================================
// PAGE PROPS (Next.js 15)
// ============================================

export type PageProps<T = { slug: string }> = {
  params: Promise<T>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export type MetadataProps<T = { slug: string }> = {
  params: Promise<T>;
};