import React from "react";
import Topic from "../components/TopicSection";
import CardCloseEvent from "../components/CardCloseEvent";
import eventImage from "../../images/home-page/event-image.jpg";
import eventImage2 from "../../images/home-page/event-image-2.jpg";
import { ReactComponent as HomePageArrow } from "../../images/svgIcons/home-page-arrow.svg";

function CloseEvents() {
  return (
    <section className="close-events">
      <div>
        <Topic title={"Найближчі заходи"} />
      </div>
      <nav className="event-cards">
        <div className="event-cards-containar">
          <div className="arrow-left-event">
            <button className="arrow-left">
              <HomePageArrow width="68" height="68" />
            </button>
          </div>
          <div>
            <CardCloseEvent
              date={"01.05"}
              eventImage={eventImage}
              content={
                "Дуальна освіта - це освітній підхід, який поєднує теоретичне навчання у навчальному закладі"
              }
            />
          </div>
          <div>
            <CardCloseEvent
              date={"02.15"}
              eventImage={eventImage2}
              content={
                "Відкриття відпочинкового приміщення де ви зможете зарядити свої гаджети повчитися або просто відпочити"
              }
            />
          </div>
          <div className="arrow-right-event">
            <button className="arrow-right">
              <HomePageArrow width="68" height="68" />
            </button>
          </div>
        </div>
        <div className="circle-container">
          <div className="passive-circle"></div>
          <div className="passive-circle"></div>
          <div className="active-circle"></div>
          <div className="passive-circle"></div>
          <div className="passive-circle"></div>
        </div>
      </nav>
    </section>
  );
}
export default CloseEvents;
