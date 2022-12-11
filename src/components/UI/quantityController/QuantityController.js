import React, { Fragment } from "react";
import classes from "./QuantityController.module.css";
const QuantityController = React.forwardRef((props, ref) => {
  return (
    <Fragment>
      <span
        onClick={props.onRemove}
        className={classes["previous-picker-handler"]}
      >
        <ion-icon name="remove-outline" />
      </span>
      <span className={classes["quan_input"]}>
        <label htmlFor={props.input.id}></label>
        <input ref={ref} {...props.input} />
      </span>

      <span className={classes["next-picker-handler"]} onClick={props.onAdd}>
        <ion-icon name="add-outline" />
      </span>
    </Fragment>
  );
});

export default QuantityController;
