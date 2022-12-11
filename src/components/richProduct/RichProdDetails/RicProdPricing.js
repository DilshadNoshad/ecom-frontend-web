import React from "react";
import { Currency } from "../../../config";
import classes from "./RicProdPricing.module.css";
const RicProdPricing = (props) => {
  return (
    <div className={classes["product-price"]}>
      <span className={classes["pdp-price"]}>
        {Currency}
        {props.productPrice}
      </span>
      <div className={classes["origin-block"]}>
        <span className={classes["pdp-price-deleted"]}>
          {Currency}
          {props.productDelPrice}
        </span>
        <span className={classes["pdp_discount"]}>
          -{props.productDiscount}%
        </span>
      </div>
    </div>
  );
};

export default RicProdPricing;
