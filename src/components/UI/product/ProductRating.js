import React from "react";
import useRating from "../../../hooks/use-rating";
import classes from "./ProductRating.module.css";
const ProductRating = (props) => {
  const { getStars: productStars } = useRating();

  return (
    <div className={classes["card-ratings"]}>
      <div className="card-rating-layer">
        {productStars(props.rate).map((value, i) => (
          <span className="rating" key={i}>
            <img
              className={classes["card-rating-star"]}
              src={`/rating/${value}.svg`}
              alt="rating stars"
              width="12"
              height="12"
            />
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProductRating;
