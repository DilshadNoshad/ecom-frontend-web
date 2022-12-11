import React from "react";
import classes from "./TooltipMenu.module.css";
const TooltipMenu = (props) => {
  return <div className={classes.tolti_menu}>{props.children}</div>;
};

export default TooltipMenu;
