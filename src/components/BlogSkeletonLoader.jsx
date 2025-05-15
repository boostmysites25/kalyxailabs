import React from "react";

const BlogSkeletonLoader = ({ count = 6 }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array(count)
        .fill()
        .map((_, index) => (
          <div key={index} className="blog-skeleton p-5 rounded-xl">
            <div className="blog-skeleton-img"></div>
            <div className="blog-skeleton-title"></div>
            <div className="blog-skeleton-text"></div>
            <div className="blog-skeleton-text"></div>
          </div>
        ))}
    </div>
  );
};

export default BlogSkeletonLoader;