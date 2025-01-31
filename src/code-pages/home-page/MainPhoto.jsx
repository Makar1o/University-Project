import React from "react";
import EventNav from "../components/EventNav";
function MainPhoto() {
  return (
    <section className="home-page-main">
      <div className="home-page-photo-1">
        <div className="day-student">
          <EventNav className="content-day-student" title={"День студента"} />
        </div>
      </div>
    </section>
  );
}

export default MainPhoto;
