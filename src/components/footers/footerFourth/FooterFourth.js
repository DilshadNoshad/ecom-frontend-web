import React from "react";
import classes from "./FooterFourth.module.css";
import { Link } from "react-router-dom";
const FooterFour = () => {
  return (
    <div className={classes["footer_four"]}>
      <section>
        <div className={classes["footer_container"]}>
          <div className={classes["footer_inner"]}>
            <h3>Muradi Pakistan</h3>
            <Link
              to={"#"}
              className={`${classes["foot-ico"]} ${classes["country_one"]}`}
            />
          </div>
          <div className={classes["footer_inner"]}>
            <h3>follow us</h3>
            <Link
              to={"#"}
              className={`${classes["foot-ico"]} ${classes["social_one"]}`}
            />
            <Link
              to={"#"}
              className={`${classes["foot-ico"]} ${classes["social_two"]}`}
            />
            <Link
              to={"#"}
              className={`${classes["foot-ico"]} ${classes["social_three"]}`}
            />
            <Link
              to={"#"}
              className={`${classes["foot-ico"]} ${classes["social_four"]}`}
            />
          </div>
          <div
            className={`${classes["footer_inner"]} ${classes["copy-right_main"]}`}
          >
            <div className={classes["foot_copy_right"]}>© Muradi 2021</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FooterFour;
