import React, { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../../../../hooks/use-http";
import { getUserOrderdetails } from "../../../../Services/auth";
import Button from "../../../UI/buttons/Button";
import LoadingSpinner from "../../../UI/loadingSpinner/LoadingSpinner";
import DeliveryStatus from "./DeliveryStatus";
import InfoBar from "./InfoBar";
import classes from "./OrderDetail.module.css";
import OrderItem from "./OrderItem";
import OrderItemTotal from "./OrderItemTotal";
import Stepper from "./Stepper";
const OrderDetail = () => {
  const params = useParams();
  const { orderDetailId } = params;

  const {
    sendRequest,
    status,
    data: orderDetailData,
  } = useHttp(getUserOrderdetails, true);

  useEffect(() => {
    sendRequest(orderDetailId);
  }, [sendRequest, orderDetailId]);

  let content;

  if (status === "completed" && orderDetailData) {
    content = (
      <div className={classes.BRCaAU}>
        <InfoBar orderNumber={orderDetailData.orderId} />
        <div className={classes.tickstl}>
          <div className={`${classes.tpnt} ${classes.left}`}> </div>
          <div className={`${classes.tpnt} ${classes.right}`}> </div>
        </div>
        <Stepper />
        <div className={classes.tickstl}>
          <div className={`${classes.tpnt} ${classes.left}`}> </div>
          <div className={`${classes.tpnt} ${classes.right}`}> </div>
        </div>
        <div className="obd">
          <div className={classes.obdf}>
            <div className={classes.obdf_l}>Thank you for rating.</div>
            <div className={classes.obdf_r}>
              <Button
                // onClick={}
                // type="submit"
                className={classes["buy_again_sm_btn"]}
              >
                Buy Again
              </Button>
            </div>
          </div>
        </div>
        <div className={classes.tickstl}>
          <div className={`${classes.tpnt} ${classes.left}`}> </div>
          <div className={`${classes.tpnt} ${classes.right}`}> </div>
        </div>
        <div className="obd">
          <div className={classes.obdf}>
            <div className={classes.obdf_l}></div>
            <div className={classes.obdf_r}>
              <Button
                // onClick={}
                // type="submit"
                className={classes["order-detail_sm_btn"]}
              >
                Contact Seller
              </Button>
            </div>
          </div>
          <div className={classes.obdf}>
            <div className={classes.obdf_l}></div>
            <div className={classes.obdf_r}>
              <Button
                // onClick={}
                // type="submit"
                className={classes["order-detail_sm_btn"]}
              >
                View Shop Rating
              </Button>
            </div>
          </div>
        </div>
        <div className="obd">
          <div className={classes.obdf}>
            <div className={classes.obdf_l}>Invoice</div>
            <div className={classes.obdf_r}>
              <Button
                // onClick={}
                // type="submit"
                className={classes["order-detail_sm_btn"]}
              >
                View E-Invoice
              </Button>
            </div>
          </div>
        </div>
        <div className={classes["spe-line-wrap"]}>
          <div className={classes["spe-line"]}></div>
        </div>
        <DeliveryStatus />
        <div>
          <OrderItem
            item={{
              id: orderDetailData.productId,
              title: orderDetailData.productName,
              thumbnail: orderDetailData.productImgUrl,
              quantity: orderDetailData.productQty,
              price: orderDetailData.productPrice,
            }}
          />
          <OrderItemTotal
            itemTotal={{
              shippingPrice: orderDetailData.shippingCost,
              finalPriceWithoutTax: orderDetailData.productFinalPriceWithoutTax,
              finalPriceWithTax: orderDetailData.productFinalPriceWithTax,
            }}
          />
        </div>
      </div>
    );
  }
  if (status === "completed" && !orderDetailData) {
    content = <p className="centered">Found no products.</p>;
  }
  // if (error) {
  //   content = <div className="centered focused">{error}</div>;
  // }
  if (status === "pending") {
    content = (
      <div className={classes.loading}>
        <LoadingSpinner />
      </div>
    );
  }
  return <Fragment>{content}</Fragment>;
};

export default OrderDetail;
