import React from "react";

function OrangeCircle() {
  return (
    <section>
      <hr className="orange-line" />
      <div className="instruction-circles">
        <div>
          <div className="orange-circle"></div>
          <p className="circle-content">Оберіть програму</p>
        </div>
        <div>
          <div className="orange-circle"></div>
          <p className="circle-content">Дотримуйтеся вимог</p>
        </div>
        <div>
          <div className="orange-circle"></div>
          <p className="circle-content">Подайте заявку</p>
        </div>
        <div>
          <div className="orange-circle"></div>
          <p className="circle-content">Підготуйте документи</p>
        </div>
        <div>
          <div className="orange-circle"></div>
          <p className="circle-content">Пройдіть відбір</p>
        </div>
      </div>
    </section>
  );
}

export default OrangeCircle;
