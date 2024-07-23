import React from "react";

function CardNews({ content, newsImage }) {
  return (
    <nav className="card-news-container">
      <div className="card-news">
        <img
          className="news-image"
          src={newsImage}
          alt="news what we talking about"
        />
        <div className="form-news-image">
          <div className="news-content">{content}</div>
        </div>
      </div>
    </nav>
  );
}
export default CardNews;
