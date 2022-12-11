import React from "react";
import MainHeaderList from "./MainHeaderList";
import classes from "./MainHeader.module.css";
const MainHeader = () => {
  return (
    <div className={classes["main_wrapper"]}>
      <div className={classes["main_header"]}>
        <nav>
          <ul>
            <MainHeaderList />
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MainHeader;
