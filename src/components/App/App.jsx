import React from 'react';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { CurrentUserContext } from "../../context/CurrentUserContext";

const App = () => {
  return (
    <CurrentUserContext.Provider value={'hello'}>
      <Header />
      <Main />
      <Footer />
    </CurrentUserContext.Provider >
  );
};

export default App;