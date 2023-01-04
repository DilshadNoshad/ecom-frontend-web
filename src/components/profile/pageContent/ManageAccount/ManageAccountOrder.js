import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import useHttp from "../../../../hooks/use-http";
import { getUserOrderList } from "../../../../Services/auth";
import AuthContext from "../../../../Store/auth-context";
//import classes from "./../ManageAccount.module.css";
import GenFunc from "../../../../entities/GeneralFunc.js";

const ManageAccountOrder = () => {
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
      // console.log(orderList);
    }
  }, [status, error]);

  const stringToDate = (dt) => {
    const date = new Date(dt);
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  };

  const getPrice = (price) => {
    return `RS. ${price}`;
  };

  return (
    <table>
      <tbody>
        {orderList.map((obj, index) => (
          <tr key={index}>
            <td>{obj.orderNumber}</td>
            <td>{stringToDate(obj.orderDate)}</td>
            <td>
              <img
                src="https://static-01.daraz.pk/p/28e40033fd82db1feeecf50c77c639fe.jpg"
                alt="keychain"
                width={40}
                height={40}
              />
            </td>
            <td>RS. {getPrice(obj.orderPrice)}</td>
            <td>MANAGE</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default ManageAccountOrder;
