import React, { useState, useEffect } from "react";
import Login from "../../../auth/login/Login";
import CheckoutForm from "../../../checkout/CheckoutForm";
import Modal from "../../../UI/modal/Modal";
import classes from "./AddressBookModal.module.css";
import useHttp from "../../../../hooks/use-http";
import { getCityList } from "../../../../Services/auth";

const AddressBookModal = (props) => {
  const [cityList, setCityList] = useState([]);
  //sendRequest();
  const {
    sendRequest,
    status,
    data: cities,
    error,
  } = useHttp(getCityList, true);

  //console.log('-----------address modal bf effect----------------');
  useEffect(() => {
    sendRequest();
    //console.log(status);
    if (status === "completed" && !error) {
      //console.log('------------------address modal ---------------'+ status);
      setCityList(optCityList(cities));
    }
  }, [status, error]);

  const optCityList = (cities) => {
    const citylst = cities.map((obj) => {
      return {
        label: `${obj.cityName} - (${obj.cityCode})`,
        name: obj.cityName,
        code: obj.cityCode,
        value: obj.cityId,
        cityId: obj.cityId,
        stateId: obj.stateId,
        countryId: obj.countryId,
      };
    });
    return citylst;
  };

  const onAddressUpdate = (updAdd) => {
    //console.log('----------Update AddressBookCard page for editing data ----------------');
    //console.log(updAdd);
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
        cityList={cityList}
        address={props?.address}
        updateAddress={onAddressUpdate}
        onClose={props.onClick}
      />
    </Modal>
  );
};

export default AddressBookModal;
