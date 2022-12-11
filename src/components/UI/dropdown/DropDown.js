import React, { Fragment } from "react";
import classes from "./DropDown.module.css";
const DropDown = (props) => {
  return (
    <Fragment>
      <div className={`${classes.control} ${props.onError && classes.invalid}`}>
        <label
          htmlFor={props.id}
          className={props.required ? classes["required_input"] : ""}
        >
          {props.label}
        </label>

        <select
          id={props.id}
          name={props.id}
          // defaultValue=""
          onChange={props.onChange}
          onBlur={props.onBlur}
          value={props.value}
        >
          <option value="">{props?.placeHolder}</option>
          {props?.options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {/* {props.inputIcon && (
          <div className={classes["input-icon"]}>
            <ion-icon
              name={props.inputIcon}
              onClick={props.onIconChange}
            ></ion-icon>
          </div>
        )} */}
      </div>
      {props.onError && (
        <p className={classes["error-text"]}>{props.invalidMsg}</p>
      )}
    </Fragment>
  );
};

export default DropDown;
