import React from "react";
import CatProdFiltersTabOp from "./CatProdFiltersTabOp";
import classes from "./CatProdFiltersTab.module.css";
const CatProdFiltersTab = () => {
  return (
    <div className={classes.filtab}>
      <div className={classes["filtab-h"]}>Brand</div>
      <div className={classes["filtab-ops"]}>
        <CatProdFiltersTabOp />
      </div>
    </div>
  );
};

export default CatProdFiltersTab;
