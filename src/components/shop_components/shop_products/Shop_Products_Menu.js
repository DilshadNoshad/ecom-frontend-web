import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Shop_Products_Menu.module.css";

const Shop_Products_Menu = () => {
  return (
    <div className={classes["shop-products-menu"]}>
      <div className={classes["shop-cat-menu"]}>
        <ion-icon data_nmi="menu_ico" name="grid-outline"></ion-icon>
        <span>Category</span>
      </div>
      <ul className={classes["shop-cat-list"]}>
        <li className={classes["shop-cat-item"]}>
          <NavLink
            to="/shop-collection/1"
            end
            className={({ isActive }) => {
              return isActive ? classes["shop-cat-item-active"] : classes.link;
            }}
          >
            All Products
          </NavLink>
        </li>
        <li className={classes["shop-cat-item"]}>
          <NavLink
            className={({ isActive }) => {
              return isActive ? classes["shop-cat-item-active"] : classes.link;
            }}
            // className={classes.link}
            to="/shop-collection/1/category/laptops"
            // end
          >
            laptops
          </NavLink>
        </li>
        <li className={classes["shop-cat-item"]}>
          <NavLink
            className={({ isActive }) => {
              return isActive ? classes["shop-cat-item-active"] : classes.link;
            }}
            to="/shop-collection/1/category/smartphones"
          >
            iPhone
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Shop_Products_Menu;
