// src/components/home/Stats.tsx

import { Users, BookOpen, Star, Gift } from "lucide-react";
import StatCard from "@/src/components/shared/StatCard";

const stats = [
  { icon: <Users className="h-8 w-8" />, value: "100+", label: "Siswa Aktif" },
  { icon: <BookOpen className="h-8 w-8" />, value: "10+", label: "Courses" },
  { icon: <Star className="h-8 w-8" />, value: "4.9", label: "Rating" },
  { icon: <Gift className="h-8 w-8" />, value: "Gratis", label: "Untuk Semua" },
];

export default function Stats() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}