import React from 'react';

const Student = () => {
  return (
    <section className="student">
      <h2 className="section-title">Студент</h2>
      <div className="title-line"></div>
      <article className="student__info">
        <div className="student__text">
          <h3 className="student__name">Дмитрий</h3>
          <p className="student__career">Фронтенд-разработчик, 26 лет</p>
          <p className="student__about">Начал изучать курс Я.Практикума по веб-разработке, так как всегда была мысль стать
            разработчиком. Для меня веб-разработка – это возможность прикоснуться к созданию веб-интерфейсов с
            качественным UX, при взаимодействии с которыми пользователи будут довольны.</p>
          <a href="https://github.com/Dmitry-Kovalev-dev" className="student__link" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
        <div className="student__photo"></div>
      </article>
      <div className="student__portfolio">
        <h4 className="student__portfolio-title">Портфолио</h4>
        <nav className="student__portfolio-items">
          <a href="/" className="student__portfolio-item">Статичный сайт <span className="student__item-arrow"></span></a>
          <a href="/" className="student__portfolio-item">Адаптивный сайт<span className="student__item-arrow"></span></a>
          <a href="/" className="student__portfolio-item">Одностраничное приложение<span className="student__item-arrow"></span></a>
        </nav>
      </div>
    </section>
  );
};

export default Student;