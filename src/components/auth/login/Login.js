import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../../UI/buttons/Button";
import Input from "../../UI/input/Input";
import AuthUI from "../AuthUI";
import classes from "../Auth.module.css";
import useUserinput from "../../../hooks/user-input";
import useHttp from "../../../hooks/use-http";
import { signInUser, signInUserF } from "../../../Services/auth";
import AuthContext from "../../../Store/auth-context";
import { uiActions } from "../../../Store/ui-slice";
import { useDispatch } from "react-redux";
import { User } from "../../../entities/user";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const { sendRequest, status, data: userAuth, error } = useHttp(signInUser);
  console.log("-----------login page----------------");
  useEffect(() => {
    console.log("------------------login ---------------");
    console.log(`status: ${status}`);
    if (status === "completed" && !error) {
      const userData = User;
      // userData.email = userAuth.email;
      // userData.userSessionId = userAuth.idToken;
      // userData.last = userAuth.displayName;

      userData.id = userAuth.userId;
      userData.username = userAuth.username;
      userData.mobile = userAuth.mobile;
      userData.email = userAuth.emailId;
      userData.gender = userAuth.gender;
      userData.first = userAuth.firstName;
      userData.last = userAuth.lastName;
      userData.middle = userAuth.middleName;
      userData.dob = userAuth.dob;
      userData.userSessionId = userAuth.userSessionId;
      if (userAuth.addressList !== null) {
        userData.addressList = userAuth.addressList;
      }

      // console.log(userData);
      // authCtx.login(userAuth.idToken, userAuth.displayName, userAuth.email);
      authCtx.login(userAuth.userSessionId, userData);

      if (location.pathname === "/cart") {
        dispatch(uiActions.CloseAuthPop());
      }
      // );
      // navigate("/", { replace: true });
    }
    if (status === "completed" && error) {
      alert(error);
    }
  }, [status, error, navigate, userAuth, authCtx, dispatch, location]);

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
    value: enteredPassword,
    hasError: passwordInputHasError,
    isValid: enteredPasswordIsValid,
    inputChangeHandler: passwordInputChangeHandler,
    inputBlurHandler: passwordInputBlurHandler,
    reset: resetPasswordInput,
  } = useUserinput(isNotEmpty);

  let formIsValid = false;

  if (enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    // console.log("submitted");
    // console.log(enteredEmail, enteredPassword);
    sendRequest({
      email: enteredEmail,
      pass: enteredPassword,
      returnSecureToken: true,
    });

    resetPasswordInput();
    resetEmailInput();
  };

  return (
    <AuthUI
      title="Welcome to Muradi! Please login."
      commands="New member?"
      path="/register"
      link=" Register "
      onSubmitHandler={formSubmitHandler}
    >
      <div className={classes["auth_module"]}>
        <div className={classes["auth_modul_col1"]}>
          <Input
            id="field"
            label="Phone Number or Email"
            type="text"
            placeHolder="Please enter your Phone Number or Email"
            required={true}
            inputIcon="person-outline"
            onChange={emailInputChangeHandler}
            onBlur={emailInputBlurHandler}
            value={enteredEmail}
            onError={emailInputHasError}
            invalidMsg={"please enter your correct email or phone number"}
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

          <div className={classes["forgot_psw"]}>
            <Link to={"/forget"}>Forgot Password?</Link>
          </div>
        </div>
        <div className={`${classes["auth_modul_col2"]} ${classes.mt}`}>
          <div className="muradi_auth_modul-btn">
            <Button
              // onClick={formSubmitHandler}
              ondisabled={!formIsValid}
              type="submit"
              className={classes["md-auth-button"]}
            >
              LOGIN
            </Button>
          </div>
          <div className="modul-auth-others">
            <div className={classes["modul-auth-others-line"]}>
              <span>Or, login with</span>
            </div>
            <div className="mod-third-party-auth-bd">
              <Button
                // type="submit"
                className={`${classes["md-auth-btn"]} ${classes["fb-button"]}`}
              >
                Facebook
              </Button>
              <Button
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

export default Login;
