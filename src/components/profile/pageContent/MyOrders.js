import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NoItems from "../../UI/noItems/NoItems";
import OrderItem from "../../UI/order/OrderItem";
import classes from "./MyOrders.module.css";
import useHttp from "../../../hooks/use-http";
import AuthContext from "../../../Store/auth-context";
import { getUserOrderList } from "../../../Services/order";
import noPrdImage from "../../../assets/images/no-image.png";
import LoadingSpinner from "../../UI/loadingSpinner/LoadingSpinner";
import { executeWithTime } from "../../../entities/GeneralFunc";

const MyOrders = () => {
  const navigate = useNavigate();
  const [toggleState, setToggleState] = useState(1);
  const authCtx = useContext(AuthContext);

  //Destructuring UserData of useId
  const { id: userId } = authCtx?.userData;

  const {
    sendRequest,
    status,
    data: orderList,
    error,
  } = useHttp(getUserOrderList, true);

  useEffect(() => {
    sendRequest(userId);
  }, [sendRequest, userId]);

  const shoppingBtnHandler = () => {
    navigate("/");
  };
  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <div className="centered focused">{error}</div>;
  }
  if (status === "completed" && (!orderList || orderList.length === 0)) {
    return (
      <NoItems
        btnText="CONTINUE SHOPPING"
        onClick={shoppingBtnHandler}
        noItemText="There are no orders yet."
      />
    );
  }

  const toggleTab = (index) => {
    setToggleState(index);
  };

  executeWithTime(orderList, "-ordelist in my order-");

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
                order.orderDetails.map((od, i) => (
                  <OrderItem
                    key={i}
                    order={{
                      title: od.productName,
                      thumbnail:
                        od.productImgUrl == null || od.productImgUrl === ""
                          ? noPrdImage
                          : od.productImgUrl,
                      quantity: od.productQty,
                      orderStatus: order.orderStatus,
                      orderNumber: order.orderNumber,
                      requestedDate: order.orderDate,
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
