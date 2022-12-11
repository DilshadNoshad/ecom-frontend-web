import React from "react";
import classes from "./CatProdTopbar.module.css";
const CatProdTopbar = (props) => {
  return (
    <div className={classes.prodfilbar}>
      <div className={classes.filbardetail}>
        <div className={classes["fil-h-info"]}>
          <h2>{props.catname}</h2>
          <span>{props.catlength}</span>
          <span> items found in&nbsp;{props.catname}</span>
          <span></span>
        </div>
      </div>
      <div className="product-filter-menu">
        <div className={classes["fil-sort"]}>Sort By:</div>
      </div>
    </div>
  );
};

export default CatProdTopbar;
