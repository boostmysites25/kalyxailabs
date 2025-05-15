import { lazy, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getBlogBySlug } from "../utils/api";
import { LoadingSpinner } from "../components/LoadingSpinner";
import {
  FaCalendarAlt,
  FaUser,
  FaTags,
  FaArrowLeft,
  FaShareAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const BlogsSection = lazy(() => import("../components/website/BlogsSection"));

const BlogDetails = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showShareOptions, setShowShareOptions] = useState(false);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        setLoading(true);
        // Fetch the specific blog by slug
        const blogResponse = await getBlogBySlug(slug);
        setBlog(blogResponse.data.blog);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching blog details:", err);
        setError("Failed to load blog details. Please try again later.");
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlogData();
      // Scroll to top when blog changes
      window.scrollTo(0, 0);
    }
  }, [slug]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = blog?.title || "Blog Post";

    let shareUrl;
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          url
        )}&text=${encodeURIComponent(title)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          url
        )}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, "_blank", "width=600,height=400");
  };

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="wrapper pt-[5rem] text-center text-red-500">
        {error || "Blog not found"}
      </div>
    );
  }

  return (
    <div className="pt-[10rem] pb-[4rem]">
      <div className="wrapper max-w-5xl mx-auto px-4">
        {/* Back Button */}
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 mb-6 text-primary hover:text-primary/80 transition-colors"
          data-aos="fade-up"
        >
          <FaArrowLeft className="w-4 h-4" />
          <span>Back to Blogs</span>
        </Link>

        {/* Featured Image */}
        <div
          className="relative overflow-hidden rounded-2xl shadow-lg mb-8"
          data-aos="fade-up"
        >
          <img
            src={blog.imageUrl}
            className="w-full aspect-video md:aspect-[16/7] object-cover transition-transform hover:scale-105 duration-700"
            alt={blog.imageAlt || blog.title}
          />
          {blog.isFeatured && (
            <div className="absolute top-4 left-4 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
              Featured
            </div>
          )}
        </div>

        {/* Blog Header */}
        <div className="mb-8" data-aos="fade-up">
          {/* Category */}
          <div className="mb-3">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
              {blog.categoryId?.name}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            {blog.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
            <div className="flex items-center gap-2">
              <FaUser className="w-4 h-4 text-primary" />
              <span>{blog.author?.name || blog.authorId?.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="w-4 h-4 text-primary" />
              <span>{formatDate(blog.publishDate)}</span>
            </div>
            {blog.tags && blog.tags.length > 0 && (
              <div className="flex items-center gap-2">
                <FaTags className="w-4 h-4 text-primary" />
                <div className="flex flex-wrap gap-1">
                  {blog.tags.map((tag, index) => (
                    <span key={index} className="text-sm">
                      {tag}
                      {index < blog.tags.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Excerpt */}
          {blog.excerpt && (
            <p className="text-lg text-gray-700 italic border-l-4 border-primary pl-4 py-2 bg-primary/5 rounded-r-lg">
              {blog.excerpt}
            </p>
          )}
        </div>

        {/* Blog Content */}
        <div
          data-aos="fade-up"
          className="reset-html-content"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* Author Info */}
        {(blog.author || blog.authorId) && (
          <div
            className="mt-10 p-6 bg-white rounded-xl shadow-sm border border-gray-100"
            data-aos="fade-up"
          >
            <h3 className="text-lg font-semibold mb-3">About the Author</h3>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                {(blog.author?.name || blog.authorId?.name).charAt(0)}
              </div>
              <div>
                <h4 className="font-medium text-lg">
                  {blog.author?.name || blog.authorId?.name}
                </h4>
                <p className="text-gray-600">Content Writer</p>
              </div>
            </div>
          </div>
        )}
        {/* Share Buttons */}
        <div className="wrapper relative my-8" data-aos="fade-up">
          <button
            onClick={() => setShowShareOptions(!showShareOptions)}
            className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 transition-colors px-4 py-2 rounded-full"
          >
            <FaShareAlt className="w-4 h-4" />
            <span>Share</span>
          </button>

          {showShareOptions && (
            <div className="absolute left-0 mt-2 bg-white shadow-md rounded-lg p-3 z-10 flex gap-3">
              <button
                onClick={() => handleShare("facebook")}
                className="text-blue-600 hover:text-blue-800 p-2 rounded-full hover:bg-gray-100"
              >
                <FaFacebook className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleShare("twitter")}
                className="text-blue-400 hover:text-blue-600 p-2 rounded-full hover:bg-gray-100"
              >
                <FaTwitter className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleShare("linkedin")}
                className="text-blue-700 hover:text-blue-900 p-2 rounded-full hover:bg-gray-100"
              >
                <FaLinkedin className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Related Blogs Section */}
      <div className="mt-16" data-aos="fade-up">
        <BlogsSection slug={slug} />
      </div>
    </div>
  );
};

export default BlogDetails;
