import React from "react";
import Product from "../../../UI/product/Product";

import classes from "./Shop_Top_Product.module.css";
const Shop_Top_Product = (props) => {
  return (
    <div className={classes["row_cointainer"]}>
      {props.productItems.map((product) => {
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

export default Shop_Top_Product;
