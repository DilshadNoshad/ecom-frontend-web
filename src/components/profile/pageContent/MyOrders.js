import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NoItems from "../../UI/noItems/NoItems";
import OrderItem from "../../UI/order/OrderItem";
import classes from "./MyOrders.module.css";

import useHttp from "../../../hooks/use-http";
import { getUserOrderList } from "../../../Services/auth";
import AuthContext from "../../../Store/auth-context";

const myCancleOrders = [
  {
    id: 1,
    title:
      "Keychain - Mustache Keychain Best Quality Mustache Keychain Key Ring Beard Key",
    thumbnail:
      "https://static-01.daraz.pk/p/28e40033fd82db1feeecf50c77c639fe.jpg",
    quantity: 1,
    orderStatus: "Cancelled",
    orderNumber: 177623476949385,
    requestedDate: "17 Aug 2022",
  },
];
const MyOrders = () => {
  const navigate = useNavigate();
  const [toggleState, setToggleState] = useState(1);

  const authCtx = useContext(AuthContext);
  const {
    sendRequest,
    status,
    data: orders,
    error,
  } = useHttp(getUserOrderList, true);
  const [orderList, setOrderList] = useState([]);
  useEffect(() => {
    sendRequest({ id: authCtx?.userData?.id });
    if (status === "completed" && !error) {
      setOrderList(orders);
      console.log(orderList);
    }
  }, [status, error]);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const shoppingBtnHandler = () => {
    navigate("/");
  };

  return (
    <div className={classes["tabs-container"]}>
      <div className={classes["bloc-tabs"]}>
        <button
          className={
            toggleState === 1
              ? `${classes.tabs} ${classes["active-tabs"]}`
              : classes.tabs
          }
          onClick={() => toggleTab(1)}
        >
          All
        </button>
        <button
          className={
            toggleState === 2
              ? `${classes.tabs} ${classes["active-tabs"]}`
              : classes.tabs
          }
          onClick={() => toggleTab(2)}
        >
          To Pay
        </button>
        <button
          className={
            toggleState === 3
              ? `${classes.tabs} ${classes["active-tabs"]}`
              : classes.tabs
          }
          onClick={() => toggleTab(3)}
        >
          To Ship
        </button>
        <button
          className={
            toggleState === 4
              ? `${classes.tabs} ${classes["active-tabs"]}`
              : classes.tabs
          }
          onClick={() => toggleTab(4)}
        >
          To Receive
        </button>
      </div>

      <div className={classes["content-tabs"]}>
        <div
          className={
            toggleState === 1
              ? `${classes.content} ${classes["active-content"]}`
              : classes.content
          }
        >
          <div className="order-list">
            <div className="orders">
              {orderList.map((order) =>
                order.orderDetails.map((od) => (
                  <OrderItem
                    key={order.orderId}
                    order={{
                      title: od.productName,
                      thumbnail:
                        od.productImgUrl === null ||
                        od.productImgUrl === undefined ||
                        od.productImgUrl === ""
                          ? "https://southwesttrainingsolutions.co.uk/wp-content/uploads/2020/07/no-image.png"
                          : od.productImgUrl,
                      quantity: od.productQty,
                      orderStatus: order.orderStatus,
                      orderNumber: order.orderNumber,
                      requestedDate: order.shipmentDate,
                      link: `order_detail/${od.orderDetailId}`,
                    }}
                  />
                ))
              )}
            </div>
          </div>
        </div>

        <div
          className={
            toggleState === 2
              ? `${classes.content} ${classes["active-content"]}`
              : classes.content
          }
        >
          <NoItems
            btnText="CONTINUE SHOPPING"
            onClick={shoppingBtnHandler}
            noItemText="There are no orders placed yet."
          />
        </div>

        <div
          className={
            toggleState === 3
              ? `${classes.content} ${classes["active-content"]}`
              : classes.content
          }
        >
          <NoItems
            btnText="CONTINUE SHOPPING"
            onClick={shoppingBtnHandler}
            noItemText="There are no orders placed yet."
          />
        </div>
        <div
          className={
            toggleState === 4
              ? `${classes.content} ${classes["active-content"]}`
              : classes.content
          }
        >
          <NoItems
            btnText="CONTINUE SHOPPING"
            onClick={shoppingBtnHandler}
            noItemText="There are no orders placed yet."
          />
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
