import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../Store/cart-slice";
import { totalCartItems } from "./cart-totaItems";
import classes from "./CartList.module.css";
const CartList = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const cartTotalItems = totalCartItems(cartItems);

  const deleteAllItemHandler = () => {
    dispatch(cartAction.clearCart());
  };
  return (
    <div className={classes["list_header"]}>
      <div className={classes["list_header-container"]}>
        <div className={classes["list_header-main"]}>
          <input
            type="checkbox"
            name={props.name}
            onChange={props.handleClick}
            checked={props.isChecked}
          />
          SELECT ALL (<span>{cartTotalItems}</span> ITEM(S))
        </div>
        <div className="list_header-operators">
          <div
            className={classes["selected_delete-btn"]}
            onClick={deleteAllItemHandler}
          >
            <span data_nmi="trash_ico">
              <ion-icon name="trash-outline" />
            </span>
            <span>DELETE All</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;
