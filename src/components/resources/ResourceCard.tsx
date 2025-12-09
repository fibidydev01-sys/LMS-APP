// src/components/resources/ResourceCard.tsx

import Image from "next/image";
import { Download, FileText, BookOpen, Layout, Wrench } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { urlForImage } from "@/src/lib/sanity/image";
import { cn } from "@/src/lib/utils";
import type { Resource, ResourceType } from "@/src/types";

interface ResourceCardProps {
  resource: Resource;
}

const typeConfig: Record<
  ResourceType,
  { label: string; icon: React.ReactNode; color: string }
> = {
  cheatsheet: {
    label: "Cheatsheet",
    icon: <FileText className="h-4 w-4" />,
    color: "bg-blue-100 text-blue-800",
  },
  guide: {
    label: "Guide",
    icon: <BookOpen className="h-4 w-4" />,
    color: "bg-green-100 text-green-800",
  },
  template: {
    label: "Template",
    icon: <Layout className="h-4 w-4" />,
    color: "bg-purple-100 text-purple-800",
  },
  "tool-list": {
    label: "Tool List",
    icon: <Wrench className="h-4 w-4" />,
    color: "bg-orange-100 text-orange-800",
  },
};

export default function ResourceCard({ resource }: ResourceCardProps) {
  const config = typeConfig[resource.type];

  return (
    <Card className="h-full">
      {resource.thumbnail && (
        <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
          <Image
            src={urlForImage(resource.thumbnail)}
            alt={resource.title}
            fill
            className="object-cover"
            sizes="25vw"
          />
        </div>
      )}

      <CardHeader className="pb-2">
        <Badge className={cn("w-fit gap-1", config.color)}>
          {config.icon}
          <span>{config.label}</span>
        </Badge>
        <h3 className="text-lg font-semibold">{resource.title}</h3>
      </CardHeader>

      <CardContent className="pb-2">
        {resource.description && (
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {resource.description}
          </p>
        )}
      </CardContent>

      <CardFooter>
        {resource.downloadUrl && (
          <Button asChild className="w-full">
            <a
              href={resource.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Gratis
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}