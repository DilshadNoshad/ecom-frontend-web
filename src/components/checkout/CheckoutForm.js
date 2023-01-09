import React, { useContext, Fragment, useState, useEffect } from "react";
import useUserinput from "../../hooks/user-input";
import Button from "../UI/buttons/Button";
import DropDown from "../UI/dropdown/DropDown";
import Input from "../UI/input/Input";
import classes from "./CheckoutForm.module.css";
import useHttp from "../../hooks/use-http";
import AuthContext from "../../Store/auth-context";
import { AddAddress } from "../../Services/auth";
import { getCityList } from "../../Services/address";

const isNotEmpty = (value) => value?.trim() !== "";

const CheckoutForm = (props) => {
  const authCtx = useContext(AuthContext);
  const {
    error: cityError,
    sendRequest: cityRequest,
    status: cityStatus,
    data: cities,
  } = useHttp(getCityList, true);

  const { sendRequest, status, data: addresses, error } = useHttp(AddAddress);

  const [addressId, setAddressId] = useState(0);

  const [isCheck, setIsCheck] = useState(false);

  useEffect(() => {
    cityRequest();
  }, [cityRequest]);

  useEffect(() => {
    if (cityStatus === "completed" && !cityError) {
      // console.log(props?.address?.cityCode);
      if (props.address == null) {
        setEnteredAddressName("");
        setEnteredDistrict("");
        setEnteredPhone("");
        setEnteredAddress1("");
        setEnteredAddress2("");
        setEnteredCity("");
        setEnteredPostalCode("");
        setAddressId("");
      } else {
        const cityObj = cities.find((city) => {
          return city.code === props?.address?.cityCode;
        });
        const cityValue = cityObj.value.toString();

        setEnteredAddressName(props?.address?.addressName || "");
        setEnteredDistrict(props?.address?.district || "");
        setEnteredPhone(props?.address?.phone || "");
        setEnteredAddress1(props?.address?.address1 || "");
        setEnteredAddress2(props?.address?.address2 || "");
        setEnteredCity(cityValue || "");
        setEnteredPostalCode(props?.address?.postCode || "");
        setAddressId(props?.address?.addressId || "");
        setIsCheck(props?.isDefaultAddress);

        //   if (status === "completed" && !error) {
        //     //console.log(addresses);
        //     //setAddress(addresses);
        //     //props.address = addresses;
        //     props.updateAddress(addresses);
        //     props.onClose(status);
        //   }
        //   if (status === "completed" && error) {
        //     alert(error);
        // }
      }
    }
  }, [cityStatus, cityError]);

  const chkDefault = () => {
    console.log(props?.isDefaultAddress);
    return "checked";
  };

  const {
    value: enteredDistrict,
    setValue: setEnteredDistrict,
    hasError: districtInputHasError,
    isValid: enteredDistrictIsValid,
    inputChangeHandler: districtInputChangeHandler,
    inputBlurHandler: districtInputBlurHandler,
    reset: resetDistrictInput,
  } = useUserinput(isNotEmpty);

  const {
    value: enteredFullName,
    setValue: setEnteredAddressName,
    hasError: fullNameInputHasError,
    isValid: enteredFullNameIsValid,
    inputChangeHandler: fullNameInputChangeHandler,
    inputBlurHandler: fullNameInputBlurHandler,
    reset: resetFullNameInput,
  } = useUserinput(isNotEmpty);

  const {
    value: enteredPhone,
    setValue: setEnteredPhone,
    hasError: phoneInputHasError,
    isValid: enteredPhoneIsValid,
    inputChangeHandler: phoneInputChangeHandler,
    inputBlurHandler: phoneInputBlurHandler,
    reset: resetPhoneInput,
  } = useUserinput(isNotEmpty);

  const {
    value: enteredAddress1,
    setValue: setEnteredAddress1,
    hasError: address1InputHasError,
    isValid: enteredAddress1IsValid,
    inputChangeHandler: address1InputChangeHandler,
    inputBlurHandler: address1InputBlurHandler,
    reset: resetAddress1Input,
  } = useUserinput(isNotEmpty);

  const {
    value: enteredAddress2,
    setValue: setEnteredAddress2,
    inputChangeHandler: address2InputChangeHandler,
    reset: resetAddress2Input,
  } = useUserinput(isNotEmpty);

  const {
    value: enteredCity,
    setValue: setEnteredCity,
    hasError: cityInputHasError,
    isValid: enteredCityIsValid,
    inputChangeHandler: cityInputChangeHandler,
    inputBlurHandler: cityInputBlurHandler,
    reset: resetCityInput,
  } = useUserinput(isNotEmpty);

  const {
    value: enteredPostalCode,
    setValue: setEnteredPostalCode,

    inputChangeHandler: postalCodeInputChangeHandler,

    reset: resetPostalCodeInput,
  } = useUserinput(isNotEmpty);

  let formIsValid = false;

  if (
    enteredFullNameIsValid &&
    enteredPhoneIsValid &&
    enteredAddress1IsValid &&
    enteredCityIsValid
  ) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    const cityObj = cities.find((city) => {
      return city.value.toString() === enteredCity;
    });

    sendRequest({
      addressName: enteredFullName,
      address1: enteredAddress1,
      address2: enteredAddress2,
      cityCode: cityObj.code,
      cityName: cityObj.name,
      postCode: enteredPostalCode,
      phone: enteredPhone,
      userId: authCtx.userData.id,
      addressId: 2,
    });
    // console.log(
    //   enteredFullName,
    //   enteredPhone,
    //   enteredAddress1,
    //   enteredCity,
    //   enteredPostalCode
    // );

    resetFullNameInput();
    resetPhoneInput();
    resetAddress1Input();
    resetAddress2Input();
    resetCityInput();
    resetPostalCodeInput();

    // console.log({
    //   addressName: enteredFullName,
    //   address1: enteredAddress1,
    //   address2: enteredAddress2,
    //   cityCode: cityObj.code,
    //   cityName: cityObj.name,
    //   postCode: enteredPostalCode,
    //   phone: enteredPhone,
    //   district: enteredDistrict,
    //   userId: authCtx.userData.id,
    //   addressId: addressId == undefined ? 0 : addressId,
    // });
  };

  console.log(cities, "-cityList-");

  return (
    <Fragment>
      <div className={classes["delivery_form-title"]}>
        {props.formTitleInfo}
      </div>
      <div className={classes["delivery_user_info"]}>
        <form onSubmit={formSubmitHandler}>
          <div className={classes["delivery_form-container"]}>
            <div className={classes["delivery_form-left"]}>
              <Input
                id="fullName"
                label="Full Name"
                type="text"
                placeHolder="Please enter your Full Name"
                required={true}
                onChange={fullNameInputChangeHandler}
                onBlur={fullNameInputBlurHandler}
                value={enteredFullName}
                onError={fullNameInputHasError}
                invalidMsg={"Mandatory Field."}
              />
              <Input
                id="phone"
                label="Phone Number"
                type="text"
                placeHolder="Please enter your Phone Number"
                required={true}
                onChange={phoneInputChangeHandler}
                onBlur={phoneInputBlurHandler}
                value={enteredPhone}
                onError={phoneInputHasError}
                invalidMsg={"Mandatory Field."}
              />
            </div>
            <div className={classes["delivery_form-right"]}>
              <Input
                id="address1"
                label="Address 1"
                type="text"
                placeHolder="Please enter your Address 1"
                required={true}
                onChange={address1InputChangeHandler}
                onBlur={address1InputBlurHandler}
                value={enteredAddress1}
                onError={address1InputHasError}
                invalidMsg={"Mandatory Field."}
              />
              <Input
                id="address2"
                label="Address 2"
                type="text"
                placeHolder="Please enter your Address 2"
                required={false}
                onChange={address2InputChangeHandler}
                value={enteredAddress2}
              />
              <DropDown
                id="Cities"
                label="City"
                placeHolder="Please choose your City"
                options={cities}
                required={true}
                onChange={cityInputChangeHandler}
                onBlur={cityInputBlurHandler}
                value={enteredCity}
                onError={cityInputHasError}
                invalidMsg={"Mandatory Field."}
              />

              <Input
                id="PostCodes"
                label="Postcode"
                placeHolder="Please choose your Postcode"
                required={false}
                onChange={postalCodeInputChangeHandler}
                value={enteredPostalCode}
              />
              <p className={classes["address_label-para"]}>
                Select a label for effective delivery:
              </p>
              <input
                className={classes["place_checkbox-input"]}
                type="checkbox"
                id="chkIsDefault"
                value={props.isDefaultAddress}
                name="chck"
                onChange={chkDefault}
              />

              <Button
                // onClick={}
                ondisabled={!formIsValid}
                type="submit"
                className={classes["save_sm_btn"]}
              >
                SAVE
              </Button>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default CheckoutForm;
