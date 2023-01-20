import React from "react";
import { Link, Outlet } from "react-router-dom";

const Courses = () => {
  return (
    <div className="w-full min-h-screen bg-[#251B37]">
      <div className="py-[4.5rem] flex flex-col text-slate-50 h-full w-[90%] mx-auto">
        <h1 className="text-5xl py-5">Courses</h1>
        <div className="flex flex-col-reverse gap-2 md:flex-row h-full">
          <div className="flex-[3] w-full">
            <Outlet />
          </div>
          <div className="flex-1 flex flex-col w-full h-full bg-[#BAD1C2] p-4 rounded">
            <h1 className="text-4xl text-gray-500 py-4">Categories</h1>
            <ul className="flex flex-wrap md:flex-col gap-2">
              <Link
                to="/courses"
                className="flex-auto items-center leading-10 px-4 rounded cursor-pointer  transition duration-200 bg-gray-100/80 font-medium text-gray-700 hover:text-black hover:bg-purple-700/80"
              >
                All Courses
              </Link>
              <Link
                to="/courses/javascript"
                className="flex-1 items-center leading-10 px-4 rounded cursor-pointer  transition duration-200 bg-gray-100/80 font-medium text-gray-700 hover:text-black hover:bg-purple-700/80"
              >
                Javascript
              </Link>
              <Link
                to="/courses/python"
                className="flex-1 items-center leading-10 px-4 rounded cursor-pointer  transition duration-200 bg-gray-100/80 font-medium text-gray-700 hover:text-black hover:bg-purple-700/80"
              >
                Python
              </Link>
              <Link
                to="/courses/ruby"
                className="flex-1 items-center leading-10 px-4 rounded cursor-pointer  transition duration-200 bg-gray-100/80 font-medium text-gray-700 hover:text-black hover:bg-purple-700/80"
              >
                Ruby
              </Link>
              <Link
                to="/courses/c++"
                className="flex-1 items-center leading-10 px-4 rounded cursor-pointer  transition duration-200 bg-gray-100/80 font-medium text-gray-700 hover:text-black hover:bg-purple-700/80"
              >
                C++
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
