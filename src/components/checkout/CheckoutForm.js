import React, { useContext, Fragment, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useUserinput from "../../hooks/user-input";
import Button from "../UI/buttons/Button";
import DropDown from "../UI/dropdown/DropDown";
import Input from "../UI/input/Input";
import Radio from "../UI/radio/Radio";
import classes from "./CheckoutForm.module.css";
import useHttp from "../../hooks/use-http";
import { useDispatch } from "react-redux";
import AuthContext from "../../Store/auth-context";
import { AddAddress } from "../../Services/auth";
import SideModal from "../UI/sidemodal/SideModal";
import ChooseAddress from "./chooseaddess/ChooseAddress";

const isNotEmpty = (value) => value?.trim() !== "";

const CheckoutForm = (props) => {
  const [enteredAddressLabel, setEnteredAddressLabel] = useState("Home");
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  //const [ cityList, setCityList] = useState([]);
  //sendRequest();
  const {
    sendRequest,
    status,
    data: addresses,
    error,
  } = useHttp(AddAddress, true);
  const [addressId, setAddressId] = useState(0);
  const [isCheck, setIsCheck] = useState(false);
  //const { sendRequest1, status1, data: addressList, error1 } = useHttp(getCityList, true);
  //console.log('-----------address modal bf effect----------------');
  useEffect(() => {
    //console.log('-----------address edit ---------------');
    //console.log(addressId);
    //console.log(props);
    //console.log(props?.address);
    setEnteredAddressName(props?.address?.addressName);
    setEnteredDistrict(props?.address?.district);
    setEnteredPhone(props?.address?.phone);
    setEnteredAddress1(props?.address?.address1);
    setEnteredAddress2(props?.address?.address2);
    setEnteredCity(props?.address?.cityName);
    setEnteredPostalCode(props?.address?.postCode);
    setAddressId(props?.address?.addressId);
    //setIsCheck(props?.isDefaultAddress)
    if (status === "completed" && !error) {
      //console.log(addresses);
      //setAddress(addresses);
      //props.address = addresses;
      props.updateAddress(addresses);
      props.onClose(status);
    }
    if (status === "completed" && error) {
      alert(error);
    }
  }, [status, error, addresses]);

  const chkDefault = () => {
    console.log(props?.isDefaultAddress);
    //console.log(((isCheck===undefined)?false:isCheck)?'checked':'');
    //console.log(((props?.isDefaultAddress)?false:isCheck)?'checked':'');
    //return ((isCheck===undefined)?false:isCheck)?'checked':'';
    return "checked";
  };

  //console.log('------------auth dtx-------------');
  //console.log(authCtx);

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
    value: enteredAddressName,
    setValue: setEnteredAddressName,
    hasError: addressNameInputHasError,
    isValid: enteredAddressNameIsValid,
    inputChangeHandler: addressNameInputChangeHandler,
    inputBlurHandler: addressNameInputBlurHandler,
    reset: resetAddressNameInput,
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
    hasError: address2InputHasError,
    isValid: enteredAddress2IsValid,
    inputChangeHandler: address2InputChangeHandler,
    inputBlurHandler: address2InputBlurHandler,
    reset: resetAddress2Input,
  } = useUserinput(isNotEmpty);

  const {
    value: enteredState,
    setValue: setEnteredState,
    hasError: stateInputHasError,
    isValid: enteredStateIsValid,
    inputChangeHandler: stateInputChangeHandler,
    inputBlurHandler: stateInputBlurHandler,
    reset: resetStateInput,
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
    hasError: postalCodeInputHasError,
    isValid: enteredPostalCodeIsValid,
    inputChangeHandler: postalCodeInputChangeHandler,
    inputBlurHandler: postalCodeInputBlurHandler,
    reset: resetPostalCodeInput,
  } = useUserinput(isNotEmpty);

  const addressLabelInputChangeHandler = (event) => {
    setEnteredAddressLabel(event.target.value);
  };

  let formIsValid = false;

  if (enteredPhoneIsValid && enteredAddress1IsValid && enteredCityIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const cityObj = props.cityList.find((city) => {
      return city.cityId == enteredCity;
    });

    sendRequest({
      addressName: enteredAddressName,
      address1: enteredAddress1,
      address2: enteredAddress2,
      cityCode: cityObj.code,
      cityName: cityObj.name,
      postCode: enteredPostalCode,
      phone: enteredPhone,
      district: enteredDistrict,
      userId: authCtx.userData.id,
      addressId: addressId == undefined ? 0 : addressId,
    });
    //console.log(sendRequest);
    /*
    console.log(cityObj);
    console.log(
     `district: ${enteredDistrict},
      phone: ${enteredPhone},
      user: ${authCtx.userData.id},
      add1: ${enteredAddress1},
      add2: ${enteredAddress2},
      cityCode: ${cityObj.code},
      cityName: ${cityObj.name},      
      post: ${enteredPostalCode},
      radio: ${enteredAddressLabel}`
    );*/
    /*
    resetDistrictInput();
    resetPhoneInput();
    resetAddress1Input();
    resetAddress2Input();
    resetStateInput();
    resetCityInput();
    resetPostalCodeInput();
    */
  };

  return (
    <Fragment>
      <div className={classes["delivery_form-title"]}>Delivery Information</div>
      <div className={classes["delivery_user_info"]}>
        <form onSubmit={formSubmitHandler}>
          <div className={classes["delivery_form-container"]}>
            <div className={classes["delivery_form-left"]}>
              <Input
                id="addressName"
                label="Full Name"
                type="text"
                placeHolder="Please enter your Full Name"
                required={true}
                onChange={addressNameInputChangeHandler}
                onBlur={addressNameInputBlurHandler}
                value={enteredAddressName}
                onError={addressNameInputHasError}
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
                onBlur={address2InputBlurHandler}
                value={enteredAddress2}
              />
              <DropDown
                id="Cities"
                label="City"
                placeHolder="Please choose your City"
                options={props.cityList}
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
                onBlur={postalCodeInputBlurHandler}
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
