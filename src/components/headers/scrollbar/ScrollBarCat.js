import React, { Fragment } from "react";
import CatDropList from "../../categoriesList/CatDropList";
import classes from "./ScrollBarCat.module.css";
const ScrollBarCat = () => {
  return (
    <Fragment>
      <li className={classes["scroll_menus-category"]}>
        Categories <CatDropList />
      </li>
    </Fragment>
  );
};

export default ScrollBarCat;
