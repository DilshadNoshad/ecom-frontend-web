import React from "react";
import { Link } from "react-router-dom";
import classes from "./CatProdBrand.module.css";
const CatProdBrand = (props) => {
  return (
    <Link to="#">
      <div className={classes.imgwrapper}>
        <img src={props.brandImg} alt="" />
      </div>
    </Link>
  );
};

export default CatProdBrand;
