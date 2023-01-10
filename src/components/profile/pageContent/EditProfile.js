import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../../Store/auth-context";
import Button from "../../UI/buttons/Button";
import DropDown from "../../UI/dropdown/DropDown";
import Input from "../../UI/input/Input";
import { MyDatePicker } from "../../UI/datetimepicker/MyDatePicker";
import classes from "./MyProfile.module.css";
import { User } from "../../../entities/user";
import useUserinput from "../../../hooks/user-input";

import AuthUI from "../../auth/AuthUI";

import useHttp from "../../../hooks/use-http";
import { updateUser } from "../../../Services/auth";
import { useDispatch } from "react-redux";
import { Datetimepicker_Dropdown } from "../../UI/datetimepicker/DatetimePicker-Dropdown";

const isEmail = (value) => value.includes("@");
const isNotEmpty = (value) => value.trim() !== "";

const EditProfile = () => {
  // const dispatch = useDispatch();
  // const authCtx = useContext(AuthContext);
  // const navigate = useNavigate();
  // const location = useLocation();

  // const initialToken = localStorage.getItem("token");
  const userData = JSON.parse(localStorage.getItem("user"));

  // const [userId, setUserId] = useState(userData?.id);
  // const [lastName, setLastName] = useState(userData?.last);

  // const [mobile, setMobile] = useState(userData?.mobile);
  // const [username, setUserName] = useState(userData?.username);
  // const [email, setEmail] = useState(userData?.email);
  // const [gender, setGender] = useState(userData?.gender);
  const [dob, setDob] = useState(new Date(userData?.dob));
  //console.log(dob);
  //userData?.dob
  //console.log('---------profile-----------');
  console.log(userData);
  //const [status, error]= useState();
  const { sendRequest, status, data: userProfile, error } = useHttp(updateUser);

  /*
  sendRequest({
    id: userData.id
  });
*/
  //let enteredMobile = userData?.mobile;

  /*

*/

  const {
    value: enteredLastName,
    setValue: setEnteredLastName,
    hasError: lastNameInputHasError,
    isValid: enteredLastNameIsValid,
    inputChangeHandler: lastNameInputChangeHandler,
    inputBlurHandler: lastNameInputBlurHandler,
    reset: resetLastNameInput,
  } = useUserinput(isNotEmpty);

  const {
    value: enteredMobile,
    setValue: setEnteredMobile,
    hasError: mobileInputHasError,
    isValid: enteredMobileIsValid,
    inputChangeHandler: mobileInputChangeHandler,
    inputBlurHandler: mobileInputBlurHandler,
    reset: resetMobileInput,
  } = useUserinput(isNotEmpty);

  const {
    value: enteredEmail,
    setValue: setEnteredEmail,
    hasError: emailInputHasError,
    isValid: enteredEmailIsValid,
    inputChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput,
  } = useUserinput(isEmail);

  const {
    value: enteredGender,
    setValue: setEnteredGender,
    hasError: genderInputHasError,
    isValid: enteredGenderIsValid,
    inputChangeHandler: genderInputChangeHandler,
    inputBlurHandler: genderInputBlurHandler,
    reset: resetGenderInput,
  } = useUserinput(isNotEmpty);

  useEffect(() => {
    setEnteredLastName(userData?.last);
    setEnteredMobile(userData?.mobile);
    setEnteredEmail(userData?.email);
    setEnteredGender(userData?.gender);
  }, []);

  useEffect(() => {
    if (status === "completed" && !error) {
      const userData = User;
      userData.userId = userProfile.userId;
      userData.username = userProfile.username;
      userData.mobile = userProfile.mobile;
      userData.email = userProfile.emailId;
      userData.gender = userProfile.gender;
      userData.first = userProfile.firstName;
      userData.last = userProfile.lastName;
      userData.middle = userProfile.middleName;
      userData.dob = userProfile.dob;
      userData.userSessionId = userProfile.userSessionId;
    }
    if (status === "completed" && error) {
      alert(error);
    }
  }, [status, error, userProfile]);

  // const setForm = (event) => {
  //   setUserName(event.target.username.value);
  //   setMobile(event.target.mobile.value);
  //   setLastName(event.target.lastname.value);
  //   setEmail(event.target.email.value);
  //   setDob(event.target.dob.value);
  //   setGender(event.target.gender.value);
  // };

  let formIsValid = true;
  const formSubmitHandler = (event) => {
    event.preventDefault();

    //setForm(event);
    if (!formIsValid) {
      return;
    }
    //return false;

    sendRequest({
      userId: userData.id,
      username: userData.username,
      mobile: enteredMobile,
      lastName: enteredLastName,
      emailId: enteredEmail,
      dob: dob,
      gender: enteredGender,
      type: 1,
    });
    /*
  resetMobileInput();
  resetUserNameInput();
  resetPasswordInput();
  resetEmailInput();
  resetLastNameInput();
  resetGenderInput();    
  */
  };
  const optGender = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ];

  /*
  const onDatePickerChange = (val) => {
    //setEnteredOptDate(val);
  }
*/
  // const getDateFormate = (dob) => {
  //   return `${new Date(dob).getDate()}-${new Date(dob).getMonth()}-${new Date(
  //     dob
  //   ).getFullYear()}`;
  // };

  const onDateSelection = (selectedDate) => {
    console.log("--------onDateSelection---------");
    console.log(selectedDate);
    setDob(new Date(selectedDate));
  };

  // const handleComplete = (event) => {
  //   console.log(event);
  //   setForm(event);
  // };

  //const loggedInUsername = authCtx.userData?.username;
  //console.log(authCtx);
  // const loggedInUsername = userData?.username;

  // const onChangeHandler = (e) => {
  //   e.preventDefault();
  //   console.log(e.target.value);
  //   setLastName(e.target.value);
  // };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={classes["my-profile"]}>
        <div className={classes["my-profile-bd"]}>
          <div className={classes["my-profile-item"]}>
            {/* <h3 className={classes["my-profile-item-title"]}>Full name</h3>
            <div className={classes["my-profile-item-info"]}> */}
            <Input
              id="lastName"
              label="Last Name"
              type="text"
              placeHolder="Please enter your Last Name"
              required={false}
              onChange={lastNameInputChangeHandler}
              onBlur={lastNameInputBlurHandler}
              value={enteredLastName}
              onError={lastNameInputHasError}
              invalidMsg={"please enter your last name"}
            />
            {/* </div> */}
          </div>
          <div className={classes["my-profile-item"]}>
            <Input
              id="email"
              label="Email Address"
              type="text"
              placeHolder="Please enter your email"
              required={false}
              onChange={emailInputChangeHandler}
              onBlur={emailInputBlurHandler}
              value={enteredEmail}
              onError={emailInputHasError}
              invalidMsg={"please enter your correct email"}
            />
          </div>
          <div className={classes["my-profile-item"]}>
            <Input
              id="mobile"
              label="Phone Number"
              type="text"
              placeHolder="Please enter your Phone Number"
              required={false}
              onChange={mobileInputChangeHandler}
              onBlur={mobileInputBlurHandler}
              value={enteredMobile}
              onError={mobileInputHasError}
              invalidMsg={"please enter your correct mobile or phone number"}
            />
          </div>
          <div className={classes["my-profile-item"]}>
            <Datetimepicker_Dropdown
              label="Birthday"
              onChange={onDateSelection}
              selectedDate={userData?.dob}
            />
          </div>
          <div className={classes["my-profile-item"]}>
            <DropDown
              id="Gender"
              label="Gender"
              placeHolder="Please choose your Gender"
              options={optGender}
              required={false}
              onChange={genderInputChangeHandler}
              onBlur={genderInputBlurHandler}
              value={enteredGender}
              onError={genderInputHasError}
              invalidMsg={"Mandatory Field."}
            />
          </div>
        </div>
        <div className="my-profile-ft">
          <Link className={classes.link} to="#">
            Subscribe to our Newsletter
          </Link>
          <Button
            // onClick={}
            //ondisabled={!formIsValid}
            type="submit"
            className={classes["md-edit-button"]}
          >
            save Changes
          </Button>
        </div>
      </div>
    </form>
  );
};

export default EditProfile;
