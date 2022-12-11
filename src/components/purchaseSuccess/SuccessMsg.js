import React from "react";
import { Currency } from "../../config";
import classes from "./SuccessMsg.module.css";
const SuccessMsg = (props) => {
  return (
    <div className={classes["thank_u-msg-wrap"]}>
      <lord-icon
        src="https://cdn.lordicon.com/zczmziog.json"
        trigger="loop"
        colors="primary:#88ce02,secondary:#88ce02"
        delay="2000"
        data_checkmark="checkmark-circle"
      ></lord-icon>
      <div className={classes["thank_u-msg-description"]}>
        <h1 className={classes["thank_u-msg_title"]}>
          Thank you for your purchase!
        </h1>
        <p className={classes["thank_u-msg_subtotal"]}>
          {Currency}&nbsp;
          <span>{props.orderedTotal}</span>
        </p>
        <p className={classes["thank_u-msg_order_num"]}>
          Your order number is&nbsp;
          <span>{`OPKMR${Math.floor(
            100000 + Math.random() * 90000000000
          )}`}</span>
        </p>
      </div>
    </div>
  );
};

export default SuccessMsg;
