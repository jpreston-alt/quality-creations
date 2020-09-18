import React from "react";
import "./styles.css";
import video from "../../assets/videos/video.mp4";
import video1 from "../../assets/videos/video(1).mp4";
import video2 from "../../assets/videos/video(2).mp4";

function HomeJumbotron() {
  return (
    <div className="slider carousel carousel-jumbotron">
      <div className="slide1 video-container">
        <video src={video} autoPlay={true} muted={true} loop={true} />
      </div>
      <div className="slide2 video-container">
        <video src={video1} autoPlay={true} muted={true} loop={true} />
      </div>
      <div className="slide3 video-container">
        <video src={video2} autoPlay={true} muted={true} loop={true} />
      </div>
    </div>
  );
}

export default HomeJumbotron;
