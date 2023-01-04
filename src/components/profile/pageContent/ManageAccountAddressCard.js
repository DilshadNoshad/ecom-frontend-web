import React, { useContext, useEffect } from "react";
import useHttp from "../../../hooks/use-http";
import { getAddressList } from "../../../Services/address";
import AuthContext from "../../../Store/auth-context";
import classes from "./ManageAccount.module.css";

const ManageAccountAddressCard = () => {
  const authCtx = useContext(AuthContext);

  //Destructuring UserData of useId
  const { id: userId } = authCtx?.userData;

  const {
    sendRequest,
    status,
    data: addList,
    error,
  } = useHttp(getAddressList, true);

  useEffect(() => {
    sendRequest(userId);
  }, [sendRequest, userId]);

  let content;

  if (status === "completed" && addList && addList.length > 0) {
    content = addList.map((obj) => (
      <div key={obj.addressId} className="dashboard-address-item shipping">
        <div className={classes["dashboard-address-default"]}>
          DEFAULT SHIPPING ADDRESS
        </div>
        <div className={classes["dashboard-address-username"]}>
          {obj.addressName}
        </div>
        <div className={classes["dashboard-address-detail"]}>
          {obj.address1} {obj.address2}
        </div>
        <div className={classes["dashboard-address-detail"]}>
          {obj.cityName} {obj.stateName}
        </div>
        <div className={classes["dashboard-address-phone"]}>{obj.phone}</div>
      </div>
    ));
  }
  if (status === "completed" && (!addList || addList.length === 0)) {
    content = <div className="centered">no address found</div>;
  }
  if (error) {
    content = <div className="centered">{error}</div>;
  }
  if (status === "pending") {
    content = <div className="centered">spinner</div>;
  }
  console.log(addList, "addressList");
  return <div>{content}</div>;
};

export default ManageAccountAddressCard;
