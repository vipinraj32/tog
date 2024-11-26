import React from "react";
import vid from "../../assets/pastevent.mp4"
const VideoPlayer = () => {
  return (
    <div className="container_ev">
    <div  style={{ textAlign: "center", marginTop: "20px" }}>
      <h1 className="support_h1">Past Event</h1>
      <video
        width="800"
        height="450"
        controls
        style={{ borderRadius: "10px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)" }}
      >
        <source src={vid} type="video/mp4" />
        {/* Fallback if the browser doesn't support the video */}
        Your browser does not support the video tag.
      </video>
    </div>
    </div>
  );
};

export default VideoPlayer;
