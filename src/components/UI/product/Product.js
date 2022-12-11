import React from "react";
import { Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import classes from "./Product.module.css";

const Product = (props) => {
  return (
    <Link className={classes["product_card"]} to={`/product/${props.prodId}`}>
      <figure>
        <img
          className={classes["product_card-images"]}
          src={props.prodThumbnail}
          alt=""
        />
        <ProductDetails
          prodTitle={props.prodTitle}
          prodPrice={props.prodPrice}
          prodDiscountPct={props.prodDiscountPct}
          prodRating={props.prodRating}
        />
      </figure>
    </Link>
  );
};

export default Product;
