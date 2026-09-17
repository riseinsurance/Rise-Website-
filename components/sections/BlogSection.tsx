import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { recentPostsQuery } from "@/sanity/lib/queries";
import type { PostSummary } from "@/sanity/lib/types";
import { Photo } from "@/components/ui/Photo";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { ScrollHighlight } from "@/components/ui/ScrollHighlight";
import { Button } from "@/components/ui/Button";
import { formatPostDate } from "@/lib/format-date";
import { urlForImage } from "@/sanity/lib/image";

async function getRecentPosts() {
  return client.fetch<PostSummary[]>(recentPostsQuery, {}, { next: { revalidate: 60 } });
}

// The one dramatic beat on the section: a full-bleed image with the story
// laid directly over it, rather than another boxed card. Everything else in
// the section stays quiet so this is the only thing competing for attention.
function FeaturedStory({ post }: { post: PostSummary }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative mt-16 block aspect-[4/5] overflow-hidden bg-brand-charcoal sm:aspect-[21/9]"
    >
      <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105">
        {post.mainImage ? (
          <Photo src={urlForImage(post.mainImage).width(1920).height(1080).fit("crop").url()} alt={post.title} />
        ) : (
          <PhotoPlaceholder label={post.title} />
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-near-black via-near-black/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-12">
        <span className="inline-flex w-fit items-center bg-brand-blue px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
          {post.category}
        </span>
        <p className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          {post.title}
        </p>
        <p className="mt-3 hidden max-w-xl text-white/70 sm:block">{post.excerpt}</p>
        <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-white/50">
          {formatPostDate(post.date)} &bull; {post.readTime}
        </p>
      </div>
    </Link>
  );
}

function SecondaryCard({ post }: { post: PostSummary }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block overflow-hidden border border-white/10 bg-white/[0.03] transition-colors duration-300 hover:border-brand-blue"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-brand-charcoal">
        <div className="h-full w-full transition-transform duration-300 ease-out group-hover:scale-110">
          {post.mainImage ? (
            <Photo src={urlForImage(post.mainImage).width(800).height(500).fit("crop").url()} alt={post.title} />
          ) : (
            <PhotoPlaceholder label={post.title} />
          )}
        </div>
      </div>
      <div className="p-6">
        <span className="inline-flex w-fit items-center bg-brand-blue/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-blue">
          {post.category}
        </span>
        <p className="mt-3 font-display text-xl font-semibold text-white">{post.title}</p>
        <p className="mt-2 text-sm text-white/60">{post.excerpt}</p>
        <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-white/40">
          {formatPostDate(post.date)} &bull; {post.readTime}
        </p>
      </div>
    </Link>
  );
}

export async function BlogSection() {
  const posts = await getRecentPosts();

  if (posts.length === 0) {
    return null;
  }

  const [featured, ...rest] = posts;

  return (
    <section className="bg-near-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-[clamp(1.875rem,5.25vw,3.75rem)] font-extrabold leading-[0.95] tracking-tight text-white">
            <ScrollHighlight markClassName="bg-brand-blue" className="text-ink">
              The Fine Print
            </ScrollHighlight>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">
            A few things worth knowing before your next renewal.
          </p>
        </div>

        {featured && <FeaturedStory post={featured} />}

        {rest.length > 0 && (
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {rest.map((post) => (
              <SecondaryCard key={post._id} post={post} />
            ))}
          </div>
        )}

        <div className="mt-14 text-center">
          <Button href="/blog" variant="primary">
            Read More
          </Button>
        </div>
      </div>
    </section>
  );
}
