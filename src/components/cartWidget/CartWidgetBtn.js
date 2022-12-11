import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Currency } from "../../config";
import classes from "./CartWidgetBtn.module.css";
const CartWidgetBtn = (props) => {
  const location = useLocation();
  const isCartPage = location.pathname === "/cart";
  const cartWidTotal = useSelector((state) => state.cart.totalAmount);
  console.log(cartWidTotal, "----");
  let cartWidgetButton;

  if (!isCartPage && props.hasItemsInCartWd) {
    cartWidgetButton = (
      <Link
        className={`${classes["goto_cart-btn"]} ${classes.button}`}
        to="/cart"
      >
        Go to cart
      </Link>
    );
  }
  if (!props.hasItemsInCartWd) {
    cartWidgetButton = (
      <Link className={`${classes["goto_cart-btn"]} ${classes.button}`} to="/">
        CONTINUE SHOPPING
      </Link>
    );
  }

  return (
    <div className={classes["btn-down"]}>
      {props.hasItemsInCartWd && (
        <div className={classes["cw-total_val"]}>
          Total:&nbsp;{Currency}&nbsp;
          {cartWidTotal}
        </div>
      )}
      {cartWidgetButton}
    </div>
  );
};

export default CartWidgetBtn;
