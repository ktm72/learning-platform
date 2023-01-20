import React from "react";
import { useOutletContext } from "react-router-dom";
import BlogCard from "./BlogCard";
import { blogs } from "../../fakeData/data";

const Blog = () => {
  const [dark] = useOutletContext();

  return (
    <div className="w-full min-h-screen bg-gray-900 text-slate-50">
      <div className="flex flex-col w-[90%] mx-auto pt-[4.5rem]">
        <section
          className={`${dark ? "bg-purple-700" : "bg-white"} dark:bg-gray-900`}
        >
          <div className="container px-6 py-10 mx-auto">
            <h1
              className={`${
                dark ? "text-white" : "text-gray-500"
              } text-3xl font-semibold capitalize lg:text-4xl dark:text-white`}
            >
              Blog
            </h1>

            <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
              {blogs?.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
