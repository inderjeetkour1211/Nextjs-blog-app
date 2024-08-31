import Link from "next/link";

export default function Pagination({ currentPage, totalPages }) {
  const maxPagesToShow = 3;
  const pages = [];

  let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  let endPage = Math.min(
    totalPages,
    currentPage + Math.floor(maxPagesToShow / 2)
  );

  if (currentPage - Math.floor(maxPagesToShow / 2) < 1) {
    endPage = Math.min(
      totalPages,
      endPage + (Math.floor(maxPagesToShow / 2) - (currentPage - 1))
    );
  }

  if (currentPage + Math.floor(maxPagesToShow / 2) > totalPages) {
    startPage = Math.max(
      1,
      startPage - (currentPage + Math.floor(maxPagesToShow / 2) - totalPages)
    );
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center mt-10">
      {currentPage > 1 && (
        <Link
          href={`/blog?page=${currentPage - 1}#blog-section`}
          className="px-4 py-2 mr-2 bg-gray-200 rounded cursor-pointer"
        >
          Previous
        </Link>
      )}

      {startPage > 1 && (
        <>
          <Link
            href="/blog?page=1"
            className="px-4 py-2 mx-1 bg-gray-200 rounded cursor-pointer"
            key="first-page"
          >
            1
          </Link>
          {startPage > 2 && <span className="px-4 py-2 mx-1">...</span>}
        </>
      )}

      {pages.map((page) => (
        <Link
          key={page}
          href={`/blog?page=${page}#blog-section`}
          className={`px-4 py-2 mx-1 ${
            page === currentPage ? "bg-blue-500 text-white" : "bg-gray-200"
          } rounded cursor-pointer`}
        >
          {page}
        </Link>
      ))}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && (
            <span className="px-4 py-2 mx-1">...</span>
          )}
          <Link
            key="last-page"
            href={`/blog?page=${totalPages}`}
            className="px-4 py-2 mx-1 bg-gray-200 rounded cursor-pointer"
          >
            {totalPages}
          </Link>
        </>
      )}

      {currentPage < totalPages && (
        <Link
          key="next-page"
          href={`/blog?page=${currentPage + 1}#blog-section`}
          className="px-4 py-2 ml-2 bg-gray-200 rounded cursor-pointer"
        >
          Next
        </Link>
      )}
    </div>
  );
}
