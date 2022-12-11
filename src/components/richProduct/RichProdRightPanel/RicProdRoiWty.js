import React, { Fragment } from "react";
import classes from "./RicProdRoiWty.module.css";
const RicProdRoiWty = () => {
  return (
    <Fragment>
      <div className="product_details_footer">
        <div className="product_delivery_selector">
          <div className="product_delivery_select">
            <span className="section-title">Return &amp; Warranty</span>
          </div>
          <div className="product_select_delivery_details">
            <ion-icon dataalert_icon="alert_icon" name="alert-circle-outline" />
          </div>
        </div>
        <div className="product_delivery_selector_icon">
          <div className="product_select_delivery_icon success_clr">
            <ion-icon name="checkmark-circle" />
          </div>
          <div className="product-select_icon_text">
            <span className="section-title">Authentic</span>
          </div>
        </div>
        <div className="product_delivery_selector_icon">
          <div className="product_select_delivery_icon success_clr">
            <ion-icon name="checkmark-circle" />
          </div>
          <div className="product-select_icon_text">
            <span className="section-title">15 Days Return</span>
            <p className="section-para">
              "Don’t want item or it doesn’t suit me" return reason is
              applicable
            </p>
          </div>
        </div>
        <div className="product_delivery_selector_icon">
          <div className="product_select_delivery_icon success_clr">
            <ion-icon name="shield-outline" />
          </div>
          <div className="product-select_icon_text">
            <span className="section-title">
              1 Year International Manufacturer Warranty
            </span>
          </div>
        </div>
      </div>
      <div className={classes["app_guide-wrap"]}>
        <div className={classes["guideApp"]}>
          <div className={classes["qr_code"]}>
            {/* <canvas height="111" width="111" ></canvas> */}
          </div>
          <div className={classes["qr_code-info"]}>
            <div className={classes["gr_app_img"]}>
              <img
                src="https://img.alicdn.com/tfs/TB1f4HzFbH1gK0jSZFwXXc7aXXa-96-96.png"
                alt=""
              />
            </div>
            <p className={classes["quide_para"]}>
              Download app to enjoy RM8 voucher + Free Shipping!
            </p>
          </div>
        </div>
        <span className={classes["quide_para"]}>Scan with mobile</span>
      </div>
    </Fragment>
  );
};

export default RicProdRoiWty;
