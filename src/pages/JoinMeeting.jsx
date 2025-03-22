import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const JoinMeeting = () => {
    const [roomID, setRoomID] = useState("");
    const navigate = useNavigate();

    const handleJoinMeeting = () => {
        if (roomID.trim()) {
            navigate(`/room/${roomID}`); // Navigate to the video chat room
        } else {
            alert("Please enter a valid Room ID.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-4">Join a Meeting</h1>
            <input
                type="text"
                placeholder="Enter Room ID"
                value={roomID}
                onChange={(e) => setRoomID(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg mb-4 text-black"
            />
            <button
                onClick={handleJoinMeeting}
                className="px-6 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition"
            >
                Join Meeting
            </button>
        </div>
    );
};

export default JoinMeeting;
