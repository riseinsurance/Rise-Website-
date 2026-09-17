import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "@/sanity/env";

// useCdn is false because SANITY_API_READ_TOKEN is set below: Sanity requires
// the CDN to be bypassed whenever a token is used to authenticate a request.
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN,
  perspective: "published",
});
