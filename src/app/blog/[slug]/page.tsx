import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";
import { notFound } from "next/navigation";
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

// Define the Comment interface for proper typing
interface Comment {
  _id: string;
  name: string;
  email: string;
  text: string;
}

interface BlogPageProps {
  params: { slug: string };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = params;
  console.log("Slug passed:", slug);

  // Updated query to fetch blog data and comments
  const query = `*[_type == "blog" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    summary,
    image,
    content,
    "comments": *[_type == "comment" && blog._ref == ^._id] {
      _id,
      name,
      text,
      email
    }
  }`;

  const blog = await client.fetch(query, { slug });
  console.log("Fetched Blog:", blog);

  if (!blog) {
    console.log("Blog not found");
    notFound();
    return null; // Ensure you return something if the page is not found
  }

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold my-4">{blog.title}</h1>

      {/* Blog Image */}
      {blog.image && (
        <div className="relative w-full h-96">
          <Image
            src={urlForImage(blog.image).url()}
            alt={blog.title}
            className="rounded object-cover"
            width={1200}  // Set the desired width of the image
            height={600}  // Set the desired height of the image
          />
        </div>
      )}

      {/* Blog Summary */}
      <p className="my-4">{blog.summary}</p>

      {/* Blog Content */}
      <div>
        <PortableText value={blog.content} />
      </div>

      {/* Comments Section */}
      <section className="mt-8">
        <h2 className="text-xl font-bold">Comments</h2>

        {/* Display Comments */}
        {blog.comments && blog.comments.length > 0 ? (
          <ul className="space-y-4">
            {blog.comments.map((comment: Comment) => (
              <li key={comment._id} className="border-b pb-4">
                <p className="font-semibold">{comment.name} ({comment.email})</p>
                <p>{comment.text}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No comments yet. Be the first to comment!</p>
        )}
      </section>

      {/* Comment Form (Optional) */}
      {/* This is where you'd include a form to submit new comments */}
    </main>
  );
}
