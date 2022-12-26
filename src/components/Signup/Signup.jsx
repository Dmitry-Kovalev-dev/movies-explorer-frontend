import React from "react";
import { Link, useLocation } from "react-router-dom";
import Greeting from "../Greeting/Greeting";
import Logo from "../Logo/Logo";

const Signup = (props) => {

  const { btnValue, greeting, onRegister } = props;
  const path = useLocation().pathname;
  const handleRegisterSubmit = (evt) => {
    evt.preventDefault();
    onRegister();
  }

  return (
    <div className="sign">
      <div className={`sign__container`}>
        <Logo 
          classAuth={'logo_type_auth'}
        />
        <Greeting
          text={greeting}
          classAuth={'greeting_type_auth'}
        />
        <form action="/" className="sign__form" >
          <fieldset className="sign__form-inputs">
            <label className="sign__formfield">Имя
              <input id="name-singup" type="text" className="sign__input" name="name" placeholder="Иван"
                minLength="2" maxLength="40" required />
              <span className="sign__input-error"> </span>
            </label>
            <label className="sign__formfield">E-mail
              <input id="email-singup" type="email" className="sign__input" name="email" placeholder="email@example.com" required />
              <span className="sign__input-error"> </span>
            </label>
            <label className="sign__formfield">Пароль
              <input id="password-singup" type="password" className="sign__input" name="password" placeholder="Введите пароль"
                minLength="6" required />
              <span className="sign__input-error">Что-то пошло не так...</span>
            </label>
          </fieldset>
          <button type="button" className="sign__save-input-btn" onClick={handleRegisterSubmit}>{btnValue}</button>
        </form>
        {path === '/signin' ?
          <p className="sign__caption">Ещё не зарегистрированы? <Link className="sign__caption sign__caption_type_link" to="/signup">Регистрация</Link></p> :
          <p className="sign__caption">Уже зарегистрированы? <Link className="sign__caption sign__caption_type_link" to="/signin">Войти</Link></p>
        }
      </div>
    </div>
  );
};

export default Signup;