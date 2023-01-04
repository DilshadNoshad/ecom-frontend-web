import React from "react";
import classes from "./ProductDetails.module.css";
import ProductRating from "./ProductRating";
import { Currency } from "../../../config";
const ProductDetails = (props) => {
  const discountPercentage = ` -${props.prodDiscountPct}% `;
  return (
    <figcaption className={classes["card-details"]}>
      <div className={classes["card-title"]}>
        <span className={classes.title}>{props.prodTitle}</span>
      </div>
      <div className="hp-mod-price">
        <div className={classes["hp-price-first-line"]}>
          <span className="currency">{Currency}</span>
          <span className="price">{props.prodPrice}</span>
        </div>
        <div className="card-price-second-line">
          <span className={classes["card-price-text"]}>
            <span className="currency">{Currency}</span>
            <span className="price">{props.prodOldPrice}</span>
          </span>
          <span className={classes["card-discount"]}>{discountPercentage}</span>
        </div>
      </div>
      <div className={classes["card-footer"]}>
        <ProductRating rate={props.prodRating} />
        {/* <div className="card-ratings-comment">(896)</div> */}
        {/* <div className="card-nation">China</div> */}
      </div>
    </figcaption>
  );
};

export default ProductDetails;
