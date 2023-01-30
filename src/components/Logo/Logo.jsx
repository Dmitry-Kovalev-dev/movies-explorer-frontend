import React from "react";
import { Link } from "react-router-dom";
import { pathValue } from "../../utils/constants";

const Logo = (props) => {
  const { classAuth } = props;
  return (
    <Link className={`logo ${classAuth}`} to={pathValue.main}></Link>
  );
};

export default Logo;