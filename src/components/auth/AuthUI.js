import React from "react";
import AuthHeader from "./AuthHeader";
import classes from "./AuthUI.module.css";
const AuthUI = (props) => {
  return (
    <div className={classes["container_auth"]}>
      <AuthHeader
        title={props.title}
        commands={props.commands}
        path={props.path}
        link={props.link}
      />
      <form onSubmit={props.onSubmitHandler}>{props.children}</form>
    </div>
  );
};

export default AuthUI;
