import React from "react";
import CategoriesItems from "./CategoriesItems";
import styles from "./CategoriesList.module.css";
const CategoriesList = (props) => {
  return (
    <div
      className={`${styles.categories_container} ${styles.categories_scroller} ${styles["snap_scroll-inline"]}`}
    >
      {props.categoriesItems.Categories.sort((a, b) => 0.5 - Math.random()).map(
        (category) => {
          return (
            <CategoriesItems
              key={category.id}
              title={category.catName}
              image={category.catImg}
            />
          );
        }
      )}
    </div>
  );
};

export default CategoriesList;
