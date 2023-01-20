import React from "react";
import { useOutletContext } from "react-router-dom";

const About = () => {
  const [dark] = useOutletContext();
  return (
    <div
      className={`${dark ? "bg-gray-900" : "bg-slate-50"} w-full min-h-screen`}
    >
      <div className="flex flex-col w-[90%] mx-auto pt-[4.5rem]">
        <section className="flex flex-col md:flex-row py-8">
          <div className="flex-1 flex flex-col justify-center gap-5 w-full max-h-screen text-center md:text-start">
            <h1 className="text-6xl text-purple-700">Questions?</h1>
            <h3
              className={`${
                dark ? "text-gray-400" : "text-gray-700"
              } sm:pr-6 text-xl text-start`}
            >
              You may have a large set of questions on your mind. Don't worry we
              are gonna help you along the way. You can chat and email whenever
              questions arises. But now, there is given some answer of common
              questions. Check it below!
            </h3>
          </div>
          <div className="flex-1">
            <img src="https://i.ibb.co/FqhZ6LB/img4.png" alt="" />
          </div>
        </section>
        <section className="w-[96%] md:w-4/6 mx-auto py-10">
          <div className="bg-blue-100 rounded-lg shadow-xl">
            <h3 className="px-4 py-8 text-black text-2xl uppercase font-bold">
              Frequently Asked Questions
            </h3>

            <div>
              {/* q-1  */}
              <div className="p-4">
                <details className="group transition duration-500 bg-indigo-200	 p-2 md:p-8 border-solid border-l-8 border-indigo-400 rounded-md hover:bg-indigo-400">
                  <summary className=" flex items-center justify-space-between focus:outline-none">
                    <header className="flex justify-center items-center cursor-pointer">
                      <svg
                        className="w-10 h-10 group-open:scale-100 group-open:rotate-45"
                        viewBox="0 0 44 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M32.6066 22H11.3934"
                          stroke="#202842"
                          strokeWidth="1.875"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M22 11.3934V32.6066"
                          stroke="#202842"
                          strokeWidth="1.875"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <h1 className="md:leading-5 flex self-center text-black text-xl group-open:font-bold">
                        Who is Deal Brainee?
                      </h1>
                    </header>
                  </summary>
                  <div className="content ml-10 text-sm md:text-lg">
                    <p>
                      Deal Brainee is a online learing platform. We help to
                      provide courses on various topic. Check our courses.
                    </p>
                  </div>
                </details>
              </div>
              {/* q-2  */}
              <div className="card p-4">
                <details className="group transition duration-500 bg-yellow-200	hover:bg-yellow-400 p-2 md:p-8 border-solid border-l-8 border-yellow-400 rounded-md">
                  <summary className="flex items-center justify-space-between focus:outline-none">
                    <header className="flex justify-center items-center cursor-pointer">
                      <svg
                        className="w-10 h-10 group-open:scale-100 group-open:rotate-45"
                        viewBox="0 0 44 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M32.6066 22H11.3934"
                          stroke="#202842"
                          strokeWidth="1.875"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M22 11.3934V32.6066"
                          stroke="#202842"
                          strokeWidth="1.875"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <h1 className="md:leading-5 flex self-center text-black text-xl group-open:font-bold">
                        How much does it cost?
                      </h1>
                    </header>
                  </summary>
                  <div className="content ml-10 text-sm md:text-lg">
                    <p>
                      Our monthly bill not gonna affect you. It is just 400BDT
                      per month. You can choose to pay as course based as well.
                    </p>
                  </div>
                </details>
              </div>
              {/* q-3  */}
              <div className="card p-4">
                <details className="group transition duration-500 bg-pink-200	hover:bg-pink-400 p-2 md:p-8 border-solid border-l-8 border-pink-400 rounded-md">
                  <summary className="flex items-center justify-space-between focus:outline-none">
                    <header className="flex justify-center items-center  cursor-pointer">
                      <svg
                        className="w-[40px] h-[40px] group-open:scale-100 group-open:rotate-45"
                        viewBox="0 0 44 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M32.6066 22H11.3934"
                          stroke="#202842"
                          strokeWidth="1.875"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M22 11.3934V32.6066"
                          stroke="#202842"
                          strokeWidth="1.875"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <h1 className="md:leading-5  text-black text-xl group-open:font-bold">
                        Can I enroll any course on monthly pack?
                      </h1>
                    </header>
                  </summary>
                  <div className="content ml-10 text-sm md:text-lg">
                    <p>
                      Of course. We not gonna charge you if you use monthly
                      pack. Our aim is to provide you top class course, so that
                      anyone can have access to education.
                    </p>
                  </div>
                </details>
              </div>
              <div className="p-4">
                <details className="group transition duration-500 bg-indigo-200	 p-2 md:p-8 border-solid border-l-8 border-indigo-400 rounded-md hover:bg-indigo-400">
                  <summary className=" flex items-center justify-space-between focus:outline-none">
                    <header className="flex justify-center items-center cursor-pointer">
                      <svg
                        className="w-[40px] h-[40px] group-open:scale-100 group-open:rotate-45"
                        viewBox="0 0 44 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M32.6066 22H11.3934"
                          stroke="#202842"
                          strokeWidth="1.875"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M22 11.3934V32.6066"
                          stroke="#202842"
                          strokeWidth="1.875"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <h1 className="md:leading-5 flex self-center text-black text-xl group-open:font-bold">
                        Do you provide money back gurantee?
                      </h1>
                    </header>
                  </summary>
                  <div className="content ml-10 text-sm md:text-lg">
                    <p>
                      Yes, we commit to give your money back. If, it's within a
                      month. However, we are pretty sure, you not gonna regret.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
