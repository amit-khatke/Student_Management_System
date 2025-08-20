import React from "react";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500">
      
      {/* Centered Signup Form */}
      <div className="flex flex-1 items-center justify-center px-6 py-12">
        <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl w-full max-w-md p-10">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
            Create an Account
          </h2>

          <form className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-gray-700 mb-1 font-medium">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border border-blue-300 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 mb-1 font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-blue-300 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 mb-1 font-medium">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-blue-300 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-gray-700 mb-1 font-medium">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Re-enter your password"
                className="w-full px-4 py-2 border border-blue-300 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 shadow-md"
            >
              Sign Up
            </button>
          </form>

          {/* Already have an account */}
          <p className="text-sm text-gray-700 text-center mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 hover:text-blue-800 font-medium transition"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
