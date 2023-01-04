import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import useHttp from "../../../hooks/use-http";
import { getAddressList } from "../../../Services/auth";
import AuthContext from "../../../Store/auth-context";
import classes from "./ManageAccount.module.css";

const ManageAccountAddressCard = () => {
  const authCtx = useContext(AuthContext);
  const {
    sendRequest,
    status,
    data: addresses,
    error,
  } = useHttp(getAddressList, true);
  const [dialogClose, setDialogClose] = useState(true);
  const [addList, setAddList] = useState([]);
  //console.log('-----------address modal bf effect----------------');
  useEffect(() => {
    sendRequest({ id: authCtx?.userData?.id });
    if (status === "completed" && !error) {
      setAddList(addresses);
      //console.log(addresses);
    }
  }, [status, error]);
  // console.log(addList, "addlist");
  return addList.map((obj, index) =>
    index < 2 ? (
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
    ) : null
  );
};

export default ManageAccountAddressCard;
