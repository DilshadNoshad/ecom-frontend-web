import React, { useEffect, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
//import { useDispatch, useSelector } from "react-redux";
import OrderSummary from "../UI/orderSummary/OrderSummary";
import CartItems from "./CartItems";
import CartList from "./CartList";
import classes from "./Cart.module.css";
import { Link, useNavigate } from "react-router-dom";
import { checkoutAction } from "../../Store/checkout-slice";
import { totalCartItems } from "./cart-totaItems";
import { Fragment } from "react";
import OutlineButton from "../UI/buttons/OutlineButton";
import { uiActions } from "../../Store/ui-slice";
import useHttp from "../../hooks/use-http";
import { addCart } from "../../Services/cartService";
import AuthContext from "../../Store/auth-context";
import { Currency } from "../../config";
import Button from "../UI/buttons/Button";
import {
  checkoutItemsLen,
  totalCheckoutItems,
} from "../checkout/checkout-totaItem";
import { cartAction } from "../../Store/cart-slice";
import { fetchCartData } from "../../Store/cart-actions";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const cartItems = useSelector((state) => state.cart.items);
  const cartTotal = useSelector((state) => state.cart.totalAmount);

  const checkoutItems = useSelector((state) => state.checkout.checkoutItems);

  const checkoutItemsTotal = useSelector(
    (state) => state.checkout.checkoutTotalAmount
  );

  const checkoutTotalItems = totalCheckoutItems(checkoutItems);

  const { sendRequest, status, data: cartData, error } = useHttp(addCart);
  console.log(cartItems);
  // const [cartItem, setCartItem] = useState(cartItems);

  useEffect(() => {
    console.log("------------- CART ---------------------");
    if (status === "completed" && !error) {
      console.log("-------------cart detail ---------------------");
      console.log(cartData);
    }
    if (status === "completed" && error) {
      alert(error);
    }
  }, [status, error, cartData]);

  const getCurrentDate = () => {
    const dt = new Date();
    return `${dt.getDay()}-${dt.getMonth()}-${dt.getFullYear()}`;
  };

  const getShippmentDate = () => {
    const dt = new Date(5);
    return `${dt.getDay()}-${dt.getMonth()}-${dt.getFullYear()}`;
  };
  //const sendRequest = [];
  const checkoutOrderButton = (event) => {
    event.preventDefault();
    console.log("----------- cart items-----------");
    console.log(cartItems);
    console.log("---------------cart -----------------");
    console.log(cartTotal);

    const getCartItem = () => {
      //const items = [];
      return cartItems.map((item) => ({
        productId: 1,
        productName: item.name,
        productDesc: "",
        shippingCost: 0.0,
        shippingTax: 0.0,
        shippingTtl: 0.0,
        productPrice: item.totalPrice,
        productCost: item.totalPrice - 10,
        productTax: 0.0,
        productFinalPriceWithTax: item.totalPrice,
        productFinalPriceWithoutTax: item.totalPrice,
        productOtherTax: 0.0,
        productQty: item.quantity,
        cartDetailStatus: 1,
        productImgUrl: item.thumbnail,
      }));

      //return items;
    };

    const sendRequest = {
      //description: "2nd desc",
      cartDate: getCurrentDate(),
      userId: authCtx.userData.id,
      cartStatus: "1",
      cartNumber: "382302",
      shipmentDate: getShippmentDate(),
      userName: authCtx.userData.username,
      userEmail: authCtx.userData.email,
      userPhone: authCtx.userData.mobile,
      userLName: authCtx.userData.last,
      userMobile: authCtx.userData.mobile,
      currency: "pkr",
      shippingMode: "pay by cash",
      shippingCost: 0.0,
      shippingTax: 0.0,
      shippingTtl: 0.0,
      cartPrice: cartTotal,
      cartCost: 0.0,
      cartTax: 0.0,
      cartFinalPriceWithTax: cartTotal,
      cartFinalPriceWithoutTax: cartTotal,
      otherTax: 0.0,
      customerId: 1,
      cartDetails: getCartItem(),
    };
    console.log(sendRequest);
    //sendRequest();

    dispatch(checkoutAction.addCartItemsToCheckout(cartItems));
    //navigate("/checkout");
  };

  const shoppingBtnHandler = () => {
    navigate("/");
  };

  const ShowAuthPopHandler = () => {
    dispatch(uiActions.OpenAuthPop());
  };

  const cartCheckoutButton = () => {
    if (checkoutItems.length > 0) {
      navigate("/checkout");
    } else {
      alert("Please select item(s).");
    }
    // const checkedInputValue = [];
    // for (let i = 0; i < cartItem.length; i++) {
    //   if (cartItem[i].isChecked === true) {
    //     checkedInputValue.push(cartItem[i]);
    //   }
    // }
    // dispatch(checkoutAction.addCartItemsToCheckout(checkedInputValue));
  };

  useEffect(() => {
    const checkedInputValue = [];

    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].isChecked === true) {
        checkedInputValue.push(cartItems[i]);
      }
    }
    dispatch(checkoutAction.addCartItemsToCheckout(checkedInputValue));
  }, [cartItems, dispatch]);
  // console.log(cartItem);
  const handleChange = (event) => {
    const { name, checked } = event.target;

    if (name === "selectAll") {
      const checkedvalue = cartItems.map((item) => {
        return { ...item, isChecked: checked };
      });
      // console.log(checkedvalue);
      dispatch(
        cartAction.replaceCart({
          items: checkedvalue || [],
          // totalQuantity: cartData.totalQuantity,
        })
      );
      // setCartItem(checkedvalue);
    } else {
      const checkedvalue = cartItems.map((item) =>
        item.cartDetailId === +name ? { ...item, isChecked: checked } : item
      );
      // console.log(checkedvalue);
      // dispatch(
      //   cartAction.replaceCart({
      //     items: checkedvalue || [],
      //     // totalQuantity: cartData.totalQuantity,
      //   })
      // );
      dispatch(
        cartAction.replaceCart({
          items: checkedvalue || [],
          // totalQuantity: cartData.totalQuantity,
        })
      );
      // setCartItem(checkedvalue);
    }
  };

  const showCartItems = (cartItem) => {
    return (
      <form>
        <div id={classes["muradi_cart"]}>
          <section>
            <div className={classes["panel_container"]}>
              <div className={classes["panel_left"]}>
                <CartList
                  name="selectAll"
                  handleClick={handleChange}
                  isChecked={!cartItem.some((item) => item?.isChecked !== true)}
                />

                {cartItem.map((item, index) => (
                  //index < 1 ?
                  <CartItems
                    key={item.cartDetailId}
                    name={item.cartDetailId}
                    handleClick={handleChange}
                    isChecked={item?.isChecked || false}
                    item={{
                      id: item.productId,
                      cartDetailId: item.cartDetailId,
                      title: item.productName,
                      thumbnail: item.productImgUrl,
                      quantity: item.productQty,
                      total: item.totalPrice,
                      price: item.productFinalPriceWithTax,
                    }}
                  />
                  // : null
                ))}
              </div>
              <div className={classes["panel_right"]}>
                <div className={classes["order_summary"]}>
                  <div className={classes["order_summary-content"]}>
                    <div className={classes["location_label"]}>Location</div>
                    <div className="current_location">
                      <div className="product_delivery_selector_icon">
                        <div className="product_select_delivery_icon">
                          <ion-icon
                            name="location-outline"
                            role="img"
                            className="md hydrated"
                            aria-label="location outline"
                          />
                        </div>
                        <div className="product-select_icon_text">
                          <span className="section-title">
                            Wp Kuala Lumpur, Kuala Lumpur, 50450
                          </span>
                        </div>
                        <div className="product-select_icon_details">
                          <Link
                            className={classes["product-brand_suggestion-link"]}
                            to="#"
                          >
                            Change
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={classes["order_summary"]}>
                  <div className={classes["order_summary_heading"]}>
                    Order Summary
                  </div>
                  <div className={classes["order_summary-p-content"]}>
                    <div
                      className={`${classes["order_summary-row"]} ${classes["summary_row-space"]}`}
                    >
                      <div
                        className={`${classes["order_summary-label"]} ${classes["summary_left-text"]}`}
                      >
                        Subtotal ({checkoutTotalItems} items)
                      </div>
                      <div className={classes["summary_right-text"]}>
                        {Currency}
                        {checkoutItemsTotal}
                      </div>
                    </div>
                    <div
                      className={`${classes["order_summary-row"]} ${classes["summary_row-space"]}`}
                    >
                      <div
                        className={`${classes["order_summary-label"]} ${classes["summary_left-text"]}`}
                      >
                        Shipping Fee
                      </div>
                      <div className={classes["summary_right-text"]}>
                        {Currency}0.00
                      </div>
                    </div>

                    <div
                      className={`${classes["voucher_container"]} ${classes["summary_row-space"]}`}
                    >
                      <span>
                        <input
                          className={classes["voucher-input"]}
                          type="text"
                          placeholder="Enter Voucher Code"
                        />
                      </span>
                      <Button
                        // onClick={}
                        // type="submit"
                        className={classes["voucher_sm_btn"]}
                      >
                        APPLY
                      </Button>
                    </div>

                    <div className={classes["order_summary-row"]}>
                      <div
                        className={`${classes["order_summary-label"]} ${classes["total_head"]}`}
                      >
                        Total
                      </div>
                      <div className={classes["total_val"]}>
                        {Currency}
                        {checkoutItemsTotal}
                      </div>
                    </div>
                    <div className={classes["GST_tax_value"]}>
                      <small className="GST_tax_per">0% GST</small>
                    </div>
                    {isLoggedIn && (
                      <Button
                        onClick={cartCheckoutButton}
                        type="submit"
                        className={classes["md-checkout-button"]}
                      >
                        {`PROCEED TO CHECKOUT(${checkoutTotalItems})`}
                      </Button>
                    )}
                    {!isLoggedIn && (
                      <Button
                        onClick={ShowAuthPopHandler}
                        className={classes["md-checkout-button"]}
                      >
                        {`PROCEED TO CHECKOUT(${checkoutTotalItems})`}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </form>
    );
  };
  const noCartItemsMessage = () => {
    return (
      <div className={classes["cart-empty"]}>
        <div className={classes["cart-empty-text"]}>
          There are no items in this cart
        </div>
        <OutlineButton
          onClick={shoppingBtnHandler}
          className={classes["cart-empty-button"]}
        >
          CONTINUE SHOPPING
        </OutlineButton>
      </div>
    );
  };
  return (
    <Fragment>
      {cartItems.length > 0 ? showCartItems(cartItems) : noCartItemsMessage()}
    </Fragment>
  );
};

export default Cart;
