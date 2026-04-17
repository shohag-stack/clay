import { defineType, defineField } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Blog Post",
  type: "document",

  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "excerpt",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "featuredImage",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
        name: "author",
        type: "object",
        fields: [
          { name: "name", type: "string" },
          { name: "image", type: "image" },
        ],
      }),

      defineField({
          name: "categories",
          type: "array",
          of: [{ type: "string" }],
        }),

    defineField({
      name: "publishedAt",
      type: "datetime",
    }),

    defineField({
      name: "body",
      type: "array",
      of: [
      { type: "block" },
      { type: "image",
       options: { hotspot: true },},
      {
        name: "imageGrid",
        type: "object",
        title: "Image Grid ( 2 coloumn )",
        fields: [
          { name: 'images', type: "array", of: [ {type: "image"}], validation: (Rule) => Rule.max(2), }
        ]

      }


  ],
    }),

    defineField({
      name: "featured",
      type: "boolean",
      initialValue: false,
    }),
  ],
});