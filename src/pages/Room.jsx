import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import VideoC from "./VideoC";

const Room = () => {
    const { roomID } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const enteredPassword = queryParams.get("password");

        // Fetch the correct password (for now, using localStorage)
        const storedPassword = localStorage.getItem(`room_${roomID}_password`);

        if (enteredPassword === storedPassword) {
            setIsAuthorized(true);
        } else {
            setTimeout(() => {
                navigate("/join"); // Redirect to Join Meeting page if incorrect
            }, 2000);
        }
    }, [location, navigate, roomID]);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold text-blue-600">Meeting Room</h1>
            <p className="text-gray-600 mt-2">You are in Room ID: {roomID}</p>

            {isAuthorized ? (
                <VideoC />
            ) : (
                <p className="text-red-500 mt-4">Access Denied! Redirecting...</p>
            )}
        </div>
    );
};

export default Room;
