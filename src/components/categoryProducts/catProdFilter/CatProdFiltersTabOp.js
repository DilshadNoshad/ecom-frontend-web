import React, { Fragment } from "react";
import classes from "./CatProdFiltersTabOp.module.css";
const CatProdFiltersTabOp = () => {
  return (
    <Fragment>
      <div className="filter-tab-op">
        <label>
          <div className={classes["check-wrap"]}>
            <span className={classes["tab-checkbox"]}>
              <input type="checkbox" />
            </span>
            <span>BeautyBigbang</span>
          </div>
        </label>
      </div>
      <div className={classes["filtab-btn"]}>VIEW MORE</div>
    </Fragment>
  );
};

export default CatProdFiltersTabOp;
