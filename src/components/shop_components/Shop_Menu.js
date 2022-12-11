import React from "react";
import { Link } from "react-router-dom";
import classes from "./Shop_Menu.module.css";
const Shop_Menu = () => {
  return (
    <div className={classes.menu_wrapper}>
      <section>
        <div className={classes["navbar-with-more-menu__items"]}>
          <Link
            className={`${classes["navbar-with-more-menu__item"]} ${classes.active}`}
            to="#"
          >
            <span>Home</span>
          </Link>
          <Link className={classes["navbar-with-more-menu__item"]} to="#">
            <span>All Products</span>
          </Link>
          <Link className={classes["navbar-with-more-menu__item"]} to="#">
            <span>Nov Payday Sale Seller's Picks</span>
          </Link>
          <Link className={classes["navbar-with-more-menu__item"]} to="#">
            <span>iPhone 14 Pro Family</span>
          </Link>
          <Link className={classes["navbar-with-more-menu__item"]} to="#">
            <span>iPhone 14 and iPhone 14 Plus</span>
          </Link>
          <Link className={classes["navbar-with-more-menu__item"]} to="#">
            <span>[NEW] AirPods Pro 2</span>
          </Link>
          <div
            className={`${classes["more-menu__item"]} ${classes["more-menu"]}`}
          >
            <div className="navbar-with-more-menu__more-label">More</div>
            <ion-icon name="caret-down-outline"></ion-icon>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop_Menu;
