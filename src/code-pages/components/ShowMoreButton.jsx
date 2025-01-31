import React from "react";

function ShowMoreButton({ onClick, showMore }) {
  return (
    <button onClick={onClick} className="show-more">
      {showMore}
    </button>
  );
}
export default ShowMoreButton;
