import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

const BASE_URL = `https://${siteConfig.domain}`;

const routes = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/get-a-quote", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/insurance-quotes", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/insurance/auto", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/insurance/home", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/insurance/business", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/wind-hail-deductibles", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/referral-program", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/careers", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/our-core-values", priority: 0.4, changeFrequency: "yearly" as const },
  { path: "/available-positions", priority: 0.4, changeFrequency: "weekly" as const },
  { path: "/agent", priority: 0.4, changeFrequency: "monthly" as const },
  { path: "/growth-team", priority: 0.4, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
