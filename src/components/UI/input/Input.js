import React, { Fragment } from "react";
import classes from "./Input.module.css";
const Input = (props) => {
  return (
    <Fragment>
      <div className={`${classes.control} ${props.onError && classes.invalid}`}>
        <label
          htmlFor={props.id}
          className={props.required ? classes["required_input"] : ""}
        >
          {props.label}
        </label>
        <input
          type={props.type}
          id={props.id}
          value={props.value}
          placeholder={props.placeHolder}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />

        {props.inputIcon && (
          <div className={classes["input-icon"]}>
            <ion-icon
              name={props.inputIcon}
              onClick={props.onIconChange}
            ></ion-icon>
          </div>
        )}
      </div>
      {props.onError && (
        <p className={classes["error-text"]}>{props.invalidMsg}</p>
      )}
    </Fragment>
  );
};

export default Input;
