// src/components/home/Features.tsx

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/src/components/ui/card";
import SectionHeader from "@/src/components/shared/SectionHeader";

const features = [
  {
    icon: "📋",
    title: "Copy-Paste Friendly",
    description: "Tinggal copas code ke VS Code, langsung jalan!",
  },
  {
    icon: "👀",
    title: "Visual Feedback",
    description: "Setiap code ada preview-nya. Langsung lihat hasil!",
  },
  {
    icon: "📖",
    title: "Step-by-Step",
    description: "Tutorial lengkap dengan penjelasan tiap baris code.",
  },
  {
    icon: "🏗️",
    title: "Project Nyata",
    description: "Bikin website beneran untuk portfolio!",
  },
  {
    icon: "🎓",
    title: "Sertifikat",
    description: "Dapat sertifikat digital setelah selesai.",
  },
  {
    icon: "👥",
    title: "Komunitas",
    description: "Belajar bareng komunitas coding Indonesia!",
  },
];

export default function Features() {
  return (
    <section className="bg-muted/30 py-16">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Kenapa Belajar di Sini? 🤔"
          description="Platform yang didesain khusus untuk pelajar Indonesia"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 text-4xl">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}