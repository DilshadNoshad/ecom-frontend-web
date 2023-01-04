import React from "react";
import CartWidgetItems from "./CartWidgetItems";
import classes from "./CartWidgetList.module.css";
const CartWidgetList = (props) => {
  return (
    <div className={classes["cart-Widget-items"]}>
      {props.cartWidItems.map((item) => (
        <CartWidgetItems
          key={item.cartDetailId}
          item={{
            id: item.cartDetailId,
            title: item.productName,
            thumbnail: item.productImgUrl,
            quantity: item.productQty,
            price: item.product_original_price,
          }}
        />
      ))}
    </div>
  );
};

export default CartWidgetList;
