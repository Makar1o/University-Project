import React from "react";
import { ReactComponent as HomePageArrow } from "../images/svgIcons/home-page-arrow.svg";
function EventNav({ title }) {
  return (
    <nav className="event-nav">
      <div className="event-nav-pos">
        <button className="arrow-left">
          <HomePageArrow width="68" height="68" />
        </button>
        <h2 className="topic">{title}</h2>
        <button className="arrow-right">
          <HomePageArrow width="68" height="68" />
        </button>
      </div>
    </nav>
  );
}

export default EventNav;
