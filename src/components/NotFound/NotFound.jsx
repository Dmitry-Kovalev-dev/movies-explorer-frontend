import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <p className="not-found__code">404</p>
      <p className="not-found__message">Страница не найдена</p>
      <NavLink className="not-found__back" onClick={() => navigate(-1)}>Назад</NavLink>
    </div>
  );
};

export default NotFound;