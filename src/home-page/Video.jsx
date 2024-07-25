import React from "react";
import { ReactComponent as Play } from "../images/svgIcons/video-button.svg";
function Video() {
  return (
    <section>
      <div className="video-image">
        <div className="form-video-image">
          <h4 className="welcome">WELCOME!</h4>
        </div>
        <div className="video-button">
          <Play width="109" height="109" fill="#D8E7F8" />
        </div>
      </div>
    </section>
  );
}

export default Video;
