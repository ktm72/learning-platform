import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCard from "./Course";

const AllCourse = () => {
  const { result } = useLoaderData();

  return (
    <div className="flex flex-col w-full h-auto">
      <h1 className="text-gray-400 text-3xl bg-slate-50 w-full py-2 px-4 rounded">
        All Courses
      </h1>
      <div className="pt-4 grid sm:grid-cols-2 gap-2">
        {result &&
          result.map((topic) => (
            <div key={topic.id} className="grid gap-2">
              {topic?.courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllCourse;
