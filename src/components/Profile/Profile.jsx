import React, { useContext, useEffect } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import Greeting from '../Greeting/Greeting';
import useFormValidation from '../../utils/hooks/useFormValidation';
import { emailRegExp } from '../../utils/constants';

const Profile = (props) => {
  const { greeting, onLogout, onEdit } = props;
  const currentUser = useContext(CurrentUserContext);

  const {
    input,
    err,
    handleChange,
    isValid,
    setFirstValue,
  } = useFormValidation();

  useEffect(() => {
    setFirstValue(currentUser)
  }, [currentUser]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { email, name } = input;
    if (name === currentUser.name && email === currentUser.email) {
      console.log('Данные идентичны');;
    } else {
      onEdit(email, name);
    }
  };

  return (
    <main className="content">
      <section className="profile">
        <Greeting
          text={greeting}
        />
        <form action="/" className="profile__form" onSubmit={handleSubmit}>
          <fieldset className="profile__form-inputs">
            <span className="profile__input-error">{err.name || ''}</span>
            <label className="profile__formfield">
              Имя
              <input
                className="profile__form-input"
                type="text"
                id="name-input"
                name="name"
                minLength="2"
                maxLength="30"
                value={input.name || ''}
                onChange={handleChange}
                required
              />
            </label>
            <label className="profile__formfield">
              E-mail
              <input
                className="profile__form-input"
                type="email"
                id="email-input"
                name="email"
                value={input.email || ''}
                onChange={handleChange}
                pattern={emailRegExp}
                required
              />
            </label>
            <span className="profile__input-error">{err.email || ''}</span>
          </fieldset>
          <button className="profile__button profile__button_type_submit" type="submit" disabled={!isValid}>Редактировать</button>
        </form>
        <button type='button' className='profile__button profile__button_type_signout' onClick={onLogout}>Выйти из аккаунта</button>
      </section>
    </main>
  );
};

export default Profile;
