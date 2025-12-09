// src/app/courses/[slug]/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle } from "lucide-react";
import { Badge } from "@/src/components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/ui/tabs";
import Breadcrumb from "@/src/components/shared/Breadcrumb";
import LevelBadge from "@/src/components/shared/LevelBadge";
import Curriculum from "@/src/components/courses/Curriculum";
import CourseInfo from "@/src/components/courses/CourseInfo";
import { getCourseBySlug, getCourseSlugs } from "@/src/lib/sanity/fetch";
import { urlForImage } from "@/src/lib/sanity/image";
import type { MetadataProps, PageProps } from "@/src/types";

export async function generateStaticParams() {
  const slugs = await getCourseSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);

  if (!course) {
    return { title: "Course Not Found" };
  }

  return {
    title: course.title,
    description: course.shortDescription,
  };
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const firstLessonSlug =
    course.modules?.[0]?.lessons?.[0]?.slug?.current;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 py-12 text-white">
        <div className="container mx-auto px-4">
          <Breadcrumb
            items={[
              { label: "Courses", href: "/courses" },
              { label: course.title },
            ]}
            className="mb-6 text-white/70"
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="mb-4 flex flex-wrap gap-2">
                {course.category && (
                  <Badge className="bg-white/20">{course.category.name}</Badge>
                )}
                <LevelBadge level={course.level} />
              </div>

              <h1 className="mb-4 text-3xl font-bold md:text-4xl">
                {course.title}
              </h1>

              <p className="mb-6 text-xl text-white/90">
                {course.shortDescription}
              </p>

              {course.whatYouWillLearn && course.whatYouWillLearn.length > 0 && (
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                  {course.whatYouWillLearn.slice(0, 4).map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-400" />
                      <span className="text-white/90">{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="hidden lg:block">
              {course.thumbnail && (
                <div className="relative aspect-video overflow-hidden rounded-xl shadow-2xl">
                  <Image
                    src={urlForImage(course.thumbnail)}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Tabs defaultValue="curriculum">
                <TabsList className="mb-6">
                  <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                </TabsList>

                <TabsContent value="curriculum">
                  {course.modules && <Curriculum modules={course.modules} />}
                </TabsContent>

                <TabsContent value="overview" className="space-y-6">
                  {course.fullDescription && (
                    <div>
                      <h3 className="mb-2 text-lg font-semibold">Deskripsi</h3>
                      <p className="text-muted-foreground">
                        {course.fullDescription}
                      </p>
                    </div>
                  )}

                  {course.whatYouWillLearn &&
                    course.whatYouWillLearn.length > 0 && (
                      <div>
                        <h3 className="mb-2 text-lg font-semibold">
                          Yang Akan Dipelajari
                        </h3>
                        <ul className="space-y-2">
                          {course.whatYouWillLearn.map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                  {course.prerequisites && course.prerequisites.length > 0 && (
                    <div>
                      <h3 className="mb-2 text-lg font-semibold">
                        Prerequisites
                      </h3>
                      <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                        {course.prerequisites.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {course.tools && course.tools.length > 0 && (
                    <div>
                      <h3 className="mb-2 text-lg font-semibold">
                        Tools yang Dibutuhkan
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {course.tools.map((tool, index) => (
                          <Badge key={index} variant="secondary">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <CourseInfo course={course} firstLessonSlug={firstLessonSlug} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}