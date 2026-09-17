import Link from "next/link";
import { Photo } from "@/components/ui/Photo";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { urlForImage } from "@/sanity/lib/image";
import { formatPostDate } from "@/lib/format-date";
import type { PostSummary } from "@/sanity/lib/types";

function CardImage({ post }: { post: PostSummary }) {
  if (!post.mainImage) {
    return <PhotoPlaceholder label={post.title} />;
  }
  return <Photo src={urlForImage(post.mainImage).width(1200).height(900).fit("crop").url()} alt={post.title} />;
}

export function BlogPostCard({ post }: { post: PostSummary }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block border-2 border-ink/10 bg-white transition-all duration-300 ease-out hover:-translate-y-2 hover:border-brand-blue hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-brand-charcoal">
        <div className="h-full w-full transition-transform duration-300 ease-out group-hover:scale-110">
          <CardImage post={post} />
        </div>
      </div>
      <div className="flex flex-col p-6">
        <span className="inline-flex w-fit items-center bg-brand-blue/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-blue">
          {post.category}
        </span>
        <p className="mt-3 font-display text-xl font-semibold leading-snug text-ink">{post.title}</p>
        <p className="mt-2 text-sm text-ink/60">{post.excerpt}</p>
        <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-ink/40">
          {formatPostDate(post.date)} &bull; {post.readTime}
        </p>
      </div>
    </Link>
  );
}
