import React from "react";
import { Link } from "react-router-dom";
import useRating from "../../../hooks/use-rating";
import classes from "./RicProdRating.module.css";
const RicProdRating = (props) => {
  const { getStars: productStars } = useRating();
  return (
    <div className={classes["product-ratings"]}>
      <div className={classes["product-rating-layer"]}>
        {productStars(props.rate).map((value, i) => (
          <span className="rating" key={i}>
            <img
              className={classes["card-rating-star"]}
              src={`/rating/${value}.svg`}
              alt="rating stars"
              width="20"
              height="20"
            />
          </span>
        ))}
        &nbsp;
        <Link to="#" className={classes["product-rating-link"]}>
          {props.rate}&nbsp;Ratings
        </Link>
      </div>
    </div>
  );
};

export default RicProdRating;
