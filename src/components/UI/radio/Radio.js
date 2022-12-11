import React from "react";
import classes from "./Radio.module.css";
const Radio = (props) => {
  return (
    <div className={classes.control}>
      <label htmlFor={props.id} className={classes["checkout_place-checkbox"]}>
        <input
          className={classes["place_checkbox-input"]}
          type={props.type}
          id={props.id}
          value={props.value}
          name={props.name}
          onChange={props.onChange}
          checked={props.checked}
        />
        {props.label}
      </label>
    </div>
  );
};

export default Radio;
