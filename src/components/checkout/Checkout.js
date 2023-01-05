import React, { useEffect } from "react";
import OrderSummary from "../UI/orderSummary/OrderSummary";
import CheckoutForm from "./CheckoutForm";
import CheckoutItems from "./CheckoutItems";
import classes from "./Checkout.module.css";
import { useDispatch, useSelector } from "react-redux";
import { checkoutItemsLen, totalCheckoutItems } from "./checkout-totaItem";
import { Link, useNavigate } from "react-router-dom";
import { cartAction } from "../../Store/cart-slice";
import useHttp from "../../hooks/use-http";
import { addOrder } from "../../Services/cartService";
import Button from "../UI/buttons/Button";
import { Currency } from "../../config";
import SelectedAddress from "./selectedaddress/SelectedAddress";

const Checkout = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const checkoutItems = useSelector((state) => state.checkout.checkoutItems);
  const checkoutItemsTotal = useSelector(
    (state) => state.checkout.checkoutTotalAmount
  );
  const totalPkg = checkoutItemsLen(checkoutItems);
  const checkoutTotalItems = totalCheckoutItems(checkoutItems);

  const { sendRequest, status, data: orderData, error } = useHttp(addOrder);

  useEffect(() => {
    console.log("------------- Order ---------------------");
    if (status === "completed" && !error) {
      console.log("-------------order detail ---------------------");
      console.log(orderData);
    }
    if (status === "completed" && error) {
      alert(error);
    }
  }, [status, error, orderData]);

  const orderProducts = () => {
    return checkoutItems.map((item) => ({
      productId: item.productId,
      shippingCost: 5,
      shippingTax: 0,
      shippingTtl: 10,
      productQty: item.productQty,
    }));
  };
  const checkoutOrderButton = (event) => {
    event.preventDefault();

    sendRequest({
      description: "2nd desc",
      orderDate: "2022-10-06",
      userId: 30,
      orderStatus: "delivered",
      orderNumber: "382302",
      shipmentDate: "2022-10-06",
      userName: "test30",
      userEmail: "test30@test.com",
      userPhone: "39023902",
      userCity: "khi",
      userAdd: "khi",
      userCo: "co",
      userFName: "muhammad",
      userMName: "Arsalan",
      userLName: "ata",
      userMobile: "3902930",
      currency: "pkr",
      shippingMode: "pay by cash",
      customerId: 1,
      orderDetails: orderProducts(),
    });

    navigate("/checkout/success_checkout");
    // dispatch(cartAction.clearCart());
  };
  return (
    <div id={classes["muradi_checkout"]}>
      <section>
        <div className={classes["panel_container"]}>
          <div className={classes["panel_left"]}>
            {/* <CheckoutForm formTitleInfo="Delivery Information" /> */}
            <SelectedAddress />
            {checkoutItems.map((item, index) => (
              <CheckoutItems
                key={item.productId}
                item={{
                  index: index,
                  totalPakages: totalPkg,
                  id: item.productId,
                  title: item.productName,
                  thumbnail: item.productImgUrl,
                  quantity: item.productQty,
                  price: item.product_original_price,
                }}
              />
            ))}
          </div>
          <div className={classes["panel_right"]}>
            <div className={classes["order_summary"]}>
              <Button
                onClick={checkoutOrderButton}
                type="submit"
                className={classes["md-checkout-button"]}
              >
                PLACE ORDER
              </Button>
              <div
                className={`${classes["order_summary-content"]} ${classes["payment_mehthod-checkbox"]}`}
              >
                <div className={classes["payment_label"]}>
                  Select Payment Method
                </div>
                <div className="current_location">
                  <div
                    className={classes["product_delivery_selector-container"]}
                  >
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
                  <div
                    className={classes["product_delivery_selector-container"]}
                  >
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
                    {checkoutItemsTotal}
                  </div>
                </div>
                <div className={classes["GST_tax_value"]}>
                  <small className="GST_tax_per">0% GST</small>
                </div>

                <Button
                  onClick={checkoutOrderButton}
                  type="submit"
                  className={classes["md-checkout-button"]}
                >
                  PLACE ORDER
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
