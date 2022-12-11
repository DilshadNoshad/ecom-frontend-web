import React from "react";
import { useDispatch } from "react-redux";
import { Currency } from "../../config";
import { cartAction } from "../../Store/cart-slice";
import classes from "./CartWidgetItems.module.css";
const CartWidgetItems = (props) => {
  const dispatch = useDispatch();
  const { id, title, quantity, price, thumbnail } = props.item;
  const deleteCartWItemHandler = () => {
    dispatch(cartAction.deleteItemFromCart(id));
  };
  return (
    <li className={classes["cart-Wigdet-item"]}>
      <figure>
        <div className={classes["cart-Wigdet_show"]}>
          <div className={classes["cart-Wigdet-img"]}>
            <img src={thumbnail} alt="" />
          </div>
        </div>
        <figcaption>
          <div className={classes["cart-Wigdet-title"]}>{title}</div>
          <span>x{quantity}</span>
          <div className={classes["cart-Wigdet-details"]}>
            <span className={classes["cw-item-price"]}>
              {Currency}&nbsp;{price}
            </span>

            <ion-icon
              data_nmi="trash_ico"
              onClick={deleteCartWItemHandler}
              name="trash-outline"
            />
          </div>
        </figcaption>
      </figure>
    </li>
  );
};

export default CartWidgetItems;
