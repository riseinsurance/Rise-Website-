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

export function BlogPostCard({
  post,
  featured = false,
}: {
  post: PostSummary;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group block border-2 border-ink/10 bg-white transition-all duration-300 ease-out hover:-translate-y-2 hover:border-brand-blue hover:shadow-xl ${
        featured ? "sm:grid sm:grid-cols-2 sm:items-stretch" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden bg-brand-charcoal ${
          featured ? "aspect-[16/10] sm:aspect-auto" : "aspect-[4/3]"
        }`}
      >
        <div className="h-full w-full transition-transform duration-300 ease-out group-hover:scale-110">
          <CardImage post={post} />
        </div>
      </div>
      <div className={`flex flex-col ${featured ? "justify-center p-8 sm:p-10" : "p-6"}`}>
        <span className="inline-flex w-fit items-center bg-brand-blue/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-blue">
          {post.category}
        </span>
        <p
          className={`mt-3 font-display font-semibold leading-snug text-ink ${
            featured ? "text-3xl sm:text-4xl" : "text-xl"
          }`}
        >
          {post.title}
        </p>
        <p className={`mt-2 text-ink/60 ${featured ? "text-base" : "text-sm"}`}>{post.excerpt}</p>
        <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-ink/40">
          {formatPostDate(post.date)} &bull; {post.readTime}
        </p>
      </div>
    </Link>
  );
}
