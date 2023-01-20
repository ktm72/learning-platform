import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/UserContext";
import { useState } from "react";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [showError, setShowError] = useState(null);
  const [accepted, setAccepted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const password = form.password.value;
    const fullName = form.fullName.value;
    const confirm = form.cpassword.value;
    const email = form.email.value;
    const photo = form.photoUrl.value;
    const agreement = form.agreement.checked;
    if (fullName === "" || email === "" || password === "" || confirm === "") {
      setShowError("Cannot be Empty!");
      return;
    }
    if (password.length < 6) {
      setShowError("Password must be at least 6 characters!");
      return;
    }
    if (password !== confirm) {
      setShowError("Password should match!");
      return;
    }

    if (!agreement) {
      setShowError("Please Agree before Register!");
    } else {
      createUser(email, password)
        .then((result) => {
          const { user } = result;
          console.log(user);
          form.reset();
          handleProfile(fullName, photo);
        })
        .catch((err) => console.log(err));
      navigate("/login");
    }
  };

  const handleProfile = (name, photo) => {
    const profile = {
      displayName: name,
      photoURL: photo,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((err) => console.log(err));
  };
  const handleChecked = (e) => {
    setAccepted(e.target.checked);
  };
  return (
    <>
      <div className=" bg-purple-900 bg-gradient-to-b from-gray-900 via-gray-900 to-purple-800 leading-5 h-full w-full mt-[4.5rem] lg:pt-4">
        <div className="min-h-screen flex-col lg:flex lg:flex-row  justify-center bg-transparent py-10">
          <div className="flex flex-1 items-center justify-center w-80 mx-auto sm:w-full py-6 lg:py-0">
            <div className="flex flex-col text-gray-300">
              <h1 className="my-3 font-bold text-6xl">Welcome</h1>
              <p className="pr-3 text-sm opacity-75 whitespace-pre-line">
                Deal Now. Deal Here. Grow Your Skills. Grow With Us.
              </p>
            </div>
          </div>
          <div className="flex flex-1 justify-center self-center rounded-3xl z-100">
            <div className="px-4 py-8 sm:p-12 bg-white mx-auto rounded-3xl shadow-md w-80 sm:w-96">
              <div className="mb-7">
                <h3 className="font-semibold text-2xl text-gray-800">
                  Sign Up
                </h3>
                <p className="text-gray-400">
                  Already have an account?
                  <Link
                    to="/login"
                    className="ml-1 text-sm text-purple-700 hover:text-purple-700"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
              <div className="my-2">
                <small className="text-sm text-red-400">{showError}</small>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    className="border-gray-200 w-full text-purple-600 text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border rounded-lg focus:outline-none focus:border-purple-400"
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    // value={user.fullName}
                    // onChange={handleChange}
                  />
                </div>
                <div className="relative">
                  <input
                    className="border-gray-200 w-full text-purple-600 text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border rounded-lg focus:outline-none focus:border-purple-400"
                    type="email"
                    name="email"
                    placeholder="Email"
                    // value={user.email}
                    // onChange={handleChange}
                  />
                </div>
                <div className="relative">
                  <input
                    className="border-gray-200 w-full text-purple-600 text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border rounded-lg focus:outline-none focus:border-purple-400"
                    type="text"
                    name="photoUrl"
                    placeholder="Photo URL"
                    // value={user.email}
                    // onChange={handleChange}
                  />
                </div>
                <div className="relative">
                  <input
                    // value={user.password}
                    // onChange={handleChange}
                    placeholder="Password"
                    type="password"
                    name="password"
                    className="border-gray-200 w-full text-purple-600 text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border rounded-lg focus:outline-none focus:border-purple-400"
                  />
                </div>
                <div className="relative">
                  <input
                    // onChange={handleChange}
                    // value={user.cpassword}
                    placeholder="Confirm Password"
                    type="password"
                    name="cpassword"
                    className="border-gray-200 w-full text-purple-600 text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border rounded-lg focus:outline-none focus:border-purple-400"
                  />
                </div>
                <div className="flex items-center">
                  <div className="text-sm flex items-start gap-2">
                    <input
                      className="mt-1 accent-purple-500"
                      type="checkbox"
                      name="agreement"
                      //   onInvalid={() =>
                      //     setShowError("Please Agree before Register!")
                      //   }

                      onClick={handleChecked}
                    />
                    <span className="text-purple-700">
                      By Registering, You are agreeing our terms & policy!
                    </span>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={!accepted}
                    className={`${
                      accepted ? "cursor-pointer" : ""
                    } w-full flex justify-center bg-purple-800  hover:bg-purple-700 text-gray-100 p-3  rounded-lg tracking-wide font-semibold transition ease-in duration-500`}
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
