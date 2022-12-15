
import React from 'react';
import AboutProject from "../AboutProject/AboutProject";
import Promo from "../Promo/Promo"
import Student from "../Student/Student";
import Techs from "../Techs/Techs";

const Main = () => {
  return (
    <main className="content">
      <Promo />
      <AboutProject />
      <Techs />
      <Student />
    </main>
  );
};

export default Main;