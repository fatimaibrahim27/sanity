import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";

interface Blog {
  title: string;
  summary: string;
  slug: { current: string };
  image: { url: string }; // More specific type for image
}

interface BlogProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogProps) {
  // Ensure the fallback image is available in the public folder or provide an external link.
  const imageUrl = urlForImage(blog.image)?.url() || "/placeholder.jpg"; // fallback if no image

  return (
    <section className="flex flex-col justify-between h-[480px] rounded bg-light/90 dark:bg-dark/40 shadow-md shadow-gray-300 dark:shadow-black/80 group hover:scale-105 transition-transform ease-out duration-700">
      {/* Image Section */}
      <div className="relative max-h-76 flex-1">
        <Image
          src={imageUrl} // Ensure this is a valid string URL
          alt={blog.title || "Blog Image"}
          layout="fill" // Ensure layout is defined properly
          className="object-cover rounded-t"
        />
      </div>

      {/* Title and Summary */}
      <div className="flex flex-col justify-between gap-y-4 p-4">
        <h2 className="text-lg font-semibold line-clamp-2 text-dark dark:text-light leading-tight mb-2">
          {blog.title || "Mountains Blog"} {/* Display fallback title if none */}
        </h2>
        <p className="text-dark/70 dark:text-light/70 line-clamp-3">
          {blog.summary || "No summary available."} {/* Display fallback summary if none */}
        </p>

        {/* Read More dynamic Link */}
        <Link href={`/blog/${blog.slug.current}`}>
          <span className="block px-4 py-1 text-center bg-accentDarkSecondary rounded text-dark font-semibold mt-4">
            Read More
          </span>
        </Link>
      </div>
    </section>
  );
}
