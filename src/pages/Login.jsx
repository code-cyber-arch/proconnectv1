import React from "react";
import Navbar from "../components/Navbar";

const Login = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold text-center mb-8">Login</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded mt-1"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full p-3 border border-gray-300 rounded mt-1"
                placeholder="Enter your password"
                required
              />
            </div>
            <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-bold hover:bg-emerald-700">
              Login
            </button>
            <p className="text-center text-gray-600 mt-4">
              Don't have an account?{" "}
              <a href="/signup" className="text-emerald-600 font-bold">
                SignUp
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
