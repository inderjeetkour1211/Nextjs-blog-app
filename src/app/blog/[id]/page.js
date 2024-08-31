export const revalidate = 10; 
export default async function BlogPostPage({ params }) {
  const { id } = params; 

  if (!id) {
    console.error("ID is undefined");
    return <p>Invalid blog ID.</p>;
  }

  try {
    const res = await fetch(
      `https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`
    );

    if (!res.ok) {
      console.error("Failed to fetch the blog:", res.statusText);
      return <p>Error fetching blog.</p>;
    }

    const blog = await res.json();

    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-7  mt-9">{blog.blog.title}</h1>

        <img
          src={blog.blog.photo_url}
          alt={blog.blog.photo_url}
          className="w-full h-96 object-cover rounded mb-4"
        />
        <h2 className="text-xl font-bold mt-2 mb-2">{blog.blog.description}</h2>

        <p>{blog.blog.content_text}</p>
      </div>
    );
  } catch (error) {
    console.error("Error during fetch:", error);
    return <p>Error fetching blog data.</p>;
  }
}
