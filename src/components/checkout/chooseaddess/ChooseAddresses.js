import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import useHttp from "../../../hooks/use-http";
import { getAddressList } from "../../../Services/address";
import AuthContext from "../../../Store/auth-context";
import LoadingSpinner from "../../UI/loadingSpinner/LoadingSpinner";
import classes from "./ChooseAddresses.module.css";

const ChooseAddresses = () => {
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
    return <div className="centered focused">found no address</div>;
  }

  console.log(addList, "address list in checkout");
  return addList.map((add) => (
    <div key={add.addressId} className={classes["addressbook_content"]}>
      <div className={classes.leftcontent}>
        <label className={classes["form-control"]}>
          <input type="radio" name="radio" />
        </label>
      </div>
      <div className={classes.rightcontent}>
        <div className={classes["c-mob-title"]}>
          <span className={classes.title}>{add.addressName}</span>
          <span className={classes.mobile}>{add.phone}</span>
        </div>
        <div className="c-address">
          <span className={`${classes.tag} ${classes["tag-home"]}`}>HOME</span>
          <span className={classes.addressInfo}>
            {`${add.address1}${add.address2 == null ? ", " : add.address2} ${
              add.cityName
            }-${add.postCode}`}
          </span>
        </div>
        <div className={classes.postcode}>
          {`Postcode: ${add.cityName} - ${add.postCode}`}
        </div>
        <div className={classes["c-address-book-default"]}>
          <span className={classes["c-address-book-tag"]}>
            Default Shipping Address
          </span>
        </div>
      </div>
    </div>
  ));
};

export default ChooseAddresses;
