import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBlogs } from "../utils/api";
import { FaCalendarAlt, FaUser, FaTags, FaSearch } from "react-icons/fa";
import BlogsLoader from "../components/BlogsLoader";
import BlogSkeletonLoader from "../components/BlogSkeletonLoader";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await getBlogs();
        setBlogs(response.data.blogs);

        // Extract unique categories
        const uniqueCategories = [
          ...new Set(
            response.data.blogs
              .map((blog) => blog.categoryId?.name)
              .filter(Boolean)
          ),
        ];
        setCategories(uniqueCategories);

        setLoading(false);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("Failed to load blogs. Please try again later.");
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Format date function
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  // Filter blogs based on search term and category
  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      searchTerm === "" ||
      blog.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.tags?.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === "" || blog.categoryId?.name === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Function to truncate text if needed
  const truncateText = (text, maxLength = 100) => {
    if (!text) return "";
    return text.length > maxLength
      ? `${text.substring(0, maxLength)}...`
      : text;
  };

  return (
    <div className="pt-[10rem] pb-[4rem] bg-gradient-to-b from-[#f8e4de] to-[#f5f5f5]">
      <div className="wrapper max-w-6xl mx-auto">
        <h1 data-aos="fade-up" className="section-heading text-center">
          Our Insights & Articles
        </h1>

        {/* Search and Filter Section */}
        <div data-aos="fade-up" className="mt-8 mb-10">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            {/* Category Filter */}
            {categories.length > 0 && (
              <div className="flex-shrink-0">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white"
                >
                  <option value="">All Categories</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>

        {/* Loading State */}
        {loading ? (
          <>
            <BlogsLoader />
            <div className="mt-8">
              <BlogSkeletonLoader />
            </div>
          </>
        ) : error ? (
          <div className="text-center py-10">
            <div className="text-red-500 mb-4 text-lg">{error}</div>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors"
            >
              Try Again
            </button>
          </div>
        ) : (
          <>
            {/* Blog Grid */}
            <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBlogs.length > 0 ? (
                filteredBlogs.map((blog) => (
                  <div
                    key={blog._id}
                    data-aos="fade-up"
                    className="group bg-white overflow-hidden rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="relative overflow-hidden">
                      <Link to={`/blogs/${blog.slug}`}>
                        <img
                          src={blog.imageUrl}
                          alt={blog.imageAlt || blog.title}
                          className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </Link>
                      {blog.isFeatured && (
                        <div className="absolute top-3 left-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                          Featured
                        </div>
                      )}
                      {blog.categoryId?.name && (
                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-xs font-medium">
                          {blog.categoryId.name}
                        </div>
                      )}
                    </div>

                    <div className="p-5 space-y-3">
                      {/* Meta Info */}
                      <div className="flex items-center text-xs text-gray-500 space-x-3">
                        <div className="flex items-center">
                          <FaCalendarAlt className="mr-1 text-primary" />
                          <span>{formatDate(blog.publishDate)}</span>
                        </div>
                        {blog.author?.name && (
                          <div className="flex items-center">
                            <FaUser className="mr-1 text-primary" />
                            <span>{blog.author.name}</span>
                          </div>
                        )}
                      </div>

                      {/* Title */}
                      <Link
                        to={`/blogs/${blog.slug}`}
                        className="block text-lg font-semibold line-clamp-2 group-hover:text-primary transition-all duration-300"
                      >
                        {blog.title}
                      </Link>

                      {/* Excerpt */}
                      <p className="text-gray-600 line-clamp-3">
                        {blog.excerpt}
                      </p>

                      {/* Read More Link */}
                      <div className="pt-2">
                        <Link
                          to={`/blogs/${blog.slug}`}
                          className="inline-block text-primary font-medium hover:underline"
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-10">
                  <h3 className="text-xl font-medium mb-2">No blogs found</h3>
                  <p className="text-gray-600 mb-4">
                    {searchTerm || selectedCategory
                      ? "Try adjusting your search or filter criteria."
                      : "Check back later for new content."}
                  </p>
                  {(searchTerm || selectedCategory) && (
                    <button
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedCategory("");
                      }}
                      className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors"
                    >
                      Clear Filters
                    </button>
                  )}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Blogs;
