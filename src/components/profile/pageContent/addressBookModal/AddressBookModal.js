import React from "react";

import CheckoutForm from "../../../checkout/CheckoutForm";
import Modal from "../../../UI/modal/Modal";
import classes from "./AddressBookModal.module.css";

const AddressBookModal = (props) => {
  const onAddressUpdate = (updAdd) => {
    props.onAddUpdate(updAdd);
    return updAdd;
  };

  return (
    <Modal onClose={props.onClick}>
      <div className={classes.actions}>
        <div className={classes["close-btn"]} onClick={props.onClick}>
          <ion-icon name="close-circle-outline"></ion-icon>
        </div>
      </div>
      <CheckoutForm
        formTitleInfo="Add New Delivery Address"
        address={props?.address}
        updateAddress={onAddressUpdate}
        onClose={props.onClick}
      />
    </Modal>
  );
};

export default AddressBookModal;
