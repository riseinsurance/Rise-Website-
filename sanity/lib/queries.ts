import { groq } from "next-sanity";

const postSummaryFields = groq`
  _id,
  title,
  "slug": slug.current,
  excerpt,
  category,
  date,
  readTime,
  mainImage,
  "isPlaceholder": isPlaceholder == true
`;

export const allPostsQuery = groq`
  *[_type == "post" && defined(slug.current)] | order(date desc) {
    ${postSummaryFields}
  }
`;

export const recentPostsQuery = groq`
  *[_type == "post" && defined(slug.current)] | order(date desc) [0...3] {
    ${postSummaryFields}
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    ${postSummaryFields},
    body
  }
`;

export const relatedPostsQuery = groq`
  *[_type == "post" && defined(slug.current) && slug.current != $slug] | order(date desc) [0...3] {
    ${postSummaryFields}
  }
`;

export const allPostSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)][].slug.current
`;
