import type { CollectionConfig } from "payload";

export const Links: CollectionConfig = {
  slug: "links",
  admin: {
    useAsTitle: "slug",
    description: "Manage short URLs and redirects",
    defaultColumns: ["slug", "destination", "isActive", "clickCount"],
    group: "Links & Redirects",
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  fields: [
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      label: "Short URL",
      admin: {
        description: 'Contoh: "instagram" untuk 180dcugm.com/go/instagram',
        placeholder: "instagram",
      },
      validate: (val: unknown) => {
        const value = val as string;
        if (!value) return "Slug is required";
        if (!/^[a-zA-Z0-9-]+$/.test(value)) {
          return "Hanya huruf (a-z, A-Z), angka, dan dash (-)";
        }
        // Reserved routes yang tidak boleh digunakan
        const reserved = [
          // System routes
          "admin",
          "api",
          "_next",
          "public",
          "assets",
          "dashboard",
          // App routes (pages)
          "aboutus",
          "academy",
          "apply",
          "bootcamp",
          "casecompetition",
          "industrialreport",
          "oprec",
          "portofolio",
          "store",
          "telescope",
        ];
        if (reserved.includes(value)) {
          return `"${value}" adalah reserved route dan tidak bisa digunakan`;
        }
        return true;
      },
    },
    {
      name: "destination",
      type: "text",
      required: true,
      label: "Destination URL",
      admin: {
        description: "URL lengkap dengan https://",
        placeholder: "https://180dcugm.com/@instagrammu",
      },
      validate: (val: unknown) => {
        const value = val as string;
        if (!value) return "Destination URL is required";
        try {
          new URL(value);
          return true;
        } catch {
          return "URL tidak valid. Pastikan menggunakan format lengkap (https://...)";
        }
      },
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      admin: {
        description: "Optional: Deskripsi untuk apa link ini",
        placeholder: "Link ke channel Instagram saya",
      },
    },
    {
      name: "isActive",
      type: "checkbox",
      defaultValue: true,
      label: "Active",
      admin: {
        description: "Uncheck untuk disable redirect sementara",
        position: "sidebar",
      },
    },
    {
      name: "clickCount",
      type: "number",
      defaultValue: 0,
      label: "Click Count",
      admin: {
        readOnly: true,
        description: "Jumlah total klik redirect",
        position: "sidebar",
      },
    },
    {
      name: "lastClickedAt",
      type: "date",
      label: "Last Clicked",
      admin: {
        readOnly: true,
        description: "Terakhir kali di-klik",
        position: "sidebar",
        date: {
          displayFormat: "dd/MM/yyyy HH:mm",
        },
      },
    },
  ],
  timestamps: true,
};
