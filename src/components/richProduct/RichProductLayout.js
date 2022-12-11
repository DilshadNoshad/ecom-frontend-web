import React from "react";
import classes from "./RichProductLayout.module.css";
const RichProductLayout = (props) => {
  return (
    <div className={classes["product_decs"]}>
      <div className={classes["module-pd_desc"]}>
        <h2
          className={`${classes["pd-mod-title"]} ${classes["pd-mod-title_overflow"]}`}
        >
          {props.title}
        </h2>
        {props.rightContent}
      </div>
      <aside className={classes["module_ads"]}>
        <h2
          className={`${classes["pd-sp-title"]} ${classes["pd-mod-title_overflow"]}`}
        >
          Sponsored Products
        </h2>
        {props.leftContent}
      </aside>
    </div>
  );
};

export default RichProductLayout;
