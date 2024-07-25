import React from "react";
import Header from "./components/Header";
import MainPhoto from "./home-page/MainPhoto";
import Degree from "./home-page/Degree";
import WaveStats from "./home-page/WaveStats";
import News from "./home-page/News";
import DualEducation from "./home-page/DualEducatian";
import Video from "./home-page/Video";
import CloseEvents from "./home-page/CloseEvents";
import FAQHomePage from "./home-page/FAQHomePage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <MainPhoto />
      <Degree />
      <WaveStats />
      <News />
      <DualEducation />
      <Video />
      <CloseEvents />
      <FAQHomePage />
      <Footer />
    </div>
  );
}

export default App;
