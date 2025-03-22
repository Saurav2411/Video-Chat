import React from "react";

const SignIn = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-blue-600">Sign In</h1>
      <input
        type="email"
        placeholder="Email"
        className="mt-4 p-2 border rounded w-64"
      />
      <input
        type="password"
        placeholder="Password"
        className="mt-2 p-2 border rounded w-64"
      />
      <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Sign In
      </button>
    </div>
  );
};

export default SignIn;
