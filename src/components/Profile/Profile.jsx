import React from 'react';
import Greeting from '../Greeting/Greeting';

const Profile = (props) => {
  const { greeting } = props;
  return (
    <main className="content">
      <section className="profile">
        <Greeting
          text={greeting}
        />
        <form action="/" className="profile__form">
          <fieldset className="profile__form-inputs">
            <label className="profile__formfield">
              Имя
              <input className="profile__form-input" type="text" id="name-input" name="name" minLength="2" maxLength="30" defaultValue="Дмитрий" required />
            </label>
            <label className="profile__formfield">
              E-mail
              <input className="profile__form-input" type="email" id="email-input" name="email" defaultValue="email@email.com" required />
            </label>
          </fieldset>
          <button className="profile__button profile__button_type_submit" type="submit">Редактирвать</button>
        </form>
        <button type='button' className='profile__button profile__button_type_signout'>Выйти из аккаунта</button>
      </section>
    </main>
  );
};

export default Profile;