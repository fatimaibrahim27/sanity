interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  console.log("Slug passed:", slug);

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
    return null;
  }

  const imageUrl = blog.image ? urlForImage(blog.image).url() : null;
  console.log("Image URL:", imageUrl);

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
}
