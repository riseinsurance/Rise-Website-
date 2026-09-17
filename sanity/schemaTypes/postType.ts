import { defineArrayMember, defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "The web address for this post. Click \"Generate\" after entering a title.",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 2,
      description: "A one to two sentence summary shown on cards and previews.",
      validation: (rule) => rule.required().max(220),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      description:
        "The topic tag shown on the post, e.g. \"Home Insurance\" or \"Auto Insurance.\"",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Describe the image for screen readers and SEO.",
        }),
      ],
    }),
    defineField({
      name: "date",
      title: "Published Date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "readTime",
      title: "Read Time",
      type: "string",
      description: "e.g. \"4 min read\"",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading", value: "h2" },
            { title: "Subheading", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [defineField({ name: "href", title: "URL", type: "url" })],
              },
            ],
          },
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "isPlaceholder",
      title: "Placeholder content (internal)",
      type: "boolean",
      description:
        "Marks this as seed/placeholder content so it's easy to find and swap for a real post. Never shown on the live site.",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "title",
      category: "category",
      media: "mainImage",
      isPlaceholder: "isPlaceholder",
    },
    prepare({ title, category, media, isPlaceholder }) {
      return {
        title,
        subtitle: isPlaceholder ? `PLACEHOLDER: ${category ?? ""}` : category,
        media,
      };
    },
  },
});
