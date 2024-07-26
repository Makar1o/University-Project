import React from "react";
import FormImageS from "../../components/FormImageS";
import MainImage from "../../images/home-page/main-program-exchange.png";
const MainPhoto = () => {
  return (
    <div>
      <FormImageS formSImage={MainImage} />
      <h1>Програма обміну</h1>
    </div>
  );
};

export default MainPhoto;
