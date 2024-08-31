export default function Header() {
  const links = [
    { id: 1, href: "/blog", text: "Home" },
    { id: 2, href: "/blog", text: "About" },
    { id: 3, href: "/blog", text: "Services" },
    { id: 4, href: "/blog", text: "Blog" },
    { id: 5, href: "/blog", text: "Portfolio" },
  ];
  return (
    <header className="sticky top-0 bg-white text-black p-4 shadow transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/blog" className="flex-shrink-0 ">
          <img src="/logo.png" alt="My Blog Logo" className="h-20" />
        </a>
        <div className="flex-grow flex items-center justify-end">
          <input type="checkbox" id="menu-toggle" className="hidden" />

          <nav
            id="mobile-menu"
            className="fixed inset-0 bg-white shadow-lg z-50 transform translate-y-full transition-transform duration-700 ease-in-out h-4/5 overflow-y-auto"
          >
            <a href="/blog" className="flex-shrink-0 p-2">
              <img src="/logo.png" alt="My Blog Logo" className="h-20" />
            </a>
            <div className="flex flex-col p-4 space-y-4">
              {links.map((link, index) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="text-gray-800 font-medium hover:text-[#3066c6] transition-colors duration-300"
                >
                  {link.text}
                </a>
              ))}
              <a
                key="mobile-contact-us"
                href="/blog"
                className="text-white font-medium bg-[#2b6fe8] py-2 px-4 rounded hover:bg-[#1d4ed8] transition-colors duration-300 text-center"
              >
                Contact Us
              </a>
            </div>
            <label
              htmlFor="menu-toggle"
              className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              <svg
                id="close-icon"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </label>
          </nav>

          <label
            htmlFor="menu-toggle"
            className="md:hidden flex items-center p-2 text-gray-500 hover:text-gray-700 cursor-pointer"
          >
            <svg
              id="menu-icon"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
            <svg
              id="close-icon"
              className="w-6 h-6 hidden"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </label>

          <nav className="hidden md:flex md:mr-4 space-x-8">
            {links.map((link, index) => (
              <a
                key={link.id}
                href={link.href}
                className="text-gray-800 font-medium hover:text-[#3066c6] transition-colors duration-300"
              >
                {link.text}
              </a>
            ))}
          </nav>
          <a
            key="contact-us"
            href="/blog"
            className="hidden md:inline-block text-white font-medium bg-[#2b6fe8] py-2 px-4 rounded hover:bg-[#1d4ed8] transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}
