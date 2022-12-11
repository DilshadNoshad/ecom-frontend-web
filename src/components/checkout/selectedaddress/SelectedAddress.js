import React, { Fragment, useState } from "react";
import AddressBookModal from "../../profile/pageContent/addressBookModal/AddressBookModal";
import SideModal from "../../UI/sidemodal/SideModal";
import ChooseAddress from "../chooseaddess/ChooseAddress";
import classes from "./SelectedAddress.module.css";
const SelectedAddress = () => {
  const [isShown, setIsShown] = useState(false);
  const [addressFormIsShow, setAddressFormIsShow] = useState(false);

  const closeAddressPopHandler = () => {
    setIsShown(false);
  };
  const showAddressPopHandler = () => {
    setIsShown(true);
  };

  const ShowAddressFormHandler = () => {
    closeAddressPopHandler();
    //console.log('-----------show modal------------');
    setAddressFormIsShow(true);
  };
  const CloseAddressFormHandler = () => {
    //console.log('-----------Close Dialog address Boook Page-------------');
    setAddressFormIsShow(false);
    showAddressPopHandler();
  };

  return (
    <Fragment>
      {isShown && (
        <SideModal onClose={closeAddressPopHandler}>
          <ChooseAddress
            onClose={closeAddressPopHandler}
            showModal={ShowAddressFormHandler}
          />
        </SideModal>
      )}
      {addressFormIsShow && (
        <AddressBookModal onClick={CloseAddressFormHandler} />
      )}
      <div className={classes["selected-address"]}>
        <div className={classes["selected-address-title"]}>
          <div className={classes["selected-address_title-left"]}>
            <span>Shipping Address</span>
          </div>
          <div className={classes["selected-address_title-right"]}>
            <span
              onClick={showAddressPopHandler}
              className={classes["selected-address-edit"]}
            >
              Edit
            </span>
          </div>
        </div>
        <div className={classes["selected-address_content-box"]}>
          <div className={classes["selected-address-title-container"]}>
            <span className={classes["c-address-name"]}>
              Muhammad Arsalan Ata
            </span>
            <span className="c-mobile">01123406508</span>
          </div>
          <div className={classes["c-complete-address"]}>
            <span>
              HP Global Center - IT/Finance Building,530, Persiaran Ceria, Cyber
              12, 63000 Cyberjaya, Selangor, Malaysia,, 63000, Cyberjaya,
              Selangor
            </span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SelectedAddress;
