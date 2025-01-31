import React from "react";
import { ReactComponent as SearchIcon } from "../../images/svgIcons/search.svg";
import { ReactComponent as MoonDarkTheme } from "../../images/svgIcons/moon-dark-theme.svg";
import { ReactComponent as PersonalCabinet } from "../../images/svgIcons/personal-cabinet.svg";
import { ReactComponent as Tools } from "../../images/svgIcons/tools.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// semantic tags/ main/header/nav
// react-router
function Header() {
  const navigate = useNavigate();

  const [language, setLanguage] = useState("EN");

  const handleChangeLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "EN" ? "UA" : "EN"));
  };

  const [isOpen, setIsOpen] = useState(false);
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <header className="Image-background">
      <div className="header-menu">
        <div className="header-logo" onClick={() => navigate("/")}>
          LOGO
        </div>
        <nav className="header-pages">
          <div
            className="header-entrant-dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <h3 className="header-enter">Вступнику</h3>
            {isOpen && (
              <div className="dropdown-content">
                <button
                  className="button-dropdown"
                  onClick={() => alert("Вступ clicked")}
                >
                  Вступ
                </button>
                <button
                  className="button-dropdown"
                  onClick={() => alert("Бакалаврат clicked")}
                >
                  Бакалаврат
                </button>
                <button
                  className="button-dropdown"
                  onClick={() => alert("Магістратура clicked")}
                >
                  Магістратура
                </button>
                <button
                  className="button-dropdown"
                  onClick={() => alert("Магістратура clicked")}
                >
                  Викладачі
                </button>
                <button
                  className="button-dropdown"
                  onClick={() => alert("Гуртожитки clicked")}
                >
                  Гуртожитки
                </button>
              </div>
            )}
          </div>
          <h3 className="header-tostudent">Студенту</h3>
          <h3 className="header-toteacher">Викладачу</h3>
          <h3 className="heder-aboutus">Про нас</h3>
          <h3 className="header-contacts">Контакти</h3>
          <h3 className="header-revieves">Відгуки</h3>
        </nav>
        <div className="header-icons">
          <SearchIcon
            className="header-serchIcon"
            width="26"
            height="26"
            fill="#FFFCF6"
          />
          <MoonDarkTheme
            className="moon-dark-theme"
            width="34"
            height="34"
            fill="#F5F1EF"
          />
          <button className="change-language" onClick={handleChangeLanguage}>
            {language}
          </button>
          <button
            className="button-loggin"
            onClick={() => navigate("/Authorization")}
          >
            Увійти
          </button>
          <PersonalCabinet
            className="header-personal-cabinet"
            width="34"
            height="34"
            fill="#F5F1EF"
          />
          <Tools className="header-tools" width="30" height="30" />
        </div>
      </div>
    </header>
  );
}

export default Header;
