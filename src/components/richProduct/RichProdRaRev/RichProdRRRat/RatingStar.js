import React from "react";
import useRating from "../../../../hooks/use-rating";

const RatingStar = (props) => {
  const { getStars: productStars } = useRating();
  return (
    <div className="average">
      <div className="container-star ">
        {productStars(props.rate).map((value, i) => (
          <span className="rating" key={i}>
            <img
              className="star"
              src={`/prod-rating/${value}.png`}
              alt="rating stars"
              width="33.25px"
              height="33.25px"
            />
          </span>
        ))}
      </div>
    </div>
  );
};

export default RatingStar;
