import React, { useEffect, useRef } from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';
function VideoC() {
    const {roomID} = useParams()
    const containerRef = useRef(null)

    useEffect(()=>{
        let myMeeting = async (element) => {
        if(!roomID || !containerRef.current) return;
        const appID = import.meta.env.VITE_ZEGO_APP_ID;
        const serverSecret = import.meta.env.VITE_ZEGO_SERVER_SECRET;
  
             const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,
            Date.now().toString(),
            "Anonymous"
             );
       
           
         
             const zp = ZegoUIKitPrebuilt.create(kitToken);
  
             zp.joinRoom({
               container: element,
               sharedLinks: [
                 {
                   name: 'Personal link',
                   url:
                    window.location.protocol + '//' + 
                    window.location.host + window.location.pathname +
                     '?roomID=' +
                     roomID,
                 },
               ],
               scenario: {
                 mode: ZegoUIKitPrebuilt.GroupCall, 
               },
             });
       
           
         };
       myMeeting();

       return()=>{
        if(containerRef.current){
            containerRef.current.innerHTML = ""
        }
       }

    },[roomID]);
      
  return (
    <div
      className="myCallContainer"
      ref={containerRef}
      style={{ width: '100vw', height: '100vh' }}
    ></div>
  );
}

export default VideoC