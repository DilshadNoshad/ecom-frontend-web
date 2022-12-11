import React from "react";
import classes from "./CategoryProduct.module.css";
import Product from "../../UI/product/Product";
const CategoryProduct = (props) => {
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

export default CategoryProduct;
