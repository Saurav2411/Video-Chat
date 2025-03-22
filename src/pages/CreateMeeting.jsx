import React from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const CreateMeeting = () => {
    const navigate = useNavigate();

    const handleCreateMeeting = () => {
        const roomID = uuidv4(); // Generate a unique room ID
        navigate(`/room/${roomID}`); // Navigate to the video chat page
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-4">Create a New Meeting</h1>
            <button
                onClick={handleCreateMeeting}
                className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            >
                Start a Meeting
            </button>
        </div>
    );
};

export default CreateMeeting;
