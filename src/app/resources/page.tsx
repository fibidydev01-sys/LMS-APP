// src/app/resources/page.tsx

import type { Metadata } from "next";
import PageHeader from "@/src/components/shared/PageHeader";
import ResourceCard from "@/src/components/resources/ResourceCard";
import EmptyState from "@/src/components/shared/EmptyState";
import { getResources } from "@/src/lib/sanity/fetch";

export const metadata: Metadata = {
  title: "Free Resources",
  description: "Download cheatsheet, guide, dan resource gratis",
};

export default async function ResourcesPage() {
  const resources = await getResources();

  return (
    <>
      <PageHeader
        title="🎁 Free Resources"
        description="Download gratis untuk bantu kamu belajar!"
      />

      <section className="py-12">
        <div className="container mx-auto px-4">
          {resources.length === 0 ? (
            <EmptyState title="Belum ada resource" description="Stay tuned!" />
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {resources.map((resource) => (
                <ResourceCard key={resource._id} resource={resource} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}