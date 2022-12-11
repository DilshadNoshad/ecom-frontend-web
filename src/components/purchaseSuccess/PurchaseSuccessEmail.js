import React from "react";
import classes from "./PurchaseSuccessEmail.module.css";
const PurchaseSuccessEmail = (props) => {
  return (
    <article className={classes["delivery_dates-table"]}>
      <div className={classes["confirmation_msg-contain"]}>
        <ion-icon name="mail-outline" data_nmi="mail_ico" />
        <p>
          We've sent a confirmation email to&nbsp;
          <span>{props.orderedUserEmail}</span>&nbsp;with the order details.
        </p>
      </div>
    </article>
  );
};

export default PurchaseSuccessEmail;
