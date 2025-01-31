import React from "react";

function CardCloseEvent({ date, eventImage, content }) {
  return (
    <nav className="card-event-container">
      <div className="event-date">{date}</div>
      <div className="card-event">
        <img
          className="event-image"
          src={eventImage}
          alt="Event related to dual education"
        />
        <div className="form-event-image"></div>
        <div className="event-content">{content}</div>
      </div>
    </nav>
  );
}

export default CardCloseEvent;
