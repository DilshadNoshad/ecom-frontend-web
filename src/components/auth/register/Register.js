import React, { useEffect, useState } from "react";
import AuthUI from "../AuthUI";
import { Link } from "react-router-dom";
import Button from "../../UI/buttons/Button";
import DropDown from "../../UI/dropdown/DropDown";
import Input from "../../UI/input/Input";
import classes from "../Auth.module.css";
import useUserinput from "../../../hooks/user-input";
import { addUser, addUserData } from "../../../Services/auth";
import useHttp from "../../../hooks/use-http";
//import DatePicker from 'react-date-picker';
//import DatePicker from "../../UI/datetimepicker/DatePicker";
import { MyDatePicker } from "../../UI/datetimepicker/MyDatePicker";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const optGender = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
];
//const [dpDob, onChange] = useState(new Date());

const Register = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [enteredOptDate, setEnteredOptDate] = useState(new Date());
  const { sendRequest, status, data: userAuth, error } = useHttp(addUser);

  const onDatePickerChange = (val) => {
    setEnteredOptDate(val);
  };

  useEffect(() => {
    if (status === "completed" && !error) {
      console.log(userAuth);
    }
    if (status === "completed" && error) {
      alert(error);
    }
  }, [status, error, userAuth]);

  const iconChangeHandler = () => {
    setIsVisible(!isVisible);
  };

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    isValid: enteredEmailIsValid,
    inputChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput,
  } = useUserinput(isEmail);

  const {
    value: enteredMobile,
    hasError: mobileInputHasError,
    isValid: enteredMobileIsValid,
    inputChangeHandler: mobileInputChangeHandler,
    inputBlurHandler: mobileInputBlurHandler,
    reset: resetMobileInput,
  } = useUserinput(isNotEmpty);

  const {
    value: enteredUserName,
    hasError: userNameInputHasError,
    isValid: enteredUserNameIsValid,
    inputChangeHandler: userNameInputChangeHandler,
    inputBlurHandler: userNameInputBlurHandler,
    reset: resetUserNameInput,
  } = useUserinput(isNotEmpty);

  const {
    value: enteredLastName,
    hasError: lastNameInputHasError,
    isValid: enteredLastNameIsValid,
    inputChangeHandler: lastNameInputChangeHandler,
    inputBlurHandler: lastNameInputBlurHandler,
    reset: resetLastNameInput,
  } = useUserinput(isNotEmpty);
  const {
    value: enteredPassword,
    hasError: passwordInputHasError,
    isValid: enteredPasswordIsValid,
    inputChangeHandler: passwordInputChangeHandler,
    inputBlurHandler: passwordInputBlurHandler,
    reset: resetPasswordInput,
  } = useUserinput(isNotEmpty);

  const {
    value: enteredGender,
    hasError: genderInputHasError,
    isValid: enteredGenderIsValid,
    inputChangeHandler: genderInputChangeHandler,
    inputBlurHandler: genderInputBlurHandler,
    reset: resetGenderInput,
  } = useUserinput(isNotEmpty);

  let formIsValid = false;

  if (
    (enteredMobile || enteredEmailIsValid) &&
    enteredPasswordIsValid &&
    enteredUserNameIsValid
  ) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }

    sendRequest({
      username: enteredUserName,
      mobile: enteredMobile,
      lastName: enteredLastName,
      emailId: enteredEmail,
      passcode: enteredPassword,
      dob: enteredOptDate,
      gender: enteredGender,
      type: 1,
    });
    resetMobileInput();
    resetUserNameInput();
    resetPasswordInput();
    resetEmailInput();
    resetLastNameInput();
    resetGenderInput();
  };

  return (
    <AuthUI
      title="Create your Muradi Account"
      commands="Already member?"
      path="/login"
      link=" login "
      onSubmitHandler={formSubmitHandler}
    >
      <div className={classes["auth_module"]}>
        <div className={classes["auth_modul_col1"]}>
          <Input
            id="mobile"
            label="Phone Number or Email"
            type="text"
            placeHolder="Please enter your Phone Number"
            required={true}
            inputIcon="person-outline"
            onChange={mobileInputChangeHandler}
            onBlur={mobileInputBlurHandler}
            value={enteredMobile}
            onError={mobileInputHasError}
            invalidMsg={"please enter your correct mobile or phone number"}
          />
          <Input
            id="userName"
            label="User Name"
            type="text"
            placeHolder="Please enter your user name"
            required={true}
            onChange={userNameInputChangeHandler}
            onBlur={userNameInputBlurHandler}
            value={enteredUserName}
            onError={userNameInputHasError}
            invalidMsg={"please enter your user name"}
          />

          <Input
            id="password"
            label="Password"
            type={isVisible ? "text" : "password"}
            placeHolder="Please enter your Password"
            required={true}
            inputIcon={isVisible ? "eye-outline" : "eye-off-outline"}
            onIconChange={iconChangeHandler}
            onChange={passwordInputChangeHandler}
            onBlur={passwordInputBlurHandler}
            value={enteredPassword}
            onError={passwordInputHasError}
            invalidMsg={"please enter your password"}
          />
          <MyDatePicker
            onChange={onDatePickerChange}
            currentDate={enteredOptDate}
          />
          <DropDown
            id="Gender"
            label="Gender"
            placeHolder="Please choose your Gender"
            options={optGender}
            required={true}
            onChange={genderInputChangeHandler}
            onBlur={genderInputBlurHandler}
            value={enteredGender}
            onError={genderInputHasError}
            invalidMsg={"Mandatory Field."}
          />
        </div>
        <div className={classes["auth_modul_col2"]}>
          <Input
            id="lastName"
            label="Last Name"
            type="text"
            placeHolder="Please enter your Last Name"
            required={true}
            onChange={lastNameInputChangeHandler}
            onBlur={lastNameInputBlurHandler}
            value={enteredLastName}
            onError={lastNameInputHasError}
            invalidMsg={"please enter your last name"}
          />
          <Input
            id="field"
            label="You can start with your email too"
            type="text"
            placeHolder="Please enter your email"
            required={false}
            inputIcon="person-outline"
            onChange={emailInputChangeHandler}
            onBlur={emailInputBlurHandler}
            value={enteredEmail}
            onError={emailInputHasError}
            invalidMsg={"please enter your correct email"}
          />

          <div className="muradi_auth_modul-btn">
            <Button
              // onClick={formSubmitHandler}
              type="submit"
              ondisabled={!formIsValid}
              className={classes["md-auth-button"]}
            >
              Signup
            </Button>
          </div>
          <div className="modul-auth-others">
            <div className={classes["modul-auth-others-line"]}>
              <span>
                By clicking "SIGN UP"; I agree to Muradi's
                <Link to="#"> Terms of Use </Link> and
                <Link to="#"> Privacy Policy </Link>
              </span>
            </div>
            <div className="mod-third-party-auth-bd">
              <Button
                // type="submit"
                className={`${classes["md-auth-btn"]} ${classes["fb-button"]}`}
              >
                Facebook
              </Button>
              <Button
                // type="submit"
                className={`${classes["md-auth-btn"]} ${classes["google-button"]}`}
              >
                Google
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AuthUI>
  );
};

export default Register;
