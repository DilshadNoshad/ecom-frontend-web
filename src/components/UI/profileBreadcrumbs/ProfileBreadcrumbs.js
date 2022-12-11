import React from "react";
import classes from "./ProfileBreadcrumbs.module.css";
const ProfileBreadcrumbs = (props) => {
  return (
    <div className={classes["breadcrumb_wrapper"]}>
      <h2 className="breadcrumb">{props.title}</h2>
      {props.button && (
        <div onClick={props.onClick} className="breadcrumb_btn">
          <span className={classes["breadcrumb_btn_inner"]}>
            <ion-icon data_nmi="add_ico" name={props.btnIcon}></ion-icon>
            {props.button}
          </span>
        </div>
      )}
    </div>
  );
};

export default ProfileBreadcrumbs;
