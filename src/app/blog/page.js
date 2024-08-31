
import Hero from "@/componenets/Banner";
import BlogCard from "../../componenets/BlogCard";
import Pagination from "../../componenets/Pagination";
import ShimmerUI from "@/componenets/ShimmerUI";
export const revalidate = 10; 

async function fetchBlogs(offset, limit) {
  try {
    const res = await fetch(
      `https://api.slingacademy.com/v1/sample-data/blog-posts?offset=${offset}&limit=${limit}`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch blogs");
    }
    const data = await res.json();
    return { blogs: data.blogs || [], total: data.total_blogs || 0 };
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return { blogs: [], total: 0 };
  }
}

export default async function BlogPage({ searchParams }) {
  const currentPage = parseInt(searchParams.page) || 1;
  const blogsPerPage = 12;
  const offset = (currentPage - 1) * blogsPerPage;

  const { blogs, total } = await fetchBlogs(offset, blogsPerPage);

  const totalPages = Math.ceil(total / blogsPerPage);
  const blogsArray = Array.isArray(blogs) ? blogs : [];

  return (
    <div>
      <Hero/>
      <div id="blog-section" className="container mx-auto p-4 sm:pr-7 sm:pl-7">
        <div  className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {blogsArray.length > 0 ? (
            blogsArray.map((blog) => <BlogCard key={blog.id} blog={blog} />)
          ) : (
            Array.from({ length: blogsPerPage }).map((_, index) => (
              <ShimmerUI key={`shimmer-${index}`} />
            ))
          )}
        </div>
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </div>
  );
}
