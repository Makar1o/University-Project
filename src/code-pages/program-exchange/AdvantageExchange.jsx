import React from "react";
import Advantage from "../../images/home-page/advantage.png";
import FormAdvantage from "../../images/home-page/form-advantage.png";
function AdvantageExchange() {
  return (
    <section className="advantage-exchange-container">
      <h1 className="advatege-topic">
        Які плюси брати участь у програмі обміну
      </h1>
      <div className="advantage-content-container">
        <div>
          <div className="advantage-general-speciality">
            <h1 className="advantage-subtopic">Загальна Особливість</h1>
            <p className="advantage-content-special">
              Участь у програмі обміну - це відмінна можливість вивчити нову
              культуру, розвинути мовні навички, знайти нові друзі та отримати
              незабутні враження, які змінять ваше життя.
            </p>
          </div>
          <div className="advantage-first">
            <div className="advantage-paragraph">
              <img className="form-advantage" src={FormAdvantage} alt="Form" />

              <p className="advantage-content">
                <span>Культурний обмін: </span> Ви маєте можливість поглибити
                свої знання про іншу культуру, мову, традиції та спосіб життя,
                живучи та навчаючись у новому середовищі.
              </p>
            </div>
            <div className="advantage-paragraph">
              <img className="form-advantage" src={FormAdvantage} alt="Form" />

              <p className="advantage-content">
                <span> Академічні можливості:</span> Програми обміну часто
                надають доступ до нових курсів, спеціалізацій та наукових
                досліджень, які можуть бути недоступні у вашому домашньому
                університеті
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            className="advantage-image"
            src={Advantage}
            alt="happy students"
          />
        </div>
        <div className="advantage-second">
          <div className="advantage-paragraph">
            <img className="form-advantage" src={FormAdvantage} alt="Form" />

            <p className="advantage-content right">
              <span>Розвиток мови:</span> Живучи та навчаючись у мовному
              середовищі, ви підвищуєте свої знання та навички мови, що є
              надзвичайно корисним для вашого майбутнього професійного та
              особистого розвитку.
            </p>
          </div>
          <div className="advantage-paragraph">
            <img className="form-advantage" src={FormAdvantage} alt="Form" />
            <p className="advantage-content right">
              <span> Поглиблене вивчення предметів:</span> Ви маєте можливість
              вивчати ваші предмети в контексті нової культури та підходів, що
              може допомогти вам отримати нові інсайти та підходи до вашої
              галузі.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdvantageExchange;
