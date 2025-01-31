import React from "react";
import FormImageS from "../components/FormImageS";
import MainImage from "../../images/home-page/main-program-exchange.png";
function MainPhoto() {
  return (
    <section className="main-photo-containar">
      <FormImageS formSImage={MainImage} />
      <div>
        <h1 className="topic-program-exchange">Програма обміну</h1>
      </div>
      <div className="exchange-meaning-container">
        <h1 className="exchange-meaning-topic">
          Що таке програма обміну студентів?
        </h1>
        <p className="exchange-meaning-content">
          Програма обміну студентами – це домовленість між двома ВНЗ, згідно з
          якою студенти одного навчального закладу мають право навчатись в
          іншому закладі протягом певного періоду часу. Тривалість може
          коливатися від кількох тижнів до кількох місяців і зазвичай включає
          академічне навчання та проживання. У деяких випадках іноземні студенти
          також можуть працювати під час навчання за кордоном, проте це залежить
          від програми та трудового законодавства країни.
        </p>
      </div>
    </section>
  );
};

export default MainPhoto;
