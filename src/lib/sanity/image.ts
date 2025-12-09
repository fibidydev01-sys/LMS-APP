// src/lib/sanity/image.ts

import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImage } from "@/src/types";
import { sanityConfig } from "./env";

const builder = createImageUrlBuilder({
  projectId: sanityConfig.projectId,
  dataset: sanityConfig.dataset,
});

export function urlForImage(source: SanityImage | string): string {
  if (typeof source === "string") {
    return source;
  }

  if (!source?.asset?._ref) {
    return "/placeholder.png";
  }

  return builder.image(source).auto("format").fit("max").url();
}

export function urlForImageWithSize(
  source: SanityImage,
  width: number,
  height: number
): string {
  if (!source?.asset?._ref) {
    return "/placeholder.png";
  }

  return builder
    .image(source)
    .width(width)
    .height(height)
    .auto("format")
    .fit("crop")
    .url();
}

export function urlForThumbnail(source: SanityImage): string {
  return urlForImageWithSize(source, 400, 225);
}

export function urlForOgImage(source: SanityImage): string {
  return urlForImageWithSize(source, 1200, 630);
}