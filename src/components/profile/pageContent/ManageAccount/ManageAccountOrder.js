import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getPrice, stringToDate } from "../../../../entities/GeneralFunc";
import useHttp from "../../../../hooks/use-http";
import { getUserOrderList } from "../../../../Services/order";
import AuthContext from "../../../../Store/auth-context";
import LoadingSpinner from "../../../UI/loadingSpinner/LoadingSpinner";
import NoItems from "../../../UI/noItems/NoItems";

const ManageAccountOrder = () => {
  const navigate = useNavigate();
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

  console.log(orderList, "-ordelist in manage order-");

  return (
    <table>
      <tbody>
        {orderList.map((order) =>
          order.orderDetails.map((obj) => (
            <tr key={obj.orderDetailId}>
              <td>{order.orderNumber}</td>
              <td>{stringToDate(order.orderDate)}</td>
              <td>
                <img
                  src={obj.productImgUrl}
                  alt={obj.productName}
                  width="40"
                  height="40"
                />
              </td>
              <td>{getPrice(obj.productFinalPriceWithTax)}</td>
              <td>
                <Link to={`my_orders/order_detail/${obj.orderDetailId}`}>
                  MANAGE
                </Link>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};
export default ManageAccountOrder;
