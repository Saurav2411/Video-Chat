import React from "react";
import { useParams } from "react-router-dom";

const Room = () => {
  const { id } = useParams();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-blue-600">Meeting Room</h1>
      <p className="text-gray-600 mt-2">You are in Room ID: {id}</p>
    </div>
  );
};

export default Room;
