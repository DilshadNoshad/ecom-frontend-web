import React from "react";
import Product from "../../UI/product/Product";
import classes from "./RichProdSP.module.css";
const RichProdSP = (props) => {
  return (
    <div className={classes["row_cointainer"]}>
      {props.productItems
        .sort((a, b) => 0.5 - Math.random())
        .slice(props.to, props.from)
        .map((product) => {
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

export default RichProdSP;
