import React from "react";
import { Link } from "react-router-dom";
import styles from "./CategoriesItems.module.css";
const CategoriesItems = (props) => {
  const reCatTitle = props.title.replace(/-/g, " ");
  return (
    <Link to={`/category/${props.title}`} className={styles.category_item}>
      <div className={styles["category_img-container"]}>
        <img src={props.image} alt="" />
      </div>
      <div className={styles.category_detail}>
        <h3>{reCatTitle}</h3>
      </div>
    </Link>
  );
};

export default CategoriesItems;
