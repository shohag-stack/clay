import { defineType, defineField } from "sanity";

export const propertyType = defineType({
  name: "property",
  title: "Property",
  type: "document",

  fields: [
    // BASIC INFO
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
      name: "description",
      type: "text",
    }),

    // IMAGES
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
      name: "gallery",
      type: "array",
      of: [{ type: "image" }],
    }),

    // PRICING & LOCATION
    defineField({
      name: "price",
      type: "number",
    }),

    defineField({
      name: "location",
      type: "string",
    }),

    defineField({
      name: "coordinates",
      type: "object",
      fields: [
        { name: "lat", type: "number" },
        { name: "lng", type: "number" },
      ],
    }),

// AGENT PROFILE

    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) =>
        Rule.email().warning("Please enter a valid email"),
    }),

    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
    }),

    defineField({
      name: "designation",
      title: "Designation",
      type: "string",
      initialValue: "Real Estate Agent",
    }),


    // PROPERTY DETAILS
    defineField({
      name: "bedrooms",
      type: "number",
    }),

    defineField({
      name: "bathrooms",
      type: "object",
      fields: [
        { name: "full", type: "number" },
        { name: "half", type: "number" },
      ],
    }),

    defineField({
      name: "area",
      type: "number",
      description: "Square feet",
    }),

    defineField({
      name: "type",
      type: "string",
      options: {
        list: ["Residential", "Commercial"],
      },
    }),

    defineField({
      name: "transactionType",
      type: "string",
      options: {
        list: ["Buy", "Rent"],
      },
    }),

    // TAGS
    defineField({
      name: "tags",
      type: "array",
      of: [{ type: "string" }],
    }),

    // FEATURES
    defineField({
      name: "features",
      type: "object",
      fields: [
        {
          name: "interior",
          type: "object",
          fields: [
            { name: "elevator", type: "string" },
            { name: "area", type: "string" },
            { name: "livable", type: "string" },
          ],
        },
        {
          name: "security",
          type: "object",
          fields: [
            { name: "name", type: "string" },
            { name: "region", type: "string" },
            { name: "subDivision", type: "string" },
          ],
        },
        {
          name: "hoa",
          type: "object",
          fields: [
            { name: "hasHoa", type: "boolean" },
            { name: "fee", type: "string" },
            {
              name: "services",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
        },
      ],
    }),

    // EXTRA (for real-world usage)
    defineField({
      name: "featured",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "status",
      type: "string",
      options: {
        list: ["Available", "Sold"],
      },
      initialValue: "Available",
    }),

    defineField({
      name: "createdAt",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
});