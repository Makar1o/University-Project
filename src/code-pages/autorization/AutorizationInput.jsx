import React from "react";
import { ReactComponent as Eye } from "../../images/svgIcons/eye-password.svg";
import ShowMoreButton from "../../components/ShowMoreButton";

function AuthorizationInput() {
  return (
    <section className="section-containar">
      <form>
        <label htmlFor="email"></label>
        <input
          className="autorization-input"
          type="text"
          id="email"
          name="email"
          placeholder="Email"
        />
        <p className="label-input-email">Будь ласка, заповніть це поле</p>
        <br />
        <br />
        <label htmlFor="password"></label>
        <input
          className="autorization-input"
          type="text"
          id="password"
          name="password"
          placeholder="Пароль"
        />
        <Eye className="input-icon" />
        <p className="label-input-password ">Відновити пароль</p>
        <br />
        <br />
        <div className="autorization-button">
          <button className="autorization-button" type="submit">
            <ShowMoreButton showMore="Увійти" />
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthorizationInput;
