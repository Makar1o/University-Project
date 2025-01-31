import React from "react";
import { ReactComponent as Inst } from "../../images/svgIcons/inst.svg";
import { ReactComponent as Facebook } from "../../images/svgIcons/facebook.svg";
import { ReactComponent as Youtube } from "../../images/svgIcons/youtube.svg";
import Map from "../../images/home-page/footer-map.png";

function Footer() {
  const handleLogoClick = () => {
    window.location.reload();
    window.scrollTo(0, 0);
  };
  return (
    <footer className="footer-container">
      <section className="footer-image">
        <div className="footer-date">
          <div className="footer-logo-section">
            <div onClick={handleLogoClick} className="footer-logo">
              LOGO
            </div>
            <div className="footer-entrant">
              <h3>Вступнику</h3>
              <h4>Вступ</h4>
              <h4>Бакалаврат</h4>
              <h4>Магістратура</h4>
              <h4>Викладачі</h4>
              <h4>Гуртожитки</h4>
            </div>
            <div className="footer-tostudent">
              <h3>Студенту</h3>
              <h4>Розклад</h4>
              <h4>Студентське життя</h4>
              <h4>Степендія</h4>
              <h4>Програми обміну</h4>
            </div>
          </div>
          <div className="footer-reviews-section">
            <div className="footer-main-sections">
              <h3>Відгуки</h3>
              <h3>FAQ</h3>
              <h3>Галерея</h3>
            </div>
            <div className="footer-toteachers">
              <h3>Викладачу</h3>
              <h4>Інформаційні сервіси</h4>
              <h4>Приєднюйся до команди</h4>
              <h4>Підвищення кваліфікації</h4>
            </div>
          </div>
          <div className="footer-contact-section">
            <img
              className="footer-map"
              src={Map}
              alt="map which show you where is the courpus of university"
            />
            <div className="footer-contact">
              <div className="footer-icons">
                <Inst width="45" height="45" fill="#F5F1EF" />
                <Youtube width="45" height="45" fill="#F5F1EF" />
                <Facebook width="45" height="45" fill="#F5F1EF" />
              </div>
              <div className="footer-num">
                <h4>+098 2537863</h4>
                <h4>+063 5726435</h4>
                <h4>Email: info@.com</h4>
              </div>
            </div>
          </div>
        </div>
        <hr className="footer-line" />
        <div className="footer-datas">
          <h4 className="reserver2024">© 2024 All rights reserved</h4>
          <div className="foot-data">
            <h4>Terms & Conditions</h4>
            <h4>Privacy policy</h4>
            <h4>Cookies policy</h4>
          </div>
        </div>
      </section>
    </footer>
  );
}
export default Footer;
