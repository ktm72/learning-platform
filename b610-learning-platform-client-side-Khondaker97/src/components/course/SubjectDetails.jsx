import React from "react";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { cartContext } from "../../context/CartContext";

const SubjectDetails = () => {
  const location = useLocation();
  const { course } = location.state;
  const navigate = useNavigate();

  const { setCart } = useContext(cartContext);
  const handleCart = (course) => {
    const newCourse = {
      img: course.img,
      topic: course.topics,
      id: course.id,
    };
    setCart((prev) => [...prev, newCourse]);
    navigate("/checkout");
  };
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
        <p>{course?.description}</p>
      </div>
      <button
        onClick={() => handleCart(course)}
        className="py-2 px-4 text-center leading-10 rounded cursor-pointer  transition duration-200 bg-gray-100/80 text-lg font-medium text-gray-700 hover:text-black hover:bg-purple-700/80"
      >
        GET PREMIUM ACCESS
      </button>
    </div>
  );
};

export default SubjectDetails;
