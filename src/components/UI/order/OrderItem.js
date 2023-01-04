import React from "react";
import { Link } from "react-router-dom";
import { stringToDate } from "../../../entities/GeneralFunc";
import classes from "./OrderItem.module.css";
const OrderItem = (props) => {
  const {
    title,
    thumbnail,
    quantity,
    orderStatus,
    orderNumber,
    requestedDate,
    link,
  } = props.order;

  return (
    <div className={classes.order}>
      <div className={classes["reverse-info"]}>
        <div className="pull-left reverse-info-left">
          <div className={`${classes["info-createdAt"]} ${classes.text}`}>
            Requested on {stringToDate(requestedDate)}
          </div>

          <div className="info-number">
            <span className={classes.text}>Order&nbsp;</span>
            <span className="text info desc bold" />

            <Link to="#" className={classes.link}>
              #{orderNumber}
            </Link>
          </div>
        </div>
        <Link to="#" className={classes.link}>
          MORE DETAILS
        </Link>
      </div>
      <Link to={link} className={classes["order-item"]}>
        {/* <div> */}
        <div className={`${classes["item-con"]} ${classes["item-pic"]}`}>
          <img src={thumbnail} alt="" />
        </div>
        <div className={`${classes["item-main-con"]} ${classes["item-main"]}`}>
          <div>
            <div className={`${classes.text} ${classes["item-title"]}`}>
              {title}
            </div>
          </div>
        </div>
        <div className={`${classes["item-con"]} ${classes["item-quantity"]}`}>
          <span>
            <span className={classes["text-info"]}>Qty:</span>
            <span className={classes.text}>&nbsp;{quantity}</span>
          </span>
        </div>
        <div className={`${classes["item-con"]} ${classes["item-status"]}`}>
          <p className={classes.capsule}>{orderStatus}</p>
        </div>

        <div className={classes["item-con"]}></div>
      </Link>
    </div>
  );
};

export default OrderItem;
