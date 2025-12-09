// src/app/blog/[slug]/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, User } from "lucide-react";
import { Badge } from "@/src/components/ui/badge";
import Breadcrumb from "@/src/components/shared/Breadcrumb";
import { PortableText } from "@portabletext/react";
import { getPostBySlug, getPostSlugs } from "@/src/lib/sanity/fetch";
import { urlForImage } from "@/src/lib/sanity/image";
import { formatDate } from "@/src/lib/utils";
import type { MetadataProps, PageProps } from "@/src/types";
import type { PortableTextBlock } from "@portabletext/types";

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article>
      <section className="border-b bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <Breadcrumb
              items={[{ label: "Blog", href: "/blog" }, { label: post.title }]}
              className="mb-6"
            />

            {post.category && (
              <Badge className="mb-4 capitalize">{post.category}</Badge>
            )}

            <h1 className="mb-6 text-3xl font-bold md:text-4xl">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              {post.author && (
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
              )}
              {post.publishedAt && (
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(post.publishedAt)}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {post.thumbnail && (
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl overflow-hidden rounded-xl shadow-lg">
              <Image
                src={urlForImage(post.thumbnail)}
                alt={post.title}
                width={1200}
                height={630}
                className="h-auto w-full"
                priority
              />
            </div>
          </div>
        </section>
      )}

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="prose prose-lg mx-auto max-w-3xl">
            {post.content && <PortableText value={post.content as PortableTextBlock[]} />}
          </div>
        </div>
      </section>
    </article>
  );
}