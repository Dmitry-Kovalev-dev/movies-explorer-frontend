import React from 'react';

const AboutProject = () => {
  return (
    <section className="project">
      <h2 className="section-title">О проекте</h2>
      <div className="title-line"></div>
      <div className="project__textbox">
        <h3 className="project__title">Дипломный проект включал 5 этапов</h3>
        <h3 className="project__title">На выполнение диплома ушло 5 недель</h3>
        <p className="project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и
          финальные доработки.</p>
        <p className="project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы
          успешно защититься.</p>
      </div>
      <div className="project__timeline">
        <div className="project__stage">
          <p className="project__stage-text">1 неделя</p>
        </div>
        <div className="project__stage">
          <p className="project__stage-text ">4 недели</p>
        </div>
      </div>
      <div className="project__timeline-caption">
        <p className="project__caption">Back-end</p>
        <p className="project__caption">Front-end</p>
      </div>
    </section>
  );
};

export default AboutProject;
