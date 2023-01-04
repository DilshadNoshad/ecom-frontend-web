import React from "react";
import classes from "./PurchaseSuccessItems.module.css";
const PurchaseSuccessItems = (props) => {
  const { title, quantity, price, id, thumbnail } = props.item;
  return (
    <div className={classes["delivery_dates-products"]}>
      <div className={classes["delivery_dates-products_img_con"]}>
        <div className={classes["delivery_dates-products_img"]}>
          <img src={thumbnail} alt={title} />
        </div>
      </div>
      <div className={classes["delivery_dates-est-time"]}>
        <span>Est.12-feb-14 Feb</span>
      </div>
    </div>
  );
};

export default PurchaseSuccessItems;
