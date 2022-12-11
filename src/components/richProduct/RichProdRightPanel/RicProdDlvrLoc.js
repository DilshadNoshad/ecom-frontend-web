import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const RicProdDlvrLoc = () => {
  return (
    <Fragment>
      <div className="product_delivery_selector">
        <div className="product_delivery_select">
          <span className="section-title">Delivery Options</span>
        </div>
        <div className="product_select_delivery_details">
          <ion-icon dataalert_icon="alert_icon" name="alert-circle-outline" />
        </div>
      </div>
      <div className="product_details_head">
        <div className="product_delivery_selector_icon">
          <div className="product_select_delivery_icon">
            <ion-icon name="location-outline" />
          </div>
          <div className="product-select_icon_text">
            <span className="section-title">
              Wp Kuala Lumpur, Kuala Lumpur, 50450
            </span>
          </div>
          <div className="product-select_icon_details">
            <Link to="#" className="delivery-detail-link">
              Change
            </Link>
          </div>
        </div>
        <div className="product_delivery_selector_icon">
          <div className="product_select_delivery_icon">
            <ion-icon name="cart-outline" />
          </div>
          <div className="product-select_icon_text">
            <span className="section-title">Fulfilled by Muradi</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RicProdDlvrLoc;
