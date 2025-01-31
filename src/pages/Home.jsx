import React from "react";
import MainPhoto from "../code-pages/home-page/MainPhoto";
import Degree from "../code-pages/home-page/Degree";
import WaveStats from "../code-pages/home-page/WaveStats";
import News from "../code-pages/home-page/News";
import Video from "../code-pages/home-page/Video";
import CloseEvents from "../code-pages/home-page/CloseEvents";
import FAQHomePage from "../code-pages/home-page/FAQHomePage";
import SpecialPossibility from "../code-pages/home-page/SpecialPossibility";

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
