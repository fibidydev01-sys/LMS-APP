// src/app/page.tsx

import Hero from "@/src/components/home/Hero";
import Stats from "@/src/components/home/Stats";
import FeaturedCourses from "@/src/components/home/FeaturedCourses";
import Features from "@/src/components/home/Features";
import CTA from "@/src/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedCourses />
      <Features />
      <CTA />
    </>
  );
}