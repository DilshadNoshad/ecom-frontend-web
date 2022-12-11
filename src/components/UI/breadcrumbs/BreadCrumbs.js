import React from "react";
import { Link } from "react-router-dom";
import classes from "./BreadCrumbs.module.css";
const BreadCrumbs = (props) => {
  const { productCat: category, productTitle: title } = props;

  return (
    <div id="pd_breadcrumb" className={classes["breadcrumb_list"]}>
      <div className={classes["breadcrumb_wrapper"]}>
        <ul className={classes["breadcrumb"]}>
          <li className={classes["breadcrumb_item"]}>
            <span className={classes["breadcrumb_item_text"]}>
              <Link
                to={`/category/${category}`}
                title={category}
                className={classes["breadcrumb_item_anchor"]}
              >
                <span>{category}</span>
              </Link>
            </span>
            <ion-icon data_nmi="arrow_ico" name="chevron-forward-outline" />
          </li>
          <li className={classes["breadcrumb_item"]}>
            <span className={classes["breadcrumb_item_text"]}>
              <span className={classes["breadcrumb_item_last"]}>{title}</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BreadCrumbs;
