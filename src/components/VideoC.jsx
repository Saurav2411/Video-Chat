import React, { useEffect, useRef } from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';

function VideoC() {
    const { roomID } = useParams();
    const containerRef = useRef(null);

    useEffect(() => {
        let myMeeting = async (element) => {
            if (!roomID || !containerRef.current) return;

            // Ensure appID is a number
            const appID = Number(import.meta.env.VITE_ZEGO_APP_ID);
            const serverSecret = import.meta.env.VITE_ZEGO_SERVER_SECRET;

            console.log("appID:", appID, typeof appID);
            console.log("serverSecret:", serverSecret);

            if (!appID || isNaN(appID)) {
                console.error("ZEGOCLOUD appID is missing or not a number!");
                return;
            }

            if (!serverSecret) {
                console.error("ZEGOCLOUD serverSecret is missing!");
                return;
            }

            // Generate the Kit Token
            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
                appID,
                serverSecret,
                roomID,
                Date.now().toString(),
                "Anonymous"
            );

            // Create the meeting instance
            const zp = ZegoUIKitPrebuilt.create(kitToken);
            
            if (!zp) {
                console.error("Failed to create ZegoUIKitPrebuilt instance");
                return;
            }

            zp.joinRoom({
                container: element,
                sharedLinks: [
                    {
                        name: 'Personal link',
                        url: `${window.location.protocol}//${window.location.host}${window.location.pathname}?roomID=${roomID}`,
                    },
                ],
                scenario: {
                    mode: ZegoUIKitPrebuilt.GroupCall,
                },
            });
        };

        myMeeting(containerRef.current);

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
            style={{ width: '100vw', height: '100vh' }}
        ></div>
    );
}

export default VideoC;
