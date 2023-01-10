import React, { useContext, useEffect } from "react";
import useHttp from "../../../hooks/use-http";
import { getAddressList } from "../../../Services/address";
import AuthContext from "../../../Store/auth-context";
import LoadingSpinner from "../../UI/loadingSpinner/LoadingSpinner";
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
  if (status === "completed" && (!addList || addList.length === 0)) {
    return <div className="centered focused">no address found</div>;
  }

  console.log(addList, "-addressList-");

  return addList.slice(0, 2).map((obj) => (
    <div key={obj.addressId} className={classes["dashboard-shipping-item"]}>
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
};

export default ManageAccountAddressCard;
