// src/app/contact/page.tsx

import type { Metadata } from "next";
import { Mail, MessageSquare, Instagram, Youtube } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import PageHeader from "@/src/components/shared/PageHeader";
import { siteConfig } from "@/src/lib/config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Hubungi kami",
};

const contactMethods = [
  {
    title: "Email",
    description: "Kirim email untuk pertanyaan apapun",
    icon: Mail,
    href: `mailto:${siteConfig.links.email}`,
    label: siteConfig.links.email,
  },
  {
    title: "Instagram",
    description: "Follow & DM untuk update terbaru",
    icon: Instagram,
    href: siteConfig.links.instagram,
    label: "@codeacademy",
  },
  {
    title: "YouTube",
    description: "Subscribe untuk video tutorial",
    icon: Youtube,
    href: siteConfig.links.youtube,
    label: "CodeAcademy",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="📬 Contact"
        description="Punya pertanyaan? Jangan ragu untuk menghubungi kami!"
      />

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="grid gap-6 md:grid-cols-3">
              {contactMethods.map((method) => (
                <a
                  key={method.title}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card className="h-full transition-shadow hover:shadow-lg">
                    <CardHeader className="text-center">
                      <div className="mx-auto mb-4 rounded-full bg-primary/10 p-4">
                        <method.icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle>{method.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="mb-2 text-sm text-muted-foreground">
                        {method.description}
                      </p>
                      <p className="font-medium text-primary">{method.label}</p>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>

            <div className="mt-12 rounded-xl border bg-muted/50 p-8 text-center">
              <MessageSquare className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
              <h3 className="mb-2 text-xl font-semibold">Ada Pertanyaan?</h3>
              <p className="text-muted-foreground">
                Cek FAQ atau langsung hubungi kami via email/DM Instagram.
                Biasanya kami balas dalam 24 jam!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}