import React from "react";
import { Currency } from "../../../config";

const RicProdDlvrDets = (props) => {
  return (
    <div className="product_details_body">
      <div className="product_delivery_selector_icon">
        <div className="product_select_delivery_icon">
          <ion-icon name="bag-handle-outline" />
        </div>
        <div className="product-select_icon_text">
          <span className="section-title">Standard Delivery</span>
          <p className="section-para">
            Get within {props.productDeliveryDays} day(s)
          </p>
        </div>
        <div className="product-select_icon_details">
          <span>
            <b>
              {props.productDeliveryCharges <= 0 ||
              props.productDeliveryCharges == null ||
              props.productDeliveryCharges == undefined
                ? "FREE"
                : `${Currency} ${props.productDeliveryCharges.toFixed(2)}`}
            </b>
          </span>
        </div>
      </div>
      <div className="deliverypromo">
        Enjoy free shipping promotion with minimum 3 items.
      </div>
      <div className="product_delivery_selector_icon">
        <div className="product_select_delivery_icon">
          <ion-icon name="earth-outline" />
        </div>
        <div className="product-select_icon_text">
          <span className="section-title">Ship from Overseas.</span>
        </div>
      </div>
      <div className="product_delivery_selector_icon">
        <div className="product_select_delivery_icon">
          <ion-icon name="cash-outline" />
        </div>
        <div className="product-select_icon_text">
          <span className="section-title">Cash on Delivery Available</span>
        </div>
      </div>
    </div>
  );
};

export default RicProdDlvrDets;
