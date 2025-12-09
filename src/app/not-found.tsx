// src/app/not-found.tsx

import Link from "next/link";
import { Button } from "@/src/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-muted-foreground/20">404</h1>
        <h2 className="mt-4 text-2xl font-semibold">Halaman Tidak Ditemukan</h2>
        <p className="mt-2 text-muted-foreground">
          Maaf, halaman yang kamu cari tidak ada atau sudah dipindahkan.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
          <Button asChild>
            <Link href="/">Kembali ke Home</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/courses">Lihat Courses</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}