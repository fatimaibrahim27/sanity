import { createClient } from "next-sanity";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  apiVersion: "2023-01-01", // Use the current date or the one you set in Sanity
  useCdn: process.env.NODE_ENV === "production",
};

export const client = createClient(config);
