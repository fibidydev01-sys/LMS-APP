// src/app/error.tsx

"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-destructive/20">Oops!</h1>
        <h2 className="mt-4 text-2xl font-semibold">Terjadi Kesalahan</h2>
        <p className="mt-2 text-muted-foreground">
          Maaf, terjadi kesalahan saat memuat halaman ini.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
          <Button onClick={reset}>Coba Lagi</Button>
          <Button variant="outline" asChild>
            <Link href="/">Kembali ke Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}