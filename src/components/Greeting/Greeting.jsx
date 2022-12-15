import React from "react";

const Greeting = (props) => {
  const { text, classAuth } = props;
  return (
    <h2 className={`greeting ${classAuth}`}>{text}</h2>
  );
};

export default Greeting;