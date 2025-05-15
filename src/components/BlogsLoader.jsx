import React from "react";

const BlogsLoader = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-12">
      <div className="blog-loader">
        <div className="blog-loader-circle"></div>
        <div className="blog-loader-circle"></div>
        <div className="blog-loader-circle"></div>
      </div>
      <p className="mt-4 text-gray-600 font-medium">Loading amazing content...</p>
    </div>
  );
};

export default BlogsLoader;