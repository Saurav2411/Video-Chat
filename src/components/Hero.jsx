import React from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid"; // Generates a unique ID for the meeting
import HeroImg from "../assets/hero-image.jpg"; // Make sure the image exists

function Hero() {
  const navigate = useNavigate();

  // Function to create a new meeting
  const createMeeting = () => {
    const newRoomID = uuidv4(); // Generates a unique meeting ID
    navigate(`/room/${newRoomID}`); // Redirect to the new room
  };

  return (
    <div className="mt-12 bg-gray-50">
      <section className="pt-12 pb-12 sm:pb-16 lg:pt-8">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
            {/* Left Side - Text Content */}
            <div>
              <div className="text-center lg:text-left">
                <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
                  Connect with Friends & Family Instantly
                </h1>
                <p className="mt-4 text-lg text-gray-600">
                  Enjoy seamless video calls without the hassle of signing up.
                  Stay connected anywhere, anytime.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4">
                  <button
                    onClick={createMeeting}
                    className="px-6 py-3 text-lg font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none"
                  >
                    Create Meeting
                  </button>

                  <button
                    onClick={() => navigate("/join")}
                    className="px-6 py-3 text-lg font-bold text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-100 focus:outline-none mt-4 sm:mt-0"
                  >
                    Join Meeting
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex justify-center">
              <img
                className="w-full max-w-md rounded-lg shadow-lg"
                src={HeroImg}
                alt="Video Chat"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
