// src/lib/sanity/queries.ts

import { groq } from "next-sanity";

// ============================================
// CATEGORY QUERIES
// ============================================

export const categoriesQuery = groq`
  *[_type == "category"] | order(name asc) {
    _id,
    name,
    slug,
    description,
    icon,
    color
  }
`;

export const categoryBySlugQuery = groq`
  *[_type == "category" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    description,
    icon,
    color
  }
`;

// ============================================
// COURSE QUERIES
// ============================================

export const coursesQuery = groq`
 *[_type == "course" && active != false] | order(featured desc, _createdAt desc) {
    _id,
    title,
    slug,
    shortDescription,
    thumbnail,
    "category": category->{
      name,
      slug
    },
    level,
    price,
    duration,
    "totalLessons": count(modules[].lessons[]),
    featured
  }
`;

export const featuredCoursesQuery = groq`
  *[_type == "course" && active == true && featured == true] | order(_createdAt desc) [0...6] {
    _id,
    title,
    slug,
    shortDescription,
    thumbnail,
    "category": category->{
      name,
      slug
    },
    level,
    price,
    duration,
    "totalLessons": count(modules[].lessons[]),
    featured
  }
`;

export const coursesByCategoryQuery = groq`
  *[_type == "course" && active == true && category->slug.current == $categorySlug] | order(_createdAt desc) {
    _id,
    title,
    slug,
    shortDescription,
    thumbnail,
    "category": category->{
      name,
      slug
    },
    level,
    price,
    duration,
    "totalLessons": count(modules[].lessons[]),
    featured
  }
`;

export const courseBySlugQuery = groq`
  *[_type == "course" && slug.current == $slug][0] {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    _rev,
    title,
    slug,
    shortDescription,
    fullDescription,
    thumbnail,
    "category": category->{
      _id,
      name,
      slug,
      color
    },
    level,
    price,
    duration,
    "totalLessons": count(modules[].lessons[]),
    modules[] {
      _key,
      title,
      moduleNumber,
      description,
      "lessons": lessons[]->{
        _id,
        title,
        slug,
        lessonType,
        duration
      }
    },
    whatYouWillLearn,
    prerequisites,
    tools,
    featured,
    active
  }
`;

export const courseSlugsQuery = groq`
  *[_type == "course" && active != false].slug.current
`;

// ============================================
// LESSON QUERIES
// ============================================

export const lessonBySlugQuery = groq`
  *[_type == "lesson" && slug.current == $slug][0] {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    _rev,
    title,
    slug,
    lessonType,
    duration,
    tutorialContent {
      intro,
      steps[] {
        _key,
        stepNumber,
        instruction,
        code,
        copyable,
        note,
        screenshot
      }
    },
    codeSnippet {
      intro,
      fileName,
      instruction,
      code,
      preview,
      explanation[] {
        _key,
        term,
        definition
      },
      challenge,
      note
    }
  }
`;

export const lessonWithNavQuery = groq`
  *[_type == "lesson" && slug.current == $slug][0] {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    _rev,
    title,
    slug,
    lessonType,
    duration,
    tutorialContent {
      intro,
      steps[] {
        _key,
        stepNumber,
        instruction,
        code,
        copyable,
        note,
        screenshot
      }
    },
    codeSnippet {
      intro,
      fileName,
      instruction,
      code,
      preview,
      explanation[] {
        _key,
        term,
        definition
      },
      challenge,
      note
    },
    "course": *[_type == "course" && references(^._id)][0] {
      title,
      slug,
      modules[] {
        title,
        lessons[]->{
          _id,
          title,
          slug
        }
      }
    }
  }
`;

export const lessonSlugsQuery = groq`
  *[_type == "lesson"].slug.current
`;

// ============================================
// POST QUERIES
// ============================================

export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    thumbnail,
    category,
    publishedAt
  }
`;

export const featuredPostsQuery = groq`
  *[_type == "post" && featured == true] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    excerpt,
    thumbnail,
    category,
    publishedAt
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    _rev,
    title,
    slug,
    excerpt,
    content,
    thumbnail,
    category,
    tags,
    publishedAt,
    author,
    featured
  }
`;

export const postSlugsQuery = groq`
  *[_type == "post"].slug.current
`;

// ============================================
// RESOURCE QUERIES
// ============================================

export const resourcesQuery = groq`
  *[_type == "resource"] | order(featured desc, _createdAt desc) {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    _rev,
    title,
    description,
    type,
    thumbnail,
    downloadUrl,
    "fileUrl": file.asset->url,
    featured
  }
`;

export const featuredResourcesQuery = groq`
  *[_type == "resource" && featured == true] | order(_createdAt desc) [0...4] {
    _id,
    title,
    description,
    type,
    thumbnail,
    downloadUrl,
    "fileUrl": file.asset->url,
    featured
  }
`;