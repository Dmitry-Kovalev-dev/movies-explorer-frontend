import React from "react";
import { Link } from "react-router-dom";
import Greeting from "../Greeting/Greeting";
import Logo from "../Logo/Logo";
import useFormValidation from "../../utils/hooks/useFormValidation";
import { emailRegExp } from "../../utils/constants";
import { pathValue } from "../../utils/constants";


const Signup = (props) => {
  const { btnValue, greeting, onRegister, pathname } = props;

  const {
    input,
    err,
    handleChange,
    isValid,
  } = useFormValidation();

  const handleRegisterSubmit = (evt) => {
    evt.preventDefault();
    const { email, name, password } = input;
    onRegister(email, name, password);
  };

  return (
    <div className="sign">
      <div className={`sign__container`}>
        <Logo
          classAuth={'logo_type_auth'}
        />
        <Greeting
          text={greeting}
          selector={'greeting_type_auth'}
        />
        <form
          action="/"
          className="sign__form"
          name="signup"
          onSubmit={handleRegisterSubmit}
        >
          <fieldset className="sign__form-inputs">
            <label className="sign__formfield">Имя
              <input
                id="name-singup"
                type="text"
                className="sign__input"
                name="name"
                placeholder="Иван"
                minLength="2"
                maxLength="30"
                value={input.name || ''}
                onChange={handleChange}
                required
              />
              <span className="sign__input-error">{err.name || ''}</span>
            </label>
            <label className="sign__formfield">E-mail
              <input
                id="email-singup"
                type="email"
                className="sign__input"
                name="email"
                placeholder="email@example.com"
                value={input.email || ''}
                onChange={handleChange}
                pattern={emailRegExp}
                required
              />
              <span className="sign__input-error">{err.email || ''}</span>
            </label>
            <label className="sign__formfield">Пароль
              <input
                id="password-singup"
                type="password"
                className="sign__input"
                name="password"
                placeholder="Введите пароль"
                value={input.password || ''}
                onChange={handleChange}
                minLength="6"
                required
              />
              <span className="sign__input-error">{err.password || ''}</span>
            </label>
          </fieldset>
          <button type="submit" className="sign__save-input-btn" disabled={!isValid}>{btnValue}</button>
        </form>
        {pathname === pathValue.signIn ?
          <p className="sign__caption">Ещё не зарегистрированы? <Link className="sign__caption sign__caption_type_link" to={pathValue.signUp}>Регистрация</Link></p> :
          <p className="sign__caption">Уже зарегистрированы? <Link className="sign__caption sign__caption_type_link" to={pathValue.signIn}>Войти</Link></p>
        }
      </div>
    </div>
  );
};

export default Signup;