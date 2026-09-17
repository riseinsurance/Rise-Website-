import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { allPostsQuery } from "@/sanity/lib/queries";
import type { PostSummary } from "@/sanity/lib/types";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { ScrollHighlight } from "@/components/ui/ScrollHighlight";

export const metadata: Metadata = {
  title: "The Fine Print",
  description: "The stuff insurance companies hope you never read. We break it down anyway.",
};

async function getPosts() {
  return client.fetch<PostSummary[]>(allPostsQuery, {}, { next: { revalidate: 60 } });
}

export default async function BlogPage() {
  const posts = await getPosts();
  const [featured, ...rest] = posts;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 pt-16 text-center sm:pt-20 lg:px-8 lg:pt-24">
        <h1 className="font-display text-[clamp(2.0625rem,6.75vw,4.875rem)] font-extrabold leading-[0.95] tracking-tight text-ink">
          <ScrollHighlight markClassName="bg-brand-blue" className="text-ink">
            The Fine Print
          </ScrollHighlight>
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-lg text-ink/70">
          The stuff insurance companies hope you never read. We break it down anyway.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
        {featured && (
          <div className="mb-14">
            <BlogPostCard post={featured} featured />
          </div>
        )}

        {rest.length > 0 && (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <BlogPostCard key={post._id} post={post} />
            ))}
          </div>
        )}

        {posts.length === 0 && (
          <p className="text-center text-ink/50">New posts are on the way. Check back soon.</p>
        )}
      </div>
    </section>
  );
}
