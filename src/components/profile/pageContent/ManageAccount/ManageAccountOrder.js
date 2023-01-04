import React, { useContext, useEffect } from "react";
import { getPrice, stringToDate } from "../../../../entities/GeneralFunc";
import useHttp from "../../../../hooks/use-http";
import { getUserOrderList } from "../../../../Services/order";
import AuthContext from "../../../../Store/auth-context";

const ManageAccountOrder = () => {
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

  let content;

  if (status === "completed" && orderList && orderList.length > 0) {
    content = orderList.map((order) =>
      order.orderDetails.map((obj) => (
        <tr key={order.orderId}>
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
          <td>MANAGE</td>
        </tr>
      ))
    );
  }
  if (status === "completed" && (!orderList || orderList.length === 0)) {
    content = (
      <tr className="centered">
        <td>no data</td>
      </tr>
    );
  }
  if (error) {
    content = (
      <tr className="centered">
        <td>{error}</td>
      </tr>
    );
  }
  if (status === "pending") {
    content = (
      <tr className="centered">
        <td>spinner</td>
      </tr>
    );
  }

  console.log(orderList, "-ordelist in manage order-");
  return (
    <table>
      <tbody>{content}</tbody>
    </table>
  );
};
export default ManageAccountOrder;
