// src/components/home/Hero.tsx

import Link from "next/link";
import { ArrowRight, Users, Star, BookOpen } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Badge } from "@/src/components/ui/badge";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 py-20 md:py-32">
      {/* Background decoration */}
      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center text-white">
          <Badge className="mb-6 border-0 bg-white/20 text-white hover:bg-white/30">
            ✨ Platform Belajar Coding #1 untuk Pelajar Indonesia
          </Badge>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            Belajar Coding Jadi{" "}
            <span className="text-yellow-300">Gampang</span> dan{" "}
            <span className="text-yellow-300">Seru!</span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90 md:text-2xl">
            Copy-paste code, lihat hasilnya langsung. Dari nol sampai bisa bikin
            website sendiri dalam hitungan minggu!
          </p>

          <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-white px-8 text-lg text-blue-600 hover:bg-white/90"
            >
              <Link href="/courses">
                Mulai Belajar Gratis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white px-8 text-lg text-white hover:bg-white/10"
            >
              <Link href="/about">Pelajari Lebih Lanjut</Link>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>100+ Siswa Aktif</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              <span>10+ Courses</span>
            </div>
          </div>
        </div>
      </div>

      {/* Wave SVG */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
}
