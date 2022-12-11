import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import RicProdRating from "./RicProdRating";
import classes from "./RicProdHead.module.css";
const RicProdHead = (props) => {
  return (
    <Fragment>
      <div className={classes["product_title"]}>
        <h1>{props.productTitle}</h1>
      </div>
      <div className={classes["product-detail-action"]}>
        <RicProdRating rate={props.productRating} />

        <span className={classes["product-icons"]}>
          <ion-icon name="share-social-outline" />
        </span>
        <span className={classes["product-icons"]}>
          <ion-icon name="heart-outline" />
        </span>
      </div>
      <div className={classes["product-brand"]}>
        <span className={classes["product-brand__name"]}>Brand</span>
        <Link className={classes["product-brand_brand-link"]} to="#">
          {props.productBrand}
        </Link>
        <div className={classes["product-brand_divider"]} />
        <Link to="#" className={classes["product-brand_suggestion-link"]}>
          More Nursery from No Brand
        </Link>
        <span className={classes["product-brand_dev-label"]}>
          Free Shipping
        </span>
      </div>
    </Fragment>
  );
};

export default RicProdHead;
