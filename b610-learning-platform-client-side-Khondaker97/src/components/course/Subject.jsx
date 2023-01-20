import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCard from "./Course";

const Subject = () => {
  const data = useLoaderData();
  return (
    <>
      {data && (
        <div className="flex flex-col w-full h-auto">
          <h1 className="text-gray-400 text-3xl bg-slate-50 w-full py-2 px-4 rounded">
            {data?.id.toUpperCase()}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center w-full h-auto pt-4 gap-2">
            {data?.courses.map((course) => (
              <CourseCard course={course} key={course.id} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Subject;
