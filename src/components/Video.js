import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const Video = ({ poster, source, className }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const togglePlaystate = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };
  return (
    <div className={className}>
      {!isPlaying && (
        <FontAwesomeIcon
          style={{
            ...(className === "video-container"
              ? {
                  width: "6%",
                  height: "auto",
                  position: "absolute",
                  left: "calc(50% - 3%)",
                  top: "calc(50% - 3%)",
                  pointerEvents: "none",
                  zIndex: "100",
                }
              : {
                  width: "20%",
                  height: "auto",
                  position: "absolute",
                  left: "calc(50% - 10%)",
                  top: "calc(50% - 10%)",
                  pointerEvents: "none",
                  zIndex: "100",
                }),
          }}
          icon={faCirclePlay}
        />
      )}
      <div>
        <video
          playsInline
          poster={poster}
          ref={videoRef}
          onClick={togglePlaystate}
          className="video"
        >
          <source src={source} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Video;
