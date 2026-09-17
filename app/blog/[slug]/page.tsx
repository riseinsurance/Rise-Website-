import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { allPostSlugsQuery, postBySlugQuery, relatedPostsQuery } from "@/sanity/lib/queries";
import type { Post, PostSummary } from "@/sanity/lib/types";
import { Photo } from "@/components/ui/Photo";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { PostBody } from "@/components/blog/PostBody";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { formatPostDate } from "@/lib/format-date";
import { urlForImage } from "@/sanity/lib/image";

export async function generateStaticParams() {
  const slugs = await client.fetch<string[]>(allPostSlugsQuery);
  return slugs.map((slug) => ({ slug }));
}

async function getPost(slug: string) {
  return client.fetch<Post | null>(postBySlugQuery, { slug }, { next: { revalidate: 60 } });
}

async function getRelatedPosts(slug: string) {
  return client.fetch<PostSummary[]>(relatedPostsQuery, { slug }, { next: { revalidate: 60 } });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(slug);

  return (
    <article>
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 pt-14 sm:pt-16 lg:px-8 lg:pt-20">
          <span className="inline-flex w-fit items-center bg-brand-blue/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-blue">
            {post.category}
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-ink/40">
            {formatPostDate(post.date)} &bull; {post.readTime}
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-5xl px-6 lg:px-8">
          <div className="relative aspect-[16/9] overflow-hidden bg-brand-charcoal">
            {post.mainImage ? (
              <Photo
                src={urlForImage(post.mainImage).width(1600).height(900).fit("crop").url()}
                alt={post.title}
              />
            ) : (
              <PhotoPlaceholder label={post.title} />
            )}
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-6 py-14 sm:py-16 lg:px-8 lg:py-20">
          <PostBody value={post.body} />
          <p className="mt-10 text-sm font-semibold uppercase tracking-wide text-ink/50">
            By Rise Insurance Agency
          </p>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="bg-light-gray">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              More From The Fine Print
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <BlogPostCard key={relatedPost._id} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner
        headline="Get insurance that actually makes sense."
        subhead="A real comparison across carriers, explained in plain English."
        cta={{ label: "Get a Quote", href: "/get-a-quote" }}
      />
    </article>
  );
}
