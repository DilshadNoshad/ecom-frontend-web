import React from "react";
import classes from "./Shop_Sort_Products.module.css";
const Shop_Sort_Products = () => {
  return (
    <div className={classes["shop-sort-bar"]}>
      <span className={classes["shop-sort-bar__label"]}>Sort by</span>
      <div className={classes["shop-sort-bar__options"]}>
        <div className={classes["shop-sort-bar__options__option"]}>Popular</div>
        <div className={classes["shop-sort-bar__options__option"]}>Latest</div>
        <div className={classes["shop-sort-bar__options__option"]}>
          Top Sales
        </div>
      </div>
      <div className={classes["shop-sort-bar__controller"]}>
        <div className={classes["shop-sort-bar__controller__state"]}>
          <span className={classes["shop-sort-bar__controller__current"]}>
            1
          </span>
          /
          <span className={classes["shop-sort-bar__controller__total"]}>5</span>
        </div>
        <button
          type="button"
          className={`${classes["shop-sort-bar__controller-btn"]} ${classes["shop-sort-bar__controller__prev-btn"]}`}
        >
          <ion-icon name="chevron-back-outline"></ion-icon>
        </button>
        <button
          type="button"
          className={`${classes["shop-sort-bar__controller-btn"]} ${classes["shop-sort-bar__controller__next-btn"]}`}
        >
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
};

export default Shop_Sort_Products;
