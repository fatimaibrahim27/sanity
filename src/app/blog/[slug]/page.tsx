import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";
import { notFound } from "next/navigation";
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

interface Comment {
  _id: string;
  name: string;
  email: string;
  text: string;
}

interface Blog {
  _id: string;
  title: string;
  slug: { current: string };
  summary: string;
  image: any;
  content: any;
  comments: Comment[];
}

async function fetchBlogData(slug: string): Promise<Blog | null> {
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
  return blog || null;
}

const BlogPage = async ({ params }: { params: { slug: string } }) => {
  const blog = await fetchBlogData(params.slug);

  if (!blog) {
    notFound();
  }

  const imageUrl = blog.image ? urlForImage(blog.image).url() : null;

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold my-4">{blog.title}</h1>

      {imageUrl && (
        <div className="relative w-full h-96">
          <Image
            src={imageUrl}
            alt={blog.title}
            className="rounded object-cover"
            width={1200}
            height={600}
          />
        </div>
      )}

      <p className="my-4">{blog.summary}</p>

      <div>
        <PortableText value={blog.content} />
      </div>

      <section className="mt-8">
        <h2 className="text-xl font-bold">Comments</h2>

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
    </main>
  );
};

export default BlogPage;
