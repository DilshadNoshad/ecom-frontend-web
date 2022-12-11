import React from "react";
import RicProdSellerDets from "./RicProdSellerDets";
import RicProdDlvrDets from "./RicProdDlvrDets";
import RicProdDlvrLoc from "./RicProdDlvrLoc";
import RicProdRoiWty from "./RicProdRoiWty";
import classes from "./RicProdDlvrDetsWrap.module.css";
const RicProdDlvrDetsWrap = () => {
  return (
    <div className={classes["product_delivery"]}>
      <div className={classes["product_options"]}>
        <RicProdDlvrLoc />
        <RicProdDlvrDets />
        <RicProdRoiWty />
      </div>
      <RicProdSellerDets />
    </div>
  );
};

export default RicProdDlvrDetsWrap;
