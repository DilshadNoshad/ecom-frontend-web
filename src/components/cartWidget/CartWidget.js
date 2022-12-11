import React from "react";
import { useSelector } from "react-redux";
import CartWidgetBtn from "./CartWidgetBtn";
import CartWidgetList from "./CartWidgetList";
import classes from "./CartWidget.module.css";
const CartWidget = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const hasCartItems = cartItems.length > 0;
  return (
    <div id="cartWidget" className={classes["cart-Wigdet"]}>
      {hasCartItems ? (
        <CartWidgetList cartWidItems={cartItems} />
      ) : (
        <p className={classes["cart-wd-empty"]}>
          There are no items in this cart
        </p>
      )}
      <CartWidgetBtn hasItemsInCartWd={hasCartItems} />
    </div>
  );
};

export default CartWidget;
