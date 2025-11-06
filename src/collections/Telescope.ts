import type { CollectionConfig } from "payload";

export const Telescope: CollectionConfig = {
  slug: "telescope",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Article Title",
    },
    {
      name: "author",
      type: "text",
      required: true,
      label: "Author Name",
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: {
        description: "Eh kalau bisa sih kecil semua terus gaada spasi, dan juga gaada simbol yaa",
      },
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
      label: "Article Image",
    },
    {
      name: "description",
      type: "textarea",
      required: false,
      label: "Article Description",
    },
    {
      name: "content",
      type: "richText",
      required: false,
      label: "Article Content",
    },
    {
      name: "publishedDate",
      type: "date",
      required: false,
      label: "Published Date",
    },
  ],
};
