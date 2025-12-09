// src/app/about/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { Instagram, Youtube, Github, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { siteConfig } from "@/src/lib/config";

export const metadata: Metadata = {
  title: "About",
  description: "Tentang CodeAcademy",
};

const socialLinks = [
  { name: "Instagram", href: siteConfig.links.instagram, icon: Instagram },
  { name: "YouTube", href: siteConfig.links.youtube, icon: Youtube },
  { name: "GitHub", href: siteConfig.links.github, icon: Github },
  { name: "Email", href: `mailto:${siteConfig.links.email}`, icon: Mail },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Hai! 👋</h1>
          <p className="mx-auto max-w-2xl text-xl text-white/90">
            Kenalan dulu yuk dengan platform dan orang di baliknya!
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <div className="mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full bg-gradient-to-br from-blue-400 to-purple-400" />
              <h2 className="mb-2 text-2xl font-bold">Instruktur</h2>
              <p className="text-muted-foreground">Web Developer & Educator</p>
            </div>

            <div className="prose prose-lg mx-auto mb-12">
              <h3>🎯 Tentang Platform Ini</h3>
              <p>
                Platform ini dibuat khusus untuk anak-anak SMP dan SMA Indonesia
                yang pengen belajar coding dengan cara yang seru dan gampang.
              </p>
              <ul>
                <li>
                  <strong>Copy-paste friendly</strong> - Tinggal copas code,
                  langsung jalan!
                </li>
                <li>
                  <strong>Visual feedback</strong> - Setiap code ada preview-nya
                </li>
                <li>
                  <strong>Bahasa Indonesia</strong> - Penjelasan gampang
                  dipahami
                </li>
                <li>
                  <strong>Project nyata</strong> - Bikin website dan app
                  beneran!
                </li>
              </ul>

              <h3>💡 Visi</h3>
              <p>
                Setiap pelajar Indonesia punya kesempatan yang sama untuk
                belajar coding.
              </p>

              <h3>🚀 Misi</h3>
              <p>
                Membuat konten pembelajaran coding yang berkualitas, mudah
                dipahami, dan gratis.
              </p>
            </div>

            <div className="text-center">
              <h3 className="mb-6 text-xl font-semibold">Connect with me! 🤝</h3>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-muted p-3 transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button asChild size="lg">
                <Link href="/courses">
                  Mulai Belajar Sekarang
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}