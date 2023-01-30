import React from 'react';

const Techs = () => {
  return (
    <section className="techs">
      <h2 className="section-title">Технологии</h2>
      <div className="title-line"></div>
      <h3 className="techs__title">7 технологий</h3>
      <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
      </p>
      <div className="techs__items">
        <div className="techs__item">
          <p className="techs__item-text">HTML</p>
        </div>
        <div className="techs__item">
          <p className="techs__item-text">CSS</p>
        </div>
        <div className="techs__item">
          <p className="techs__item-text">JS</p>
        </div>
        <div className="techs__item">
          <p className="techs__item-text">React</p>
        </div>
        <div className="techs__item">
          <p className="techs__item-text">Git</p>
        </div>
        <div className="techs__item">
          <p className="techs__item-text">Express.js</p>
        </div>
        <div className="techs__item">
          <p className="techs__item-text">MongoDB</p>
        </div>
      </div>
    </section>
  );
};

export default Techs;