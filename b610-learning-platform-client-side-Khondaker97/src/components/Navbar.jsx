import React, { useContext, useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { SlClose } from "react-icons/sl";
import { CiUser } from "react-icons/ci";
import { BsSun, BsFillSunFill, BsCart, BsCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/UserContext";
import { cartContext } from "../context/CartContext";
const Navbar = ({ dark, setDark }) => {
  const [dropClicked, setdropClicked] = useState(false);
  const [userDetailsMenu, setUserDetailsMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const { user, logOut, setSignedIn, signedIn } = useContext(AuthContext);
  const { userLog } = useContext(cartContext);

  const handleDropDown = (title) => {
    if (title === "usermenu") {
      setUserDetailsMenu((prev) => !prev);
    } else {
      setdropClicked((prev) => !prev);
    }
  };
  const handleDarkMode = (mode) => {
    setDark((prev) => !prev);
    userLog[mode] = !dark;
    localStorage.setItem("userLog", JSON.stringify(userLog));
  };

  const handleSignOut = () => {
    setSignedIn((prev) => !prev);
    logOut();
  };
  const handleMenu = (toggle) => {
    if (toggle === "close") {
      setShowMenu((prev) => !prev);
    } else {
      setShowMenu((prev) => !prev);
    }
  };

  return (
    <div className="flex flex-col">
      <nav
        className="flex justify-around py-4 bg-purple-500/80
            backdrop-blur-md shadow-md w-full
            fixed top-0 left-0 right-0"
      >
        {/* <!-- Logo Container --> */}
        <div className="flex items-center">
          <Link to="/" className="cursor-pointer">
            <h3 className="text-4xl text-white font-bold">DB.</h3>
          </Link>
        </div>

        {/* <!-- Links Section --> */}
        <div className="hidden md:flex gap-1">
          <Link
            to="/home"
            className="flex items-center leading-10 px-4 rounded cursor-pointer  transition duration-200 bg-sky-300 font-medium text-white hover:text-black hover:bg-gray-100"
          >
            Home
          </Link>

          <li className="block relative" onClick={handleDropDown}>
            <div className="flex items-center leading-10 px-4 rounded cursor-pointer  transition duration-200 bg-sky-300 font-medium text-white hover:text-black hover:bg-gray-100">
              <span>Courses</span>
              <span className="ml-2 text-xl">
                <MdKeyboardArrowDown />
              </span>
            </div>
            <div
              className={`${
                dropClicked
                  ? "block translate-y-1 h-auto opacity-100"
                  : "invisible translate-y-0 h-0 opacity-0 "
              }  bg-white shadow-md rounded border border-gray-300 text-sm absolute transition ease-linear duration-300 top-full left-0 mt-1 w-56`}
            >
              <span className="absolute top-0 left-0 w-3 h-3 bg-white border transform rotate-45 -mt-1 ml-6"></span>
              <div className="bg-white rounded w-full relative z-30 py-1">
                <ul className="list-reset">
                  <li className="relative">
                    <Link
                      to="/courses"
                      className="px-4 py-2 flex w-full items-start hover:bg-gray-100  hover: transition-colors duration-100 cursor-pointer"
                    >
                      <span className="flex-1">All Courses</span>
                    </Link>
                  </li>
                  <li className="relative">
                    <Link
                      to="/courses/javascript"
                      className="px-4 py-2 flex w-full items-start hover:bg-gray-100  hover: transition-colors duration-100 cursor-pointer"
                    >
                      <span className="flex-1">Javascript</span>
                    </Link>
                  </li>
                  <li className="relative">
                    <Link
                      to="/courses/python"
                      className="px-4 py-2 flex w-full items-start hover:bg-gray-100  hover: transition-colors duration-100 cursor-pointer"
                    >
                      <span className="flex-1">Python</span>
                    </Link>
                  </li>
                  <li className="relative">
                    <Link
                      to="/courses/ruby"
                      className="px-4 py-2 flex w-full items-start hover:bg-gray-100  hover: transition-colors duration-100 cursor-pointer"
                    >
                      <span className="flex-1">Ruby</span>
                    </Link>
                  </li>
                  <li className="relative">
                    <Link
                      to="/courses/c++"
                      className="px-4 py-2 flex w-full items-start hover:bg-gray-100  hover: transition-colors duration-100 cursor-pointer"
                    >
                      <span className="flex-1">C++</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <Link
            to="/about"
            className="flex items-center leading-10 px-4 rounded cursor-pointer  transition duration-200 bg-sky-300 font-medium text-white hover:text-black hover:bg-gray-100"
          >
            About
          </Link>
          <Link
            to="/blog"
            className="flex items-center leading-10 px-4 rounded cursor-pointer  transition duration-200 bg-sky-300 font-medium text-white hover:text-black hover:bg-gray-100"
          >
            Blog
          </Link>
        </div>

        {/* <!-- Icon Menu Section --> */}
        <div className="flex items-center justify-center">
          <div
            onClick={() => handleDarkMode("dark")}
            className="mr-2 text-2xl transition cursor-pointer"
          >
            {dark ? (
              <BsSun className="text-white" />
            ) : (
              <BsFillSunFill className="text-yellow-500" />
            )}
          </div>
          {/* <!-- logout & cart --> */}
          {user?.uid ? (
            <>
              <Link
                to="/checkout"
                className="p-2 rounded cursor-pointer  transition duration-200 font-bold text-xl text-white hover:text-green-400"
              >
                <BsCart />
              </Link>
              <div
                onClick={handleSignOut}
                className="hidden md:flex items-center justify-center leading-10 px-2 rounded cursor-pointer  transition duration-200 font-medium text-white hover:text-black hover:bg-gray-100"
              >
                <BiLogOut className="fill-current h-5 w-5 mr-2 mt-0.5" />
                <span>Logout</span>
              </div>
              <div
                onClick={() => handleDropDown("usermenu")}
                className="relative  flex items-center justify-center text-white ml-2 transition-all hover:scale-110 cursor-pointer"
              >
                <div className="flex w-8 h-8 rounded-full items-center justify-center text-white overflow-hidden">
                  {!user?.photoURL ? (
                    <div className="w-full rounded-full flex items-center justify-center border-gray-200 border">
                      <CiUser />
                    </div>
                  ) : (
                    <img
                      src={user.photoURL}
                      alt="user"
                      className="w-full h-full object-cover object-center"
                    />
                  )}
                </div>

                <div
                  className={`${
                    userDetailsMenu
                      ? "opacity-100 translate-y-1 h-auto"
                      : "opacity-0 invisible translate-y-0 h-0"
                  } bg-white shadow-md rounded border border-gray-300 text-sm absolute transition ease-linear duration-300 top-full -right-4 min-w-full w-42 z-100 mt-1`}
                >
                  <span className="absolute top-0 right-0 w-3 h-3 bg-white border transform rotate-45 -mt-1 mr-4"></span>
                  <div className="bg-white rounded w-full relative z-20 py-1">
                    <ul className="">
                      <div
                        to="/profile"
                        className="text-black px-4 py-2 flex w-full items-start hover:bg-gray-100  hover: transition-colors duration-100 cursor-pointer"
                      >
                        <span className="flex-1">
                          {user?.displayName.split(" ")[0]}
                        </span>
                      </div>
                      <Link
                        to="/profile"
                        className="text-black px-4 py-2 flex w-full items-start hover:bg-gray-100  hover: transition-colors duration-100 cursor-pointer"
                      >
                        <span className="flex-1">Profile</span>
                      </Link>
                      <Link
                        to="/settings"
                        className="text-black px-4 py-2 flex w-full items-start hover:bg-gray-100  hover: transition-colors duration-100 cursor-pointer"
                      >
                        <span className="flex-1">Settings</span>
                      </Link>
                      <div
                        onClick={handleSignOut}
                        className="text-black px-4 py-2 flex w-full items-start hover:bg-gray-100  hover: transition-colors duration-100 cursor-pointer"
                      >
                        <span className="flex-1 md:hidden">Logout</span>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <Link
              to="/login"
              className="flex items-center leading-10 px-2 rounded cursor-pointer  transition duration-200 font-medium text-white hover:text-black hover:bg-gray-100"
            >
              <svg
                className="fill-current h-5 w-5 mr-2 mt-0.5"
                version="1.1"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M10,17V14H3V10H10V7L15,12L10,17M10,2H19A2,2 0 0,1 21,4V20A2,2 0 0,1 19,22H10A2,2 0 0,1 8,20V18H10V20H19V4H10V6H8V4A2,2 0 0,1 10,2Z" />
              </svg>
              Login
            </Link>
          )}
          <div
            onClick={handleMenu}
            className="flex md:hidden ml-2 text-xl rounded cursor-pointer  transition duration-200 font-medium text-white hover:scale-110"
          >
            <GiHamburgerMenu />
          </div>
        </div>
      </nav>
      {/* sidebar  */}
      <div
        className={`${
          showMenu ? "block left-0 w-full" : "w-0 -left-full"
        } md:hidden bottom-0  h-full fixed bg-gray-400/20 transition-all ease-linear duration-300`}
      >
        <div
          onClick={() => handleMenu("close")}
          className="absolute right-4 top-4 text-rose-700 hover:text-white text-2xl cursor-pointer transition transform ease-out  hover:scale-110 p-2"
        >
          <SlClose />
        </div>
        <div
          className={`${
            dark ? "bg-purple-700" : ""
          } w-56 h-full bg-slate-50 flex flex-col`}
        >
          <ul className=" h-full px-4 py-6 flex flex-col gap-4">
            <Link
              to="/home"
              className="flex items-center leading-10 px-4 rounded cursor-pointer  transition duration-200 bg-sky-300/80 font-medium text-white hover:text-black hover:bg-purple-400"
            >
              Home
            </Link>

            <li className="block relative" onClick={handleDropDown}>
              <div className="flex items-center justify-between leading-10 px-4 rounded cursor-pointer  transition duration-200 bg-sky-300/80 font-medium text-white hover:text-black hover:bg-purple-400">
                <span>Courses</span>
                <MdKeyboardArrowDown className="ml-2 text-xl" />
              </div>
              <div
                className={`${
                  dropClicked
                    ? "opacity-100 h-auto translate-y-2 w-full flex"
                    : "opacity-0 h-0 translate-y-0 w-0 invisible"
                } bg-white rounded border border-gray-100 text-sm transition ease-in duration-300 left-0 mt-1`}
              >
                <div className="w-full relative">
                  <ul className="list-reset">
                    <li>
                      <Link
                        to="/courses"
                        className="px-4 py-2 flex w-full items-start hover:bg-gray-100  hover: transition-colors duration-100 cursor-pointer"
                      >
                        <span className="flex-1">All Courses</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/courses/javascript"
                        className="px-4 py-2 flex w-full items-start hover:bg-gray-100  hover: transition-colors duration-100 cursor-pointer"
                      >
                        <span className="flex-1">Javascript</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/courses/python"
                        className="px-4 py-2 flex w-full items-start hover:bg-gray-100  hover: transition-colors duration-100 cursor-pointer"
                      >
                        <span className="flex-1">Python</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/courses/ruby"
                        className="px-4 py-2 flex w-full items-start hover:bg-gray-100  hover: transition-colors duration-100 cursor-pointer"
                      >
                        <span className="flex-1">Ruby</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/courses/c++"
                        className="px-4 py-2 flex w-full items-start hover:bg-gray-100  hover: transition-colors duration-100 cursor-pointer"
                      >
                        <span className="flex-1">C++</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <Link
              to="/about"
              className="flex items-center leading-10 px-4 rounded cursor-pointer  transition duration-200 bg-sky-300/80 font-medium text-white hover:text-black hover:bg-purple-400"
            >
              About
            </Link>

            <Link
              to="/blog"
              className="flex items-center leading-10 px-4 rounded cursor-pointer  transition duration-200 bg-sky-300/80 font-medium text-white hover:text-black hover:bg-purple-400"
            >
              Blog
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
