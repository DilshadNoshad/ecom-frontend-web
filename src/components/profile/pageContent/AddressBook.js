import React from "react";
import classes from "./AddressBook.module.css";
import AddressBookCard from "./AddressBookCard";

const AddressBook = (props) => {
  return (
    <div className={classes["my-address"]}>
      <div className={classes["address-book-card-box"]}>
        {/* map here */}
        {props.getAddressList.map((add) => (
          <AddressBookCard key={add.addressId} address={add} />
        ))}
      </div>
    </div>
  );
};

export default AddressBook;
