import React from "react";

import classes from "./OutlineButton.module.css";

const OutlineButton = (props) => {
  const btnClasses = `${classes.button} ${props.className}`;
  return (
    <button
      className={btnClasses}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default OutlineButton;
