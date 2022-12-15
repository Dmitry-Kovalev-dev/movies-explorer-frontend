import React from "react";
import { Link } from "react-router-dom";

const Logo = (props) => {
  const { classAuth } = props;
  return (
    <Link className={`logo ${classAuth}`} to="/"></Link>
  );
};

export default Logo;