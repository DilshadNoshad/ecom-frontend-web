import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Currency } from "../../config";
import useHttp from "../../hooks/use-http";
import { deleteCartItems } from "../../Services/cartService";
import { sendUpdateCartData } from "../../Store/cart-actions";
import { cartAction } from "../../Store/cart-slice";
import QuantityController from "../UI/quantityController/QuantityController";
import classes from "./CartItems.module.css";
const CartItems = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const { sendRequest, status, error } = useHttp(deleteCartItems, true);
  const { title, quantity, price, id, cartDetailId, thumbnail } = props.item;
  // const [quantityValue, setQuantityValue] = useState(quantity);
  const addItemQuantityHandler = () => {
    dispatch(cartAction.addSingleItemToCart(cartDetailId));
    const existingItem = cartItems.find((item) => item.productId === id);
    if (existingItem) {
      // cartItems = cartItems.filter((item) => item.productId !== id);
      dispatch(
        sendUpdateCartData({
          cartDetailId: existingItem.cartDetailId,
          productId: existingItem.productId,
          productQty: existingItem.productQty + 1,
          cartDetailStatus: 1,
          estatusId: 1,
          version: 1,
          cartId: 15,
        })
      );
    }

    // dispatch(
    //   cartAction.addSingleItemToCart({
    //     cartDetailId,
    //     title,
    //     price,
    //     quantity,
    //   })
    // );
  };
  const removeItemQuantityHandler = () => {
    dispatch(cartAction.removeItemFromCart(cartDetailId));
    const existingItem = cartItems.find((item) => item.productId === id);
    if (existingItem.productQty === 1) {
      // cartItems = cartItems.filter((item) => item.productId !== id);
    } else {
      dispatch(
        sendUpdateCartData({
          cartDetailId: existingItem.cartDetailId,
          productId: existingItem.productId,
          productQty: existingItem.productQty - 1,
          cartDetailStatus: 1,
          estatusId: 1,
          version: 1,
          cartId: 15,
        })
      );
      // existingItem.productQty = existingItem.productQty - 1;
      // existingItem.totalPrice =
      //   existingItem.totalPrice - existingItem.productFinalPriceWithTax;
    }
  };
  const deleteItemHandler = () => {
    // dispatch(cartAction.deleteItemFromCart(cartDetailId));
    sendRequest(cartDetailId);
  };

  // const handleSelectAll = (e) => {
  //   setIsCheckAll(!isCheckAll);
  //   setIsCheck(list.map((li) => li.id));
  //   if (isCheckAll) {
  //     setIsCheck([]);
  //   }
  // };

  return (
    <div id={`shop000${id}`} className={classes["cart_shop-item"]}>
      <div className={classes["cart_shop-title"]}>
        <div className={classes["cart_shop_title-left"]}>
          {/* <input type="checkbox" /> */}
          <div className={classes["cart_shop_name"]}>
            <img
              className={classes["cart_shop_logo"]}
              src="https://lzd-img-global.slatic.net/g/tps/imgextra/i4/O1CN01oiHngN1dZ5WG8Ehqg_!!6000000003749-2-tps-72-64.png_2200x2200q80.jpg_.webp"
              alt="shop_logo"
            />
            CATE MALL
          </div>
        </div>
        <div className={classes["cart_shop_title-right"]}>
          Get Voucher&nbsp;
          <ion-icon className="voucher_arrow" name="chevron-down-outline" />
        </div>
      </div>
      <div className={classes["cart_item-details"]}>
        <input
          type="checkbox"
          name={props.name}
          onChange={props.handleClick}
          checked={props.isChecked}
        />
        <Link to={`/product/${id}`}>
          <figure>
            <div className={classes["cart_product-img"]}>
              <img src={thumbnail} alt="" />
            </div>

            <figcaption>
              <span className={classes["cart_product-title"]}>
                <div className={classes["cart_banner-img"]}>
                  <img
                    src="https://img.alicdn.com/tfs/TB1hOuhB7T2gK0jSZFkXXcIQFXa-168-48.png"
                    alt=""
                  />
                </div>
                {title}
              </span>
              <span className={classes["cart_product-sub-title"]}>
                OEM, Color Family:White, Brand Compatibility:Universal
              </span>
            </figcaption>
          </figure>
        </Link>
        <div className={classes["cart-middle_item"]}>
          <p className={classes["cart_item-price"]}>
            {Currency}
            {price}
          </p>
          <div className={classes["cart_item-operators"]}>
            <ion-icon data_nmi="heart_ico" name="heart-outline" />
            <ion-icon
              onClick={deleteItemHandler}
              data_nmi="trash_ico"
              name="trash-outline"
            />
          </div>
        </div>
        <div className="cart-right_item">
          <div className="product_select_body">
            <QuantityController
              // ref={amountInputRef}
              onAdd={addItemQuantityHandler}
              onRemove={removeItemQuantityHandler}
              input={{
                id: "amount" + props.productId,
                type: "text",
                step: 1,
                min: 1,
                max: 5,
                readOnly: true,
                value: quantity,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
