import React, { useEffect, useRef } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";

function VideoC() {
    const { roomID } = useParams();
    const containerRef = useRef(null);

    useEffect(() => {
        const initializeMeeting = async (element) => {
            if (!roomID || !containerRef.current) return;

            // Convert appID to a number
            const appID = Number(import.meta.env.VITE_ZEGO_APP_ID);
            const serverSecret = import.meta.env.VITE_ZEGO_SERVER_SECRET;

            if (!appID || isNaN(appID)) {
                console.error("ZEGOCLOUD appID is missing or invalid!");
                return;
            }

            if (!serverSecret) {
                console.error("ZEGOCLOUD serverSecret is missing!");
                return;
            }

            // Generate a unique userID for each participant
            const userID = `user_${Math.floor(Math.random() * 10000)}`;

            // Generate the Kit Token for the same Room ID
            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
                appID,
                serverSecret,
                roomID, // Ensure everyone joins the same room
                userID,
                "Guest"
            );

            // Create the Zego meeting instance
            const zp = ZegoUIKitPrebuilt.create(kitToken);

            // Ensure the instance is created successfully
            if (!zp) {
                console.error("Failed to create ZegoUIKitPrebuilt instance");
                return;
            }

            // Join the room
            zp.joinRoom({
                container: element,
                sharedLinks: [
                    {
                        name: "Invite Link",
                        url: `${window.location.origin}/room/${roomID}`,
                    },
                ],
                scenario: {
                    mode: ZegoUIKitPrebuilt.GroupCall,
                },
                showPreJoinView: true, // Shows preview before joining
                turnOnMicrophoneWhenJoining: true,
                turnOnCameraWhenJoining: true,
            });
        };

        initializeMeeting(containerRef.current);

        return () => {
            if (containerRef.current) {
                containerRef.current.innerHTML = "";
            }
        };
    }, [roomID]);

    return (
        <div
            className="myCallContainer"
            ref={containerRef}
            style={{ width: "100vw", height: "100vh" }}
        ></div>
    );
}

export default VideoC;
