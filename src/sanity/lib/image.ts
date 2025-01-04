import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

// Sanity client configuration
export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  apiVersion: "2023-01-01", // Adjust this to match your API version
  useCdn: process.env.NODE_ENV === "production",
};

// Initialize Sanity client
export const client = createClient(config);

// Create the image URL builder
const builder = imageUrlBuilder(client);

// Function to get the image URL
export function urlForImage(source: any) {
  return builder.image(source);
}
