import React from "react";
import CatProdBrand from "./CatProdBrand";
import classes from "./CatProdBrands.module.css";
const CatProdBrands = (props) => {
  return (
    <div className={classes["categories_brand"]}>
      {props.data.map((brand) => (
        <CatProdBrand key={brand.id} brandImg={brand.catBdImg} />
      ))}
    </div>
  );
};

export default CatProdBrands;
