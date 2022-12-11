import React from "react";
import { Link } from "react-router-dom";
import classes from "./ScrollBarMallTabs.module.css";
const ScrollBarMallTabs = (props) => {
  return (
    <li>
      <Link to={"#"}>
        <div className={classes["scroll_tab-image"]}>
          <img src={props.tabImg} alt={props.tabAlt} />
        </div>
        {props.tabName}
      </Link>
    </li>
  );
};

export default ScrollBarMallTabs;
