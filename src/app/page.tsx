import { client } from "../sanity/lib/client";
import BlogCard from "@/app/components/Blogcard";

export const revalidate = 60; // seconds

// Define the type for the blog
interface Blog {
  _id: string;
  title: string;
  slug: { current: string };  // Updated to match the structure of the slug
  summary: string;
  image: { _type: string; asset: { _ref: string } };  // More specific type for image
  content: string;
  author: string;
}

export default async function Home() {
  const query = `*[_type == "blog"] | order(_createdAt asc) {
    _id, title, slug, summary, image, content, author
  }`;

  // Fetch blogs from Sanity
  const blogs: Blog[] = await client.fetch(query);

  // If no blogs are found, show a message
  if (!blogs.length) {
    return <div>No blogs found</div>; // Optionally display a message
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <h1 className="text-2xl font-bold uppercase my-12 text-center text-dark dark:text-light sm:text-3xl lg:text-5xl">
          Most Recent Blog
        </h1>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogs.map((blog) => (
            <BlogCard blog={blog} key={blog._id} />
          ))}
        </section>
      </main>
    </div>
  );
}

