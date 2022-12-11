import React from "react";
import RatingDetails from "./RatingDetails";
import RatingSummary from "./RatingSummary";
import classes from "./RichProdRRRat.module.css";
const RichProdRRRat = (props) => {
  return (
    <div className={classes["mod_rating"]}>
      <RatingSummary rate={props.rate} />
      <RatingDetails />
    </div>
  );
};

export default RichProdRRRat;
