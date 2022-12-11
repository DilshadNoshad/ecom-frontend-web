import React from "react";
import { Link } from "react-router-dom";
import PurchaseSuccessEmail from "./PurchaseSuccessEmail";
import PurchaseSuccessList from "./PurchaseSuccessList";
import PurchaseSuccessTotal from "./PurchaseSuccessTotal";
import classes from "./PurchaseSummary.module.css";
const PurchaseSummary = (props) => {
  return (
    <div className={classes["delivery_dates-wrap"]}>
      <div className={classes["delivery_dates-container"]}>
        <div className={classes["delivery_dates_title"]}>
          Your Delivery dates
        </div>
        <PurchaseSuccessList orderedItems={props.orderedItems} />
        <PurchaseSuccessEmail orderedUserEmail={props.orderedUserEmail} />
        <PurchaseSuccessTotal orderedTotal={props.orderedTotal} />
        <div className={classes["shop_more-btn_flex"]}>
          <Link
            className={`${classes["shop_more-btn"]} ${classes.button}`}
            to="/"
          >
            Shop More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PurchaseSummary;
