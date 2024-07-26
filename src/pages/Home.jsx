import React from "react";
import MainPhoto from "../home-page/MainPhoto";
import Degree from "../home-page/Degree";
import WaveStats from "../home-page/WaveStats";
import News from "../home-page/News";
import Video from "../home-page/Video";
import CloseEvents from "../home-page/CloseEvents";
import FAQHomePage from "../home-page/FAQHomePage";
import SpecialPossibility from "../home-page/SpecialPossibility";

function Home() {
  return (
    <div>
      <MainPhoto />
      <Degree />
      <WaveStats />
      <News />
      <SpecialPossibility />
      <Video />
      <CloseEvents />
      <FAQHomePage />
    </div>
  );
}

export default Home;
