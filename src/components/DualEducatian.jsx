import React from "react";
import Topic from "./TopicSection";
import EventNav from "./EventNav";
import ShowMoreButton from "./ShowMoreButton";
function DualEducation() {
  return (
    <section className="special-possibilities">
      <div className="topic-dual-education">
        <Topic title={"Можливості, які ви матимете"} />
      </div>
      <nav className="topic-nav">
        <EventNav title={"Дуальна освіта"} />
      </nav>
      <div className="special-possibilities-photo">
        <p className="dual-education-text">
          Дуальна освіта - це освітній підхід, який поєднує теоретичне навчання
          у навчальному закладі з практичним навчанням у реальному робочому
          середовищі.
          <br /> <br /> Учні отримують можливість отримувати знання та навички,
          які стосуються їх певної професії, одночасно отримуючи досвід роботи в
          справжній сфері діяльності.
        </p>
        <div className="dual-education-button">
          <ShowMoreButton showMore={"Показати більше"} />
        </div>
      </div>
    </section>
  );
}

export default DualEducation;
