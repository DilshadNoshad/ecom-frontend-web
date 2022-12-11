import React from "react";
import { Currency } from "../../../../config";
import classes from "./OrderItemTotal.module.css";
const OrderItemTotal = (props) => {
  const { shippingPrice, finalPriceWithoutTax, finalPriceWithTax } =
    props.itemTotal;
  return (
    <div>
      <div className={classes.oit_tab}>
        <div className={classes.oit_tab_q}>
          <span>Merchandise Subtotal</span>
        </div>
        <div className={classes.oit_tab_a}>
          <div>
            {Currency}
            {finalPriceWithoutTax}
          </div>
        </div>
      </div>
      <div className={classes.oit_tab}>
        <div className={classes.oit_tab_q}>
          <span>Shipping</span>
        </div>
        <div className={classes.oit_tab_a}>
          <div>
            {Currency}
            {shippingPrice}
          </div>
        </div>
      </div>
      <div className={classes.oit_tab}>
        <div className={classes.oit_tab_q}>
          <span>Order Total</span>
        </div>
        <div className={classes.oit_tab_a}>
          <div className={classes.oit_total}>
            {Currency}
            {finalPriceWithTax}
          </div>
        </div>
      </div>
      <div className={classes.oit_tab}>
        <div className={classes.oit_tab_q}>
          <span>Payment Method</span>
        </div>
        <div className={classes.oit_tab_a}>
          <div>Online Banking</div>
        </div>
      </div>
    </div>
  );
};

export default OrderItemTotal;
