import React from "react";
import RatingStar from "./RatingStar";
import classes from "./RatingSummary.module.css";
const RatingSummary = (props) => {
  return (
    <div className={classes["rating_summary"]}>
      <div className={classes.score}>
        <span className={classes["score-average"]}>{props.rate}</span>
        <span className={classes["score-max"]}>/5</span>
      </div>
      <RatingStar rate={props.rate} />
      <div className={classes.count}>200 Ratings</div>
    </div>
  );
};

export default RatingSummary;
