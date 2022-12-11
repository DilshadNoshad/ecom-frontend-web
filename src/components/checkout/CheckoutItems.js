import React from "react";
import { Link } from "react-router-dom";
import { Currency } from "../../config";
import classes from "./CheckoutItems.module.css";
const CheckoutItems = (props) => {
  const { title, quantity, price, id, index, thumbnail, totalPakages } =
    props.item;

  return (
    <div id={`shop000${id}`} className={classes["checkout_shop-item"]}>
      <div className={classes["checkout_shop-title"]}>
        <div className={classes["checkout_shop_title-left"]}>
          <span>{`Package ${index + 1} of ${totalPakages}`}</span>
        </div>
        <div className={classes["checkout_shop_title-right"]}>
          <span className={classes["package-title-tips"]}>Shipped by</span>
          <span className={classes["package-title-brand"]}>LiJian</span>
        </div>
      </div>
      <div className={classes["delivery-item_content-box"]}>
        <p className={classes["delivery-item-title"]}>
          Select your delivery option
        </p>
        <div className={classes["delivery-item_box"]}>
          <div className={classes["delivery-item-box_price"]}>
            <div className={classes["check_ico"]}>
              <ion-icon
                name="checkmark-circle"
                role="img"
                className="md hydrated"
                aria-label="checkmark circle"
              />
            </div>
            <div className={classes["delivery-item_price"]}>
              <span className="delivery-item_current-price">RM3.00</span>
            </div>
          </div>
          <p className={classes["delivery-item_para"]}>Standard Delivery</p>
          <p className={classes["delivery-item_para"]}>
            Est. Arrival:<span>10-21 Feb</span>
          </p>
        </div>
      </div>
      <div className={classes["checkout_item-details"]}>
        <Link to="#">
          <figure>
            <div className={classes["checkout_product-img"]}>
              <img src={thumbnail} alt="" />
            </div>

            <figcaption>
              <span className={classes["checkout_product-title"]}>
                <div className={classes["checkout_banner-img"]}>
                  <img
                    src="https://img.alicdn.com/tfs/TB1hOuhB7T2gK0jSZFkXXcIQFXa-168-48.png"
                    alt=""
                  />
                </div>
                {title}
              </span>
              <span className={classes["checkout_product-sub-title"]}>
                OEM, Color Family:White, Brand Compatibility:Universal
              </span>
            </figcaption>
          </figure>
        </Link>
        <div className={classes["checkout-middle_item"]}>
          <p className={classes["checkout_item-price"]}>
            {Currency}
            {price}
          </p>
          {/* <div className={classes["checkout_item-operators"]}>
            <ion-icon data_nmi="trash_ico" name="trash-outline" />
          </div> */}
        </div>
        <div className="checkout-right_item">
          <div className="product_select_body">
            <span className="item-quantity">Qty: </span>
            <span className="item-quantity-value">{quantity}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItems;
