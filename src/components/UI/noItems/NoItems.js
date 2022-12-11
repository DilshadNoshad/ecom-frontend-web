import React from "react";
import OutlineButton from "../buttons/OutlineButton";
import classes from "./NoItems.module.css";
const NoItems = (props) => {
  return (
    <div className={classes["item-empty"]}>
      <div className={classes["item-empty-text"]}>{props.noItemText}</div>
      <OutlineButton
        onClick={props.onClick}
        className={classes["item-empty-button"]}
      >
        {props.btnText}
      </OutlineButton>
    </div>
  );
};

export default NoItems;
