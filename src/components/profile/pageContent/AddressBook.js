import React, { useContext } from "react";
import { useEffect } from "react";
import useHttp from "../../../hooks/use-http";
import { getAddressList } from "../../../Services/address";
import AuthContext from "../../../Store/auth-context";
import LoadingSpinner from "../../UI/loadingSpinner/LoadingSpinner";
import classes from "./AddressBook.module.css";
import AddressBookCard from "./AddressBookCard";

const AddressBook = (props) => {
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

  console.log(addList, "-addressList in addressBook-");
  return (
    <div className={classes["my-address"]}>
      <div className={classes["address-book-card-box"]}>
        {addList.map((add) => (
          <AddressBookCard key={add.addressId} address={add} />
        ))}
      </div>
    </div>
  );
};

export default AddressBook;
