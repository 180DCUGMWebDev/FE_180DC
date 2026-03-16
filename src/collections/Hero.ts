import type { CollectionConfig } from "payload";

export const Hero: CollectionConfig = {
  slug: "hero",
  admin: {
    useAsTitle: "newsTitle",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "notification",
      type: "text",
      required: true,
      label: "Notification Message",
      admin: {
        description: "This message will be displayed at the top notification banner on the homepage.",
      },
    },
    {
      name: "newsLink",
      type: "text",
      required: false,
      label: "News Link",
      admin: {
        description: "The link the news card will redirect to when clicked/hovered.",
      },
    },
    {
      name: "newsImage",
      type: "upload",
      relationTo: "media",
      required: true,
      label: "News Image",
      admin: {
        description: "The image that will be displayed in the news section of the homepage.",
      },
    },
    {
      name: "newsTitle",
      type: "text",
      required: false,
      label: "News Title",
      admin: {
        description: "The title of the news item.",
      },
    },
    {
      name: "newsContent",
      type: "text",
      required: false,
      label: "News Content",
      admin: {
        description: "The content of the news item.",
      },
    }
  ],
};
