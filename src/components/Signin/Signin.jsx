import React from "react";
import Greeting from "../Greeting/Greeting";
import Logo from "../Logo/Logo";
import { Link, useLocation } from "react-router-dom";

const Signin = (props) => {

  const { btnValue, greeting, onLogin } = props;
  const path = useLocation().pathname;
  const handleLoginSubmit = (evt) => {
    evt.preventDefault();
    onLogin();
  }

  return (
    <div className="sign">
      <div className={'sign__container'}>
        <Logo 
          classAuth={'logo_type_auth'}
        />
        <Greeting
          text={greeting}
          classAuth={'greeting_type_auth'}
        />
        <form action="/" className="sign__form" >
          <fieldset className="sign__form-inputs">
            <label className="sign__formfield">E-mail
              <input id="email-singin" type="email" className="sign__input" name="email" placeholder="email@example.com" required />
              <span className="sign__input-error"> </span>
            </label>
            <label className="sign__formfield">Пароль
              <input id="password-singin" type="password" className="sign__input" name="password" placeholder="Введите пароль"
                minLength="6" required />
              <span className="sign__input-error">Что-то пошло не так...</span>
            </label>
          </fieldset>
          <button type="button" className="sign__save-input-btn" onClick={handleLoginSubmit}>{btnValue}</button>
        </form>
        {path === '/signin' ?
          <p className="sign__caption">Ещё не зарегистрированы? <Link className="sign__caption sign__caption_type_link" to="/signup">Регистрация</Link></p> :
          <p className="sign__caption">Уже зарегистрированы? <Link className="sign__caption sign__caption_type_link" to="/signin">Войти</Link></p>
        }
      </div>
    </div>


  );
};

export default Signin;