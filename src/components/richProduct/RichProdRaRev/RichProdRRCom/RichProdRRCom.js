import React from "react";
import classes from "./RichProdRRCom.module.css";
const RichProdRRCom = () => {
  return (
    <div className={classes["mod_empty_desc"]}>
      <div className={classes["mod_empty_desc_img"]}>
        {/* <img src="img/emptyreview.png" alt="" /> */}
        <lord-icon
          src="https://cdn.lordicon.com/pithnlch.json"
          trigger="hover"
          colors="primary:#606060,secondary:#606060"
          delay="2000"
          data_emoji="emoji_happy"
        ></lord-icon>
        <lord-icon
          src="https://cdn.lordicon.com/lcwlrxqh.json"
          trigger="hover"
          colors="primary:#606060,secondary:#606060"
          delay="2000"
          data_emoji="emoji_sad"
        ></lord-icon>
      </div>
      <div className={classes["mod_empty_des_text"]}>
        <p className={classes["empty-text"]}>This product has no reviews.</p>
        <p className={classes["empty-text"]}>
          Let others know what do you think and be the first to write a review.
        </p>
      </div>
    </div>
  );
};

export default RichProdRRCom;
