import React from "react";
import classes from "./Stepper.module.css";
const Stepper = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.stepper}>
        <div className={classes.stepper__step}>
          <div
            className={`${classes["stepper__step-icon"]} ${classes["stepper__step-icon--finish"]}`}
          >
            <ion-icon name="reader"></ion-icon>
          </div>
          <div className={classes["stepper__step-text"]}>order placed</div>
          <div className={classes["stepper__step-date"]}>05-11-2022 11:10</div>
        </div>
        <div className={classes.stepper__step}>
          <div
            className={`${classes["stepper__step-icon"]} ${classes["stepper__step-icon--finish"]}`}
          >
            <ion-icon name="cash"></ion-icon>
          </div>
          <div className={classes["stepper__step-text"]}>
            order paid (RM76.70)
          </div>
          <div className={classes["stepper__step-date"]}>05-11-2022 11:11</div>
        </div>
        <div className={classes.stepper__step}>
          <div
            className={`${classes["stepper__step-icon"]} ${classes["stepper__step-icon--finish"]}`}
          >
            <ion-icon name="log-in"></ion-icon>
          </div>
          <div className={classes["stepper__step-text"]}>order shipped out</div>
          <div className={classes["stepper__step-date"]}>07-11-2022 14:04</div>
        </div>
        <div className={classes.stepper__step}>
          <div
            className={`${classes["stepper__step-icon"]} ${classes["stepper__step-icon--finish"]}`}
          >
            <ion-icon name="archive"></ion-icon>
          </div>
          <div className={classes["stepper__step-text"]}>order received</div>
          <div className={classes["stepper__step-date"]}>09-11-2022 10:58</div>
        </div>
        <div className={classes.stepper__step}>
          <div
            className={`${classes["stepper__step-icon"]} ${classes["stepper__step-icon--finish"]}`}
          >
            <ion-icon name="star"></ion-icon>
          </div>
          <div className={classes["stepper__step-text"]}>order rated</div>
          <div className={classes["stepper__step-date"]}>09-11-2022 11:00</div>
        </div>
        <div className={classes.stepper__line}>
          <div className={classes["stepper__line-background"]}></div>
          <div
            className={classes["stepper__line-foreground"]}
            style={{ width: "calc((100% - 140px) * 1)" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
