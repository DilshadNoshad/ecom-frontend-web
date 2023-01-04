import React from "react";
import Product from "../UI/product/Product";
import classes from "./FlashSaleBody.module.css";
const FlashSaleBody = (props) => {
  return (
    <div className={classes["row_cointainer"]}>
      {props.fetchData.map((product) => {
        return (
          <Product
            key={product.productId}
            prodId={product.productId}
            prodThumbnail={product.thumbnail}
            prodTitle={product.title}
            prodPrice={product.price}
            prodOldPrice={product.old_price}
            prodDiscountPct={product.discAmntValPerc}
            prodRating={product.productRating}
          />
        );
      })}
    </div>
  );
};

export default FlashSaleBody;
