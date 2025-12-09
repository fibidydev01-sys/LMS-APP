// src/lib/config.ts

export const siteConfig = {
  name: "CodeAcademy",
  description: "Platform belajar Next.js & React untuk anak SMP/SMA Indonesia",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ogImage: "/og-image.jpg",
  author: {
    name: "CodeAcademy Team",
  },
  links: {
    instagram: "https://instagram.com/codeacademy",
    youtube: "https://youtube.com/@codeacademy",
    github: "https://github.com/codeacademy",
    email: "hello@codeacademy.id",
  },
  creator: "CodeAcademy Team",
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "Belajar Coding",
    "Web Development",
    "Tutorial",
    "Indonesia",
  ],
  nav: [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/blog", label: "Blog" },
    { href: "/resources", label: "Resources" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  footer: {
    platform: [
      { href: "/courses", label: "Courses" },
      { href: "/blog", label: "Blog" },
      { href: "/resources", label: "Resources" },
    ],
    company: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;