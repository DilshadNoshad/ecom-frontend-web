import React from "react";
import { Outlet } from "react-router-dom";
import Shop_Products_Menu from "./shop_products/Shop_Products_Menu";
import Shop_Sort_Products from "./shop_products/Shop_Sort_Products";
import classes from "./Shop_Products.module.css";

const Shop_Products = () => {
  return (
    <section>
      <div className={classes["shop-products"]}>
        <Shop_Products_Menu />
        <div className={classes["shop-products-list"]}>
          <Shop_Sort_Products />
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Shop_Products;
