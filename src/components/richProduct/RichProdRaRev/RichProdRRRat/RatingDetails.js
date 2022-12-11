import React from "react";
import classes from "./RatingDetails.module.css";
import completeStar from "../../../../assets/prod-rating/100.png";
import emptyStar from "../../../../assets/prod-rating/0.png";
const RatingDetails = () => {
  return (
    <div className={classes["rating_details"]}>
      <ul>
        <li>
          <div
            className={`${classes["progress-star"]} ${classes["rating_details_align"]}`}
          >
            <span>
              <img
                className={classes.star}
                src={completeStar}
                alt="complete star"
              />
            </span>
            <span>
              <img
                className={classes.star}
                src={completeStar}
                alt="complete star"
              />
            </span>
            <span>
              <img
                className={classes.star}
                src={completeStar}
                alt="complete star"
              />
            </span>
            <span>
              <img
                className={classes.star}
                src={completeStar}
                alt="complete star"
              />
            </span>
            <span>
              <img
                className={classes.star}
                src={completeStar}
                alt="complete star"
              />
            </span>
          </div>
          <span
            className={`${classes["progress-wrap"]} ${classes["rating_details_align"]}`}
          >
            <div className={classes["pd-review-progress"]}>
              <div className={`${classes.bar} ${classes.blank}`} />
              <div
                className={`${classes.bar} ${classes.fill}`}
                style={{ width: "70%" }}
              />
            </div>
          </span>
          <span
            className={`${classes.percent} ${classes["rating_details_align"]}`}
          >
            181
          </span>
        </li>
        <li>
          <div
            className={`${classes["progress-star"]} ${classes["rating_details_align"]}`}
          >
            <span>
              <img
                className={classes.star}
                src={completeStar}
                alt="complete star"
              />
            </span>
            <span>
              <img
                className={classes.star}
                src={completeStar}
                alt="complete star"
              />
            </span>
            <span>
              <img
                className={classes.star}
                src={completeStar}
                alt="complete star"
              />
            </span>
            <span>
              <img
                className={classes.star}
                src={completeStar}
                alt="complete star"
              />
            </span>
            <span>
              <img className={classes.star} src={emptyStar} alt="empty star" />
            </span>
          </div>
          <span
            className={`${classes["progress-wrap"]} ${classes["rating_details_align"]}`}
          >
            <div className={classes["pd-review-progress"]}>
              <div className={`${classes.bar} ${classes.blank}`} />
              <div
                className={`${classes.bar} ${classes.fill}`}
                style={{ width: "10%" }}
              />
            </div>
          </span>
          <span
            className={`${classes.percent} ${classes["rating_details_align"]}`}
          >
            6
          </span>
        </li>
        <li>
          <div
            className={`${classes["progress-star"]} ${classes["rating_details_align"]}`}
          >
            <span>
              <img
                className={classes.star}
                src={completeStar}
                alt="complete star"
              />
            </span>
            <span>
              <img
                className={classes.star}
                src={completeStar}
                alt="complete star"
              />
            </span>
            <span>
              <img
                className={classes.star}
                src={completeStar}
                alt="complete star"
              />
            </span>
            <span>
              <img className={classes.star} src={emptyStar} alt="empty star" />
            </span>
            <span>
              <img className={classes.star} src={emptyStar} alt="empty star" />
            </span>
          </div>
          <span
            className={`${classes["progress-wrap"]} ${classes["rating_details_align"]}`}
          >
            <div className={classes["pd-review-progress"]}>
              <div className={`${classes.bar} ${classes.blank}`} />
              <div
                className={`${classes.bar} ${classes.fill}`}
                style={{ width: "15%" }}
              />
            </div>
          </span>
          <span
            className={`${classes.percent} ${classes["rating_details_align"]}`}
          >
            9
          </span>
        </li>
        <li>
          <div
            className={`${classes["progress-star"]} ${classes["rating_details_align"]}`}
          >
            <span>
              <img
                className={classes.star}
                src={completeStar}
                alt="complete star"
              />
            </span>
            <span>
              <img
                className={classes.star}
                src={completeStar}
                alt="complete star"
              />
            </span>

            <span>
              <img className={classes.star} src={emptyStar} alt="empty star" />
            </span>
            <span>
              <img className={classes.star} src={emptyStar} alt="empty star" />
            </span>
            <span>
              <img className={classes.star} src={emptyStar} alt="empty star" />
            </span>
          </div>
          <span
            className={`${classes["progress-wrap"]} ${classes["rating_details_align"]}`}
          >
            <div className={classes["pd-review-progress"]}>
              <div className={`${classes.bar} ${classes.blank}`} />
              <div
                className={`${classes.bar} ${classes.fill}`}
                style={{ width: "5%" }}
              />
            </div>
          </span>
          <span
            className={`${classes.percent} ${classes["rating_details_align"]}`}
          >
            4
          </span>
        </li>
        <li>
          <div
            className={`${classes["progress-star"]} ${classes["rating_details_align"]}`}
          >
            <span>
              <img
                className={classes.star}
                src={completeStar}
                alt="complete star"
              />
            </span>
            <span>
              <img className={classes.star} src={emptyStar} alt="empty star" />
            </span>
            <span>
              <img className={classes.star} src={emptyStar} alt="empty star" />
            </span>
            <span>
              <img className={classes.star} src={emptyStar} alt="empty star" />
            </span>
            <span>
              <img className={classes.star} src={emptyStar} alt="empty star" />
            </span>
          </div>
          <span
            className={`${classes["progress-wrap"]} ${classes["rating_details_align"]}`}
          >
            <div className={classes["pd-review-progress"]}>
              <div className={`${classes.bar} ${classes.blank}`} />
              <div
                className={`${classes.bar} ${classes.fill}`}
                style={{ width: "0%" }}
              />
            </div>
          </span>
          <span
            className={`${classes.percent} ${classes["rating_details_align"]}`}
          >
            0
          </span>
        </li>
      </ul>
    </div>
  );
};

export default RatingDetails;
