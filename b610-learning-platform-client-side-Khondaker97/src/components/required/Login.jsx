import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../context/UserContext";
const Login = () => {
  const { signIn, githubSignIn, googleSignIn, setSignedIn, signedIn } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
  console.log(from);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        // const user = result.user;
        // console.log(user);
        form.reset();
        setSignedIn((prev) => !prev);
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        // const { user } = result;
        setSignedIn((prev) => !prev);
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  };
  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        // const { user } = result;
        // console.log(user);
        setSignedIn((prev) => !prev);
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className=" bg-purple-900 bg-gradient-to-b from-gray-900 via-gray-900 to-purple-800 leading-5 h-full w-full pt-10 lg:pt-4">
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
                  Sign In
                </h3>
                <p className="text-gray-400">
                  Don't have an account?
                  <Link
                    to="/register"
                    className="ml-1 text-sm text-purple-700 hover:text-purple-700"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    className=" w-full text-purple-600 text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="relative">
                  <input
                    required
                    placeholder="Password"
                    type="password"
                    name="password"
                    className="text-sm text-purple-600 px-4 py-3 rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-purple-400"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm ml-auto">
                    <Link
                      to="/forgot"
                      className="text-purple-700 hover:text-purple-600"
                    >
                      Forgot password?
                    </Link>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center bg-purple-800  hover:bg-purple-700 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500"
                  >
                    Sign in
                  </button>
                </div>
              </form>
              {/* divider  */}
              <div className="flex items-center justify-center space-x-2 my-5">
                <span className="h-px w-16 bg-gray-100"></span>
                <span className="text-gray-300 font-normal">or</span>
                <span className="h-px w-16 bg-gray-100"></span>
              </div>
              {/* google or facebook  */}
              <div className="flex justify-center gap-5 w-full ">
                <button
                  onClick={handleGoogleSignIn}
                  className="w-full flex items-center justify-center mb-6 md:mb-0 border border-gray-300 hover:border-gray-900 hover:bg-gray-900 text-sm text-gray-500 hover:text-yellow-50 p-3  rounded-lg tracking-wide font-medium  cursor-pointer transition ease-in duration-500"
                >
                  {/* <svg className="w-4 mr-2" viewBox="0 0 24 24">
                    <path
                      fill="#EA4335"
                      d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z"
                    />
                    <path
                      fill="#34A853"
                      d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z"
                    />
                    <path
                      fill="#4A90E2"
                      d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z"
                    />
                  </svg> */}

                  <FcGoogle className="text-lg mr-2" />
                  <span>Google</span>
                </button>

                <button
                  onClick={handleGithubSignIn}
                  className="w-full flex items-center justify-center mb-6 md:mb-0 border border-gray-300 hover:border-gray-900 hover:bg-gray-900 text-sm text-gray-500 hover:text-yellow-50  p-3  rounded-lg tracking-wide font-medium  cursor-pointer transition ease-in duration-500"
                >
                  <BsGithub className="text-lg mr-2" />
                  <span>Github</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
