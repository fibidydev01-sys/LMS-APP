// src/components/home/CTA.tsx

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/src/components/ui/button";

export default function CTA() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-center text-white md:p-12">
          {/* Decorations */}
          <div className="absolute left-0 top-0 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10" />
          <div className="absolute bottom-0 right-0 h-60 w-60 translate-x-1/3 translate-y-1/3 rounded-full bg-white/10" />

          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Siap Mulai Coding? 🚀
            </h2>

            <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">
              Gabung dengan 100+ pelajar lainnya. Gratis selamanya untuk course
              dasar!
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-white text-lg text-blue-600 hover:bg-white/90"
              >
                <Link href="/courses">
                  Mulai Belajar Sekarang
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-lg text-white hover:bg-white/10"
              >
                <Link href="/about">Tentang Kami</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}