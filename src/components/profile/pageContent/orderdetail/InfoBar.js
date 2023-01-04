import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./InfoBar.module.css";
const InfoBar = (props) => {
  const navigate = useNavigate();
  const previousBtnHandler = () => {
    navigate(-1);
  };
  return (
    <div className={classes.head}>
      <div onClick={previousBtnHandler} className={classes.btnback}>
        <ion-icon name="chevron-back-outline"></ion-icon>
        <span>BACK</span>
      </div>
      <div>
        <span>ORDER . {props.orderNumber}</span>
        <span className={classes.sep}>|</span>
        <span className={classes.orderstatus}>order completed</span>
      </div>
    </div>
  );
};

export default InfoBar;
