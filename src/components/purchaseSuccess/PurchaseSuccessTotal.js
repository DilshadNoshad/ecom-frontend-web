import React from "react";
import { Currency } from "../../config";
import classes from "./PurchaseSuccessTotal.module.css";
const PurchaseSuccessTotal = (props) => {
  return (
    <article className={classes["delivery-order_summary"]}>
      <div className={classes["order_summary-contain"]}>
        <h1 className={classes["order_summary-title"]}>Order Summary</h1>
        <div className={classes["order_summary-right"]}>
          <ion-icon name="chevron-down-outline" />
        </div>
      </div>
      <p>
        {Currency} {props.orderedTotal}
        <span></span>
      </p>
    </article>
  );
};

export default PurchaseSuccessTotal;
