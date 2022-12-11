import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContext from '../../../Store/auth-context';
import Button from "../../UI/buttons/Button";
import DropDown from "../../UI/dropdown/DropDown";
import Input from "../../UI/input/Input";
import { MyDatePicker } from "../../UI/datetimepicker/MyDatePicker";
import classes from "./MyProfile.module.css";
import {User} from "../../../entities/user";
import useUserinput from "../../../hooks/user-input";

import AuthUI from "../../auth/AuthUI";

import useHttp from "../../../hooks/use-http";
import { getUserById } from "../../../Services/auth";
import { useDispatch } from "react-redux";
import { Datetimepicker_Dropdown} from '../../UI/datetimepicker/DatetimePicker-Dropdown';

const EditProfile__ = () => {

const isEmail = (value) => value.includes("@");

  const dispatch = useDispatch();
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();


  const isNotEmpty = (value) => value.trim() !== "";
  const initialToken = localStorage.getItem("token");
  const userData = JSON.parse( localStorage.getItem("user"));
  
  const [lastName, setLastName] = useState(userData?.last);
  const [mobile, setMobile] = useState(userData?.mobile);
  const [username, setUserName] = useState(userData?.username);
  const [email, setEmail] = useState(userData?.email);
  const [gender, setGender] = useState(userData?.gender);
  const [dob, setDob] = useState(new Date(userData?.dob));
//console.log(dob);
  //userData?.dob
  console.log('---------profile-----------');
  console.log(userData);
  //const [status, error]= useState();
  const { sendRequest, status, data: userProfile, error } = useHttp(getUserById);

  useEffect(() => {
    if (status === "completed" && !error) {
      console.log('------------profile------------');
      console.log(userProfile);
      const userData = User;
      /*
      
      userData.username = userAuth.username;
      userData.mobile = userAuth.mobile;
      userData.email = userAuth.emailId;
      userData.gender = userAuth.gender;
      userData.first = userAuth.firstName;
      userData.last = userAuth.lastName;
      userData.middle = userAuth.middleName;
      userData.dob = userAuth.dob;
      userData.userSessionId = userAuth.userSessionId;
      
      console.log(userData);
      */
      //authCtx.login(userAuth.userSessionId, userAuth.email, userAuth.mobile, userAuth.username, userData);

      // );
      // navigate("/", { replace: true });
    }
    if (status === "completed" && error) {
      alert(error);
    }
  }, [status, error, navigate, userProfile, authCtx, dispatch, location]);
  /*
  sendRequest({
    id: userData.id
  });
*/
//let enteredMobile = userData?.mobile;


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

const setForm = (event) => {
  setUserName(event.target.username.value);
  setMobile( event.target.mobile.value);
  setLastName( event.target.lastname.value );
  setEmail(event.target.email.value);
  setDob( event.target.dob.value );
  setGender( event.target.gender.value);
}

const formSubmitHandler = (event) => {
  console.log('---------- formSubmitHandler ----------------');
  console.log(event.target.lastName.value);

  setForm(event);
  event.preventDefault();
  if (!formIsValid) {
    return;
  }

  sendRequest({      
    username: event.target.username.value,
    mobile: event.target.username.value,
    lastName: event.target.username.value,
    emailId: event.target.username.value,
    dob:event.target.username.value,
    gender: event.target.username.value,
    type: 1
  });

  resetMobileInput();
  resetUserNameInput();
  resetPasswordInput();
  resetEmailInput();
  resetLastNameInput();
  resetGenderInput();    
};
  const optGender = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" }
  ];

  

  const onDatePickerChange = (val) => {
    //setEnteredOptDate(val);
  }

  const getDateFormate = (dob)=>{
    return (`${new Date(dob).getDate()}-${new Date(dob).getMonth()}-${new Date(dob).getFullYear()}` )
  }

  const onDateSelection = (selectedDate) => {
    console.log('--------onDateSelection---------');
    console.log(selectedDate);
  }

  //const loggedInUsername = authCtx.userData?.username;  
  //console.log(authCtx);
  const loggedInUsername = userData?.username;  

  
  return (
    <AuthUI
      title="Welcome to Muradi! Please edit profile."
      commands="New member?"
      path="/profile"
      link=" Edit Profile "
      onSubmitHandler={formSubmitHandler}
    >
    <div className={classes["my-profile"]}>
      <div className={classes["my-profile-bd"]}>
        <div className={classes["my-profile-item"]}>
          <h3 className={classes["my-profile-item-title"]}>Full name</h3>
          <div className={classes["my-profile-item-info"]}>    
          <Input
            id="lastName"
            label="Full Name"
            type="text"
            placeHolder="Please enter your full Name"
            required={true}
            onChange={lastNameInputChangeHandler}
            onBlur={lastNameInputBlurHandler}
            value={enteredLastName}
            inputSet={lastName}
            onError={lastNameInputHasError}
            invalidMsg={"please enter your last name"}
          />            
          </div>
        </div>
        <div className={classes["my-profile-item"]}>
          <h3 className={classes["my-profile-item-title"]}>
            <span>Email Address</span> &nbsp;
          </h3>
          <div className={classes["my-profile-item-info"]}>
          <Input
            id="email"
            label="You can start with your email too"
            type="text"
            placeHolder="Please enter your email"
            required={false}
            inputIcon="person-outline"
            onChange={emailInputChangeHandler}
            onBlur={emailInputBlurHandler}
            value={email}
            onError={emailInputHasError}
            invalidMsg={"please enter your correct email"}
          />
          </div>
        </div>
        <div className={classes["my-profile-item"]}>
          <h3 className={classes["my-profile-item-title"]}>
            Mobile <span className="gray"></span>&nbsp;            
          </h3>
          <div className={classes["my-profile-item-info"]}>            
            <Input
              id="mobile"
              label="Phone Number or Email"
              type="text"
              placeHolder="Please enter your Phone Number"
              required={true}
              inputIcon="person-outline"
              onChange={mobileInputChangeHandler}
              onBlur={mobileInputBlurHandler}
              value={mobile}
              onError={mobileInputHasError}
              invalidMsg={"please enter your correct mobile or phone number"}
            />
          </div>
        </div>
        <div className={classes["my-profile-item"]}>
          <h3 className={classes["my-profile-item-title"]}>Birthday</h3>
          <div className={classes["my-profile-item-info"]}>
            <span className="gray">
              <Datetimepicker_Dropdown onChange={onDateSelection} selectedDate={userData?.dob} />

            </span>
          </div>
        </div>
        <div className={classes["my-profile-item"]}>
          <h3 className={classes["my-profile-item-title"]}>Gender</h3>
          <div className={classes["my-profile-item-info"]}>
            <span className="gray">
              <DropDown
              id="Gender"
              label="Gender"
              placeHolder="Please choose your Gender"
              options={optGender}
              required={true}
              onChange={genderInputChangeHandler}
              onBlur={genderInputBlurHandler}
              value={gender}
              onError={genderInputHasError}
              invalidMsg={"Mandatory Field."}
            />
              </span>
          </div>
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
          edit profile
        </Button>
        <Button
          // onClick={}
          className={classes["md-edit-button"]}        >
          change password
        </Button>
      </div>
    </div>
    </AuthUI>
  );
};

export default EditProfile;
