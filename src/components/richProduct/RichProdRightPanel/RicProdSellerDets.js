import React from "react";
import { Link } from "react-router-dom";
import classes from "./RicProdSellerDets.module.css";
const RicProdSellerDets = () => {
  return (
    <div className={classes["store_details"]}>
      <div className="product-seller product_delivery_selector">
        <div className="product_delivery_select">
          <span className="section-title">
            Sold by&nbsp;
            <b>FLYKART</b>
          </span>
        </div>
        <div className="product_select_delivery_details">
          <Link to="#" className="delivery-detail-link">
            <ion-icon datachat_icon="chat_box" name="chatbox-ellipses-sharp" />
            <span>Chat</span>
          </Link>
        </div>
      </div>
      <div className={classes["product-seller-info-pc"]}>
        <div className={classes["info-content"]}>
          <div className={classes["seller-info-title"]}>Seller Ratings</div>
          <div className={classes["seller-info-value"]}>79%</div>
        </div>
        <div className={classes["info-content"]}>
          <div className={classes["seller-info-title"]}>Ship On Time</div>
          <div className={classes["seller-info-value"]}>100%</div>
        </div>
        <div className={classes["info-content"]}>
          <div className={classes["seller-info-title"]}>Chat Response</div>
          <div className={classes["seller-info-value"]}>100%</div>
        </div>
      </div>
      <div className={classes["seller-link"]}>
        <Link
          to="/shop-collection/1"
          className="delivery-detail-link"
          target="_self"
          href
        >
          GO TO STORE
        </Link>
      </div>
    </div>
  );
};

export default RicProdSellerDets;
