import React from "react";
import { Link, useParams } from "react-router-dom";
const CourseCard = ({ course }) => {
  const { courseId } = useParams();

  return (
    <div className="flex flex-col w-full rounded-md overflow-hidden border border-slate-500 bg-gray-600 shadow-md h-full">
      <div className="rounded-tl-md overflow-hidden w-full h-[280px]">
        <img
          src={course.img}
          alt={course.topics}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h1 className="text-3xl">{course.topics}</h1>
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-xl text-yellow-400">
            {course.duration}
          </h3>
          <strong className="font-bold text-xl text-yellow-400">
            rating: {course.rating}
          </strong>
        </div>
        <p>{course?.description.slice(0, 175)}...</p>
      </div>
      <Link
        className="py-2 px-4 mt-auto text-center leading-10 rounded cursor-pointer  transition duration-200 bg-gray-100/80 text-lg font-medium text-gray-700 hover:text-black hover:bg-purple-700/80"
        to={`/courses/${courseId}/${course.id}`}
        state={{ from: courseId, course: course }}
      >
        See Details
      </Link>
    </div>
  );
};

export default CourseCard;
