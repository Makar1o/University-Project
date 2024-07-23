import React from "react";
import Header from "./components/Header";
import MainPhoto from "./components/MainPhoto";
import Degree from "./components/Degree";
import WaveStats from "./components/WaveStats";
import News from "./components/News";
import DualEducation from "./components/DualEducatian";
import Video from "./components/Video";
import CloseEvents from "./components/CloseEvents";
import FAQHomePage from "./components/FAQHomePage";
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
