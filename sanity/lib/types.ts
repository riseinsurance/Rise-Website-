import type { SanityImageSource } from "@sanity/image-url";
import type { PortableTextBlock } from "next-sanity";

export type PostSummary = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  mainImage: SanityImageSource | null;
  isPlaceholder: boolean;
};

export type Post = PostSummary & {
  body: PortableTextBlock[];
};
