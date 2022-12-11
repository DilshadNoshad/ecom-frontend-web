import React from "react";
import AuthUI from "../AuthUI";
import Button from "../../UI/buttons/Button";
import Input from "../../UI/input/Input";
import classes from "../Auth.module.css";
import useUserinput from "../../../hooks/user-input";
const isEmail = (value) => value.includes("@");
const Forget = () => {
  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    isValid: enteredEmailIsValid,
    inputChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput,
  } = useUserinput(isEmail);

  let formIsValid = false;

  if (enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    console.log("submitted");
    console.log(enteredEmail);

    resetEmailInput();
  };
  return (
    <AuthUI
      title="Forgot your password?"
      commands="Go back?"
      path="/login"
      link=" login "
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
          <div className="muradi_auth_modul-btn">
            <Button
              onClick={formSubmitHandler}
              ondisabled={!formIsValid}
              className={classes["md-auth-button"]}
            >
              Reset Password
            </Button>
          </div>
        </div>
      </div>
    </AuthUI>
  );
};

export default Forget;
