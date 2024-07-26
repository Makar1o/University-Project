import React from "react";
import { ReactComponent as Facebook } from "../../images/svgIcons/facebook-autorization.svg";
import { ReactComponent as Google } from "../../images/svgIcons/google-autorization.svg";
function AutorizationWith() {
  return (
    <section className="section-containar">
      <h1 className="topic-autorization">Авторизація</h1>
      <div className="containar-autorization-with">
        <div className="ggggg">
          <div className="autorization-facebook">
            <Facebook
              className="background-icon-facebook"
              width="66"
              height="66"
              fill="url(#pattern0_4_24394) "
            />
            <h1 className="autorization-content">Facebook</h1>
          </div>
          <hr className="autorization-line" />
        </div>
        <div className="middle-text">
          <p>чи</p>
        </div>
        <div>
          <div className="autorization-google">
            <Google
              className="background-icon-google"
              width="60"
              height="60"
              fill="url(#pattern0_4_24389)"
            />
            <h1 className="autorization-content">Google</h1>
          </div>
          <hr className="autorization-line" />
        </div>
      </div>
    </section>
  );
}

export default AutorizationWith;
