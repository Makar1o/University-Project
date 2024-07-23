import React from "react";
import "../styles/topic.css"; // Де у вас збережені стилі

function Topic({ title }) {
  return (
    <div>
      <h1 className="degree-topic">{title}</h1>
      <hr />
    </div>
  );
}

export default Topic;
