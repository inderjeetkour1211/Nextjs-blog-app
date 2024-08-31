import Link from "next/link";
import ShimmerUI from "./ShimmerUI";

export default function BlogCard({ blog }) {
  if (!blog) {
    return <ShimmerUI />;
  }

  return (
    <div className="border p-4 rounded shadow-md hover:shadow-lg transition transform hover:scale-105 duration-300 mt-7">
      <Link href={`/blog/${blog.id}`}>
        <div className="overflow-hidden rounded mb-4">
          <img
            src={blog.photo_url}
            alt={blog.title}
            className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-110"
          />
        </div>
        <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
        <p className="text-sm mb-2 font-medium text-gray-500">{blog.description}</p>
       
      </Link>
    </div>
  );
}
