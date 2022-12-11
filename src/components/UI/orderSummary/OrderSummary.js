import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Currency } from "../../../config";
import AuthContext from "../../../Store/auth-context";
import Button from "../buttons/Button";
import classes from "./OrderSummary.module.css";

const OrderSummary = (props) => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  // const isLoggedIn = useSelector((state) => state.auth.isloggedIn);
  // const dispatch = useDispatch();
  // const cartTotal = useSelector((state) => state.cart.totalAmount);
  // const cartItems = useSelector((state) => state.cart.items);
  // const checkoutItems = useSelector((state) => state.checkout.checkoutItems);
  // const checkoutItemsTotal = useSelector(
  //   (state) => state.checkout.checkoutTotalAmount
  // );

  // const navigate = useNavigate();

  // const cartCheckoutButton = () => {
  //   dispatch(checkoutAction.addCartItemsToCheckout(cartItems));
  //   navigate("/checkout");
  // };
  // console.log(checkoutItems, checkoutItemsTotal);
  // const cartTotalItems = totalCartItems(cartItems);
  const location = useLocation();
  const isCheckoutPage = location.pathname === "/checkout";

  return (
    <div className={classes["panel_right"]}>
      {isCheckoutPage && (
        <div className={classes["order_summary"]}>
          <Button
            onClick={props.onClickActionBtn}
            type="submit"
            className={classes["md-checkout-button"]}
          >
            {props.actionBtnName}
          </Button>
          <div
            className={`${classes["order_summary-content"]} ${classes["payment_mehthod-checkbox"]}`}
          >
            <div className={classes["payment_label"]}>
              Select Payment Method
            </div>
            <div className="current_location">
              <div className={classes["product_delivery_selector-container"]}>
                <div
                  className={`product_delivery_selector_icon ${classes["payment_method_selector"]}`}
                >
                  <div className="muradi-succes_ico product_select_delivery_icon">
                    <ion-icon name="cash-outline" />
                  </div>
                  <div className="product-select_icon_text">
                    <span className="section-title">Cash On Delivery</span>
                  </div>
                  <div
                    className={`${classes["payment_method-slt_ico"]} product-select_icon_details`}
                  >
                    <ion-icon name="checkmark-circle" />
                  </div>
                </div>
                <div className={classes["card-footer"]}>
                  <div className="card-footer-left">
                    <p className="card-description-head-text">
                      Pay when you receive
                    </p>
                  </div>
                </div>
              </div>
              <div className={classes["product_delivery_selector-container"]}>
                <div
                  className={`product_delivery_selector_icon ${classes["payment_method_selector"]}`}
                >
                  <div className="muradi-succes_ico product_select_delivery_icon">
                    <ion-icon name="card-outline" />
                  </div>
                  <div className="product-select_icon_text">
                    <span className="section-title">Credit/Debit Card</span>
                  </div>
                  <div
                    className={`${classes["payment_method-slt_ico"]} product-select_icon_details`}
                  >
                    <ion-icon name="ellipse-outline" />
                  </div>
                </div>
                <div className={classes["card-footer"]}>
                  <div className="card-footer-left">
                    <p className="card-description-head-text">
                      Tap to add card
                    </p>
                  </div>
                  <div className={classes["card-footer-right"]}>
                    <img
                      src="https://laz-img-cdn.alicdn.com/tfs/TB1A5YFocLJ8KJjy0FnXXcFDpXa-80-80.png"
                      alt=""
                    />
                    <img
                      src="https://laz-img-cdn.alicdn.com/tfs/TB1sH7_bxrI8KJjy0FpXXb5hVXa-80-80.png"
                      alt=""
                    />
                    <img
                      src="https://laz-img-cdn.alicdn.com/tfs/TB1RI0cbLDH8KJjy1XcXXcpdXXa-80-80.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {!isCheckoutPage && (
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
          {/* <div className="order_summary-content payment_mehthod-checkbox">
          <div className="location_label">Select Payment Method</div>
          <div className="current_location">
            <div className="product_delivery_selector-container active_product_delivery">
              <div className="product_delivery_selector_icon">
                <div className="muradi-succes_ico product_select_delivery_icon">
                  <ion-icon name="cash-outline" />
                </div>
                <div className="product-select_icon_text">
                  <span className="section-title">Cash On Delivery</span>
                </div>
                <div className="muradi-succes_ico product-select_icon_details">
                  <ion-icon name="checkmark-circle" />
                </div>
              </div>
              <div className="card-footer active_product_delivery-footer">
                <div className="card-footer-left">
                  <p className="card-description-head-text">
                    Pay when you receive
                  </p>
                </div>
              </div>
            </div>
            <div className="product_delivery_selector-container">
              <div className="product_delivery_selector_icon">
                <div className="muradi-succes_ico product_select_delivery_icon">
                  <ion-icon name="card-outline" />
                </div>
                <div className="product-select_icon_text">
                  <span className="section-title">Credit/Debit Card</span>
                </div>
                <div className="muradi-succes_ico product-select_icon_details">
                  <ion-icon name="ellipse-outline" />
                </div>
              </div>
              <div className="card-footer">
                <div className="card-footer-left">
                  <p className="card-description-head-text">Tap to add card</p>
                </div>
                <div className="card-footer-right">
                  <img src="https://laz-img-cdn.alicdn.com/tfs/TB1A5YFocLJ8KJjy0FnXXcFDpXa-80-80.png" />
                  <img src="https://laz-img-cdn.alicdn.com/tfs/TB1sH7_bxrI8KJjy0FpXXb5hVXa-80-80.png" />
                  <img src="https://laz-img-cdn.alicdn.com/tfs/TB1RI0cbLDH8KJjy1XcXXcpdXXa-80-80.png" />
                </div>
              </div>
            </div>
          </div>
        </div> */}
        </div>
      )}
      <div className={classes["order_summary"]}>
        <div className={classes["order_summary_heading"]}>Order Summary</div>
        <div className={classes["order_summary-p-content"]}>
          <div
            className={`${classes["order_summary-row"]} ${classes["summary_row-space"]}`}
          >
            <div
              className={`${classes["order_summary-label"]} ${classes["summary_left-text"]}`}
            >
              Subtotal ({props.totalItems} items)
            </div>
            <div className={classes["summary_right-text"]}>
              {Currency}
              {props.totalPrice}
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
            <div className={classes["summary_right-text"]}>{Currency}0.00</div>
          </div>
          <form>
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
          </form>
          <div className={classes["order_summary-row"]}>
            <div
              className={`${classes["order_summary-label"]} ${classes["total_head"]}`}
            >
              Total
            </div>
            <div className={classes["total_val"]}>
              {Currency}
              {props.totalPrice}
            </div>
          </div>
          <div className={classes["GST_tax_value"]}>
            <small className="GST_tax_per">0% GST</small>
          </div>
          {isLoggedIn && (
            <Button
              onClick={props.onClickActionBtn}
              type="submit"
              className={classes["md-checkout-button"]}
            >
              {props.actionBtnName}
            </Button>
          )}
          {!isLoggedIn && (
            <Button
              onClick={props.onNotAuthPop}
              className={classes["md-checkout-button"]}
            >
              {props.actionBtnName}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
