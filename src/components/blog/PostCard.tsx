// src/components/blog/PostCard.tsx

import Link from "next/link";
import Image from "next/image";
import { Calendar } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { urlForImage } from "@/src/lib/sanity/image";
import { formatDate, cn } from "@/src/lib/utils";
import type { PostCard as PostCardType } from "@/src/types";

interface PostCardProps {
  post: PostCardType;
}

const categoryColors: Record<string, string> = {
  tutorial: "bg-blue-100 text-blue-800",
  career: "bg-green-100 text-green-800",
  tips: "bg-yellow-100 text-yellow-800",
  tools: "bg-purple-100 text-purple-800",
  news: "bg-red-100 text-red-800",
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/blog/${post.slug.current}`}>
      <Card className="h-full overflow-hidden transition-all hover:shadow-xl">
        {post.thumbnail && (
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={urlForImage(post.thumbnail)}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        )}

        <CardHeader className="pb-2">
          {post.category && (
            <Badge
              className={cn(
                "w-fit capitalize",
                categoryColors[post.category] || "bg-gray-100 text-gray-800"
              )}
            >
              {post.category}
            </Badge>
          )}
          <h3 className="line-clamp-2 text-lg font-semibold">{post.title}</h3>
        </CardHeader>

        <CardContent className="pb-2">
          {post.excerpt && (
            <p className="line-clamp-2 text-sm text-muted-foreground">
              {post.excerpt}
            </p>
          )}
        </CardContent>

        <CardFooter className="pt-2">
          {post.publishedAt && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(post.publishedAt)}</span>
            </div>
          )}
        </CardFooter>
      </Card>
    </Link>
  );
}
