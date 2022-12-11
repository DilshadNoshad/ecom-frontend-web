import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./MainHeaderList.module.css";
import MainLogo from "../../../assets/images/muradiLogo_removebg.png";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import { totalCartItems } from "../../cart/cart-totaItems";
import CartWidget from "../../cartWidget/CartWidget";

const MainHeaderList = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const cartTotalItems = totalCartItems(cartItems);

  return (
    <Fragment>
      <li>
        <Link className={classes["main-logo"]} to="/">
          <img src={MainLogo} alt="Muradi Logo" />
        </Link>
      </li>
      <li>
        <SearchBar />
      </li>
      <div className="cart-wd-wrap">
        <li className="cart_btn-wrap">
          <Link to={"/cart"} className={classes["cart_btn"]}>
            <ion-icon name="cart-outline" />
            <span className={classes["cart-num"]}>{cartTotalItems}</span>
          </Link>
        </li>
        <CartWidget />
      </div>
      <li>
        <Link to={"#"} className={classes["our-wallet"]}>
          <img
            src="https://icms-image.slatic.net/images/ims-web/68f2a593-cfe9-432a-ac70-45f366bcb123.jpg"
            alt=""
          />
        </Link>
      </li>
    </Fragment>
  );
};

export default MainHeaderList;
