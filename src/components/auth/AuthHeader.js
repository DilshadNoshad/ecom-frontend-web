import React from "react";
import className from "./AuthHeader.module.css";
import { Link } from "react-router-dom";
const AuthHeader = (props) => {
  return (
    <div className={className["auth_Title"]}>
      <h1>{props.title}</h1>
      <div className={className["auth_Others"]}>
        <span>
          {props.commands} <Link to={`${props.path}`}>{props.link}</Link> here.
        </span>
      </div>
    </div>
  );
};

export default AuthHeader;
