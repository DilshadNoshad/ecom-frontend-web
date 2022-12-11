import React from "react";
import Product from "../UI/product/Product";
import classes from "./FlashSaleBody.module.css";
const FlashSaleBody = (props) => {
  return (
    <div className={classes["row_cointainer"]}>
      {props.fetchData.map((product) => {
        return (
          <Product
            key={product.id}
            prodId={product.id}
            prodThumbnail={product.thumbnail}
            prodTitle={product.title}
            prodPrice={product.price}
            prodDiscountPct={product.discountPercentage}
            prodRating={product.rating}
          />
        );
      })}
    </div>
  );
};

export default FlashSaleBody;
