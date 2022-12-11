import React from "react";
import { Fragment } from "react";
import classes from "./MostPopularItems.module.css";
const MostPopularItems = (props) => {
  return (
    <Fragment>
      {props.fetchData.map((product) => {
        return (
          <article className={classes["sub_box"]} key={product.id}>
            <div className={classes["sub_box-img"]}>
              <img src={product.thumbnail} alt="" />
            </div>
            <div className={classes["card-most-popular-details"]}>
              <div className={classes["card-most-popular-h1"]}>
                {product.title}
              </div>
              <p className={classes["card-most-popular-p"]}>17,203 products</p>
            </div>
          </article>
        );
      })}
    </Fragment>
  );
};

export default MostPopularItems;
