// src/app/blog/page.tsx

import type { Metadata } from "next";
import PageHeader from "@/src/components/shared/PageHeader";
import PostCard from "@/src/components/blog/PostCard";
import EmptyState from "@/src/components/shared/EmptyState";
import { getPosts } from "@/src/lib/sanity/fetch";

export const metadata: Metadata = {
  title: "Blog",
  description: "Tips, tutorial, dan artikel seputar coding",
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <PageHeader
        title="📝 Blog"
        description="Tips, tutorial, dan artikel seputar coding untuk pelajar Indonesia"
      />

      <section className="py-12">
        <div className="container mx-auto px-4">
          {posts.length === 0 ? (
            <EmptyState title="Belum ada artikel" description="Stay tuned!" />
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}