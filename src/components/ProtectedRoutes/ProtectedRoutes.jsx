import React from "react";
import { Outlet, Navigate } from "react-router-dom"
import { pathValue } from "../../utils/constants";

const ProtectedRoutes = (props) => {
  const { loggedIn } = props;
  return loggedIn ? <Outlet /> : <Navigate to={pathValue.main} />;
};

export default ProtectedRoutes;