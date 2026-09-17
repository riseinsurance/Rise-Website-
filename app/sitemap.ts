import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { client } from "@/sanity/lib/client";
import { allPostSlugsQuery } from "@/sanity/lib/queries";

const BASE_URL = `https://${siteConfig.domain}`;

const routes = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/get-a-quote", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/insurance-quotes", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/insurance/auto", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/insurance/home", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/insurance/business", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/wind-hail-deductibles", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/referral-program", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/careers", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/our-core-values", priority: 0.4, changeFrequency: "yearly" as const },
  { path: "/available-positions", priority: 0.4, changeFrequency: "weekly" as const },
  { path: "/agent", priority: 0.4, changeFrequency: "monthly" as const },
  { path: "/growth-team", priority: 0.4, changeFrequency: "monthly" as const },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const postSlugs = await client.fetch<string[]>(allPostSlugsQuery, {}, { next: { revalidate: 60 } });

  return [
    ...routes.map((route) => ({
      url: `${BASE_URL}${route.path}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...postSlugs.map((slug) => ({
      url: `${BASE_URL}/blog/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
