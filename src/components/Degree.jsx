import React from "react";
import Topic from "./TopicSection";
function Degree() {
  return (
    <section className="degree-container">
      <Topic title={"Програма Навчання"} />
      <div className="degreee-button-container">
        <button className="degree-button">Бакалаврат</button>
        <button className="degree-button">Магістратура</button>
      </div>
    </section>
  );
}
export default Degree;
