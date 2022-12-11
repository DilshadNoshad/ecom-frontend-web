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
import { updateUser } from "../../../Services/auth";
import { useDispatch } from "react-redux";
import { Datetimepicker_Dropdown} from '../../UI/datetimepicker/DatetimePicker-Dropdown';

const EditProfile = () => {

const isEmail = (value) => value.includes("@");

  const dispatch = useDispatch();
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();


  const isNotEmpty = (value) => value.trim() !== "";
  const initialToken = localStorage.getItem("token");
  const userData = JSON.parse( localStorage.getItem("user"));
  
  const [userId, setUserId] = useState(userData?.id);
  const [lastName, setLastName] = useState(userData?.last);
  const [mobile, setMobile] = useState(userData?.mobile);
  const [username, setUserName] = useState(userData?.username);
  const [email, setEmail] = useState(userData?.email);
  const [gender, setGender] = useState(userData?.gender);
  const [dob, setDob] = useState(new Date(userData?.dob));
//console.log(dob);
  //userData?.dob
  //console.log('---------profile-----------');
  //console.log(userData);
  //const [status, error]= useState();
const { sendRequest, status, data: userProfile, error } = useHttp(updateUser);

  useEffect(() => {
    if (status === "completed" && !error) {
      //console.log('------------profile123------------');
      //console.log(userProfile);
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
      
      //console.log(userData);
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

/*

*/

const setForm = (event) => {
  setUserName(event.target.username.value);
  setMobile( event.target.mobile.value);
  setLastName( event.target.lastname.value );
  setEmail(event.target.email.value);
  setDob( event.target.dob.value );
  setGender( event.target.gender.value);
}

let formIsValid = true;
const formSubmitHandler = (event) => {
  event.preventDefault();
  
  //setForm(event);
  if (!formIsValid) {
    return;
  }
  //return false;

  sendRequest({ 
    userId: userId,
    username: username,
    mobile: mobile,
    lastName: lastName,
    emailId: email,
    dob:dob,
    gender: gender,
    type: 1
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
    { label: "Female", value: "Female" }
  ];

  
/*
  const onDatePickerChange = (val) => {
    //setEnteredOptDate(val);
  }
*/
  const getDateFormate = (dob)=>{
    return (`${new Date(dob).getDate()}-${new Date(dob).getMonth()}-${new Date(dob).getFullYear()}` )
  }

  const onDateSelection = (selectedDate) => {
    console.log('--------onDateSelection---------');
    console.log(selectedDate);
    setDob(new Date(selectedDate));
  }

  const handleComplete = (event) =>{
    console.log(event);
    setForm(event);
  }

  //const loggedInUsername = authCtx.userData?.username;  
  //console.log(authCtx);
  const loggedInUsername = userData?.username;  

  const onChangeHandler = (e) =>{
    e.preventDefault();
    console.log(e.target.value );
    setLastName(e.target.value);
  }
  
  return (
    <form onSubmit={formSubmitHandler}>
    
    <div className={classes["my-profile"]}>
      <div className={classes["my-profile-bd"]}>
        <div className={classes["my-profile-item"]}>
          <h3 className={classes["my-profile-item-title"]}>Full name</h3>
          <div className={classes["my-profile-item-info"]}>          
            <input type="text" id="txtLast" name="txtLast" value={lastName} onChange={onChangeHandler} />
                      
          </div>
        </div>
        <div className={classes["my-profile-item"]}>
          <h3 className={classes["my-profile-item-title"]}>
            <span>Email Address</span> &nbsp;
          </h3>
          <div className={classes["my-profile-item-info"]}>
          <input type="text" id="txtEmail" value={email} onChange={(e) => setEmail(e.target.value )} />
          </div>
        </div>
        <div className={classes["my-profile-item"]}>
          <h3 className={classes["my-profile-item-title"]}>
            Mobile <span className="gray"></span>&nbsp;            
          </h3>
          <div className={classes["my-profile-item-info"]}>            
          <input type="text" id="txtMobile" value={mobile} onChange={(e) => setMobile(e.target.value )} />
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
            <select 
                  value={gender}
                  onChange={(e) => setGender(e.target.value )}
                >
                  <option key="" value="" >Select Gender</option>  
                  <option key="Male" value="Male" >Male</option>
                  <option key="Female" value="Female" >Female</option>
                  
                  
                </select>
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
    </form>
  );
};

export default EditProfile;
