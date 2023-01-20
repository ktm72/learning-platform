import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-slate-50 flex flex-col rounded-lg hover:shadow-md hover:shadow-slate-400/60">
      <div className="object-cover w-full h-56 rounded-lg overflow-hidden">
        <img
          className="object-cover w-full h-auto object-center rounded-lg"
          src={blog.img}
          alt=""
        />
      </div>

      <div className="flex-1 flex-col justify-between py-6 mx-6">
        <div className="flex w-full justify-between items-center my-4">
          <h1 className="text-gray-800 text-xl font-semibold dark:text-white">
            {blog.topic}
          </h1>
          <span className={`text-gray-500 text-sm dark:text-gray-300`}>
            On: {blog.published}
          </span>
        </div>
        <p className="text-gray-800 text-xl font-thin dark:text-white">
          {blog.description}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
