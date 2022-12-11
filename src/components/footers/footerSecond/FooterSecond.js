import React from "react";
import { Link } from "react-router-dom";
import classes from "./FooterSecond.module.css";
import deliveryPartnerOne from "../../../assets/images/TCS_Pakistan_logo.png";
const FooterSecond = () => {
  return (
    <div className={classes["footer_two"]}>
      <section>
        <div className={classes["footer-verify_container"]}>
          <div className={classes["payment_inner"]}>
            <h3>Payment Methods</h3>
            <Link
              to={"#"}
              className={`${classes["payment-ico"]} ${classes["card_one"]}`}
            />
            <Link
              to={"#"}
              className={`${classes["payment-ico"]} ${classes["card_two"]}`}
            />
            <Link
              to={"#"}
              className={`${classes["payment-ico"]} ${classes["card_three"]}`}
            />
            <Link
              to={"#"}
              className={`${classes["payment-ico"]} ${classes["card_four"]}`}
            />
            <Link
              to={"#"}
              className={`${classes["payment-ico"]} ${classes["card_five"]}`}
            />
          </div>
          <div className={classes["delivery_inner"]}>
            <h3>Delivery Services</h3>
            <img
              className={classes["mur-icon-delivery"]}
              src={deliveryPartnerOne}
              alt="tcs"
            />
          </div>
          <div className={classes["verify_inner"]}>
            <h3>Verified by</h3>
            <i
              className={`${classes["muradi-footer-sprit"]} ${classes["icon-img-pci-compliant"]}`}
            ></i>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FooterSecond;
