import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const JoinMeeting = () => {
    const navigate = useNavigate();
    const [roomID, setRoomID] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleJoinMeeting = () => {
        if (!roomID.trim() || !password.trim()) {
            setError("Both Room ID and Password are required.");
            return;
        }
        setError(""); // Clear error if fields are valid
        navigate(`/room/${roomID}?password=${password}`); // Navigate with Room ID & Password
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Join a Meeting
                </h1>

                {/* Room ID Input */}
                <label className="block text-gray-700 font-medium mb-2">Room ID:</label>
                <input
                    type="text"
                    value={roomID}
                    onChange={(e) => setRoomID(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter Room ID"
                />

                {/* Password Input */}
                <label className="block text-gray-700 font-medium mb-2">Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter Password"
                />

                {/* Error Message */}
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                {/* Join Meeting Button */}
                <button
                    onClick={handleJoinMeeting}
                    className="w-full px-6 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition"
                >
                    Join Meeting
                </button>
            </div>
        </div>
    );
};

export default JoinMeeting;
