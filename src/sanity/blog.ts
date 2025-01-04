import { defineType, defineField } from "sanity";

export default defineType({
  name: "blog",
  type: "document",
  title: "Blog",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "summary",
      type: "text",
      title: "Summary",
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "content",
      type: "array",
      title: "Content",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "author",
      type: "string",
      title: "Author",
    }),
    // Reference to the comments
    defineField({
      name: "comments",
      type: "array",
      title: "Comments",
      of: [
        {
          type: "reference",
          to: [{ type: "comment" }],
        },
      ],
    }),
  ],
});
