import type { CollectionConfig } from "payload";

export const TelescopeComments: CollectionConfig = {
  slug: "telescope_comments",
  admin: { 
    useAsTitle: "comment",
    description: "User comments on telescope articles"
  },
  access: {
    read: () => true,
    
    create: () => true,
    
    update: ({ req: { user } }) => {
      if (user) {
        return true;
      }
      return false;
    },
    
    delete: ({ req: { user } }) => {
      if (user) {
        return true;
      }
      return false;
    },
  },
  fields: [
    { 
      name: "telescope_id", 
      type: "relationship", 
      relationTo: "telescope", 
      required: true,
      admin: {
        description: "The telescope article this comment belongs to"
      }
    },
    { 
      name: "comment", 
      type: "textarea", 
      required: true,
      admin: {
        description: "The comment content"
      }
    },
    { 
      name: "username", 
      type: "text", 
      required: true,
      admin: {
        description: "Name of the commenter"
      }
    },
    { 
      name: "user_email", 
      type: "email",
      admin: {
        description: "Email of the commenter (not displayed publicly)"
      }
    },
  ],
  timestamps: true,
};