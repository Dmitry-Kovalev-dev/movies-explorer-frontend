import React from "react";

const Greeting = (props) => {
  const { text, selector } = props;
  const className = `greeting ${selector}`;
  return (
    <h2 className={className}>{text}</h2>
  );
};

export default Greeting;