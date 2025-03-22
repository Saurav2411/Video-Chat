import React from "react";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-blue-600">Sign Up</h1>
      <input
        type="text"
        placeholder="Full Name"
        className="mt-4 p-2 border rounded w-64"
      />
      <input
        type="email"
        placeholder="Email"
        className="mt-2 p-2 border rounded w-64"
      />
      <input
        type="password"
        placeholder="Password"
        className="mt-2 p-2 border rounded w-64"
      />
      <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
