import React from "react";
import { Link, useOutletContext } from "react-router-dom";
const Home = () => {
  const [dark] = useOutletContext();
  return (
    <div className={`${dark ? "bg-gray-900" : "bg-white"} w-full h-auto`}>
      <div className="flex flex-col w-[90%] mx-auto pt-[4.5rem]">
        <div className="flex flex-col sm:flex-row py-8">
          <div className="flex-1 flex flex-col justify-center gap-5 w-full max-h-screen text-start">
            <h1 className="text-6xl text-purple-700">Deal Brainee</h1>
            <h3
              className={`${
                dark ? "text-gray-400" : "text-gray-700"
              } sm:pr-6 text-xl text-start`}
            >
              We provide one of the best content about programming knowledge.
              Our content get you through some of the best learning path and
              guide you along the way.
            </h3>
          </div>
          <div className="flex-1">
            <img src="https://i.ibb.co/TbNCdVk/img2.png" alt="" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row-reverse py-8">
          <div className="flex-1 flex flex-col justify-center gap-5 w-full max-h-screen text-start sm:text-end">
            <h1 className="text-6xl text-purple-700">Mentoring</h1>
            <h3
              className={`${
                dark ? "text-gray-400" : "text-gray-700"
              } text-xl text-start sm:text-end sm:pl-10`}
            >
              Our mentor not only just teach. They will guide you in tech
              sessions once a week. So, Don't be afraid to loose your track.
              Nobody is perfect. All the contents are will be there. So you can
              watch anytime, anywhere.
            </h3>
          </div>
          <div className="flex-1">
            <img src="https://i.ibb.co/4Z0rX4D/img1.png" alt="" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row  py-8">
          <div className="flex-1 flex flex-col justify-center gap-5 w-full max-h-screen text-start">
            <h1 className="text-6xl text-purple-700">Let's Get Start</h1>
            <h3
              className={`${
                dark ? "text-gray-400" : "text-gray-700"
              } pr-6 text-xl  text-start`}
            >
              Why are you waiting for? checkout our courses. Get premium access.
              See our content. Learn and start building your career.
            </h3>

            <Link to="/courses/all" className="w-fit">
              <button className="text-start w-fit px-8 py-4 rounded-md font-bold text-2xl text-slate-50 bg-purple-600 hover:bg-sky-500 transition">
                See Courses
              </button>
            </Link>
          </div>
          <div className="flex-1">
            <img src="https://i.ibb.co/qMgFktD/img3.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
