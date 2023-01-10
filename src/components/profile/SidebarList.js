import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./SidebarList.module.css";
const SidebarList = () => {
  return (
    <ul className={classes["nav-container"]}>
      <li className={classes["item"]}>
        <NavLink
          className={({ isActive }) => {
            return isActive ? classes.active : " ";
          }}
          to="/profile"
          end
        >
          <span>Manage My Account</span>
        </NavLink>
        <ul className={classes["item-container"]}>
          <li className={classes["sub"]}>
            <NavLink
              className={({ isActive }) => {
                return isActive ? classes.active : " ";
              }}
              to="/profile/userinfo"
            >
              My Profile
            </NavLink>
          </li>
          <li className={classes["sub"]}>
            <NavLink
              className={({ isActive }) => {
                return isActive ? classes.active : " ";
              }}
              to="/profile/address"
            >
              Address Book
            </NavLink>
          </li>
          <li className={classes["sub"]}>
            <NavLink to="#">My Payment Options</NavLink>
          </li>

          <li className={classes["sub"]}>
            <NavLink to="#">Vouchers</NavLink>
          </li>
        </ul>
      </li>

      <li className={classes["item"]} id="My-Orders">
        <NavLink
          className={({ isActive }) => {
            return isActive ? classes.active : " ";
          }}
          to="/profile/my_orders"
        >
          <span>My Orders</span>
        </NavLink>
        <ul className={classes["item-container"]}>
          <li className={classes["sub"]}>
            <NavLink
              className={({ isActive }) => {
                return isActive ? classes.active : " ";
              }}
              to="/profile/order_returns"
            >
              My Returns
            </NavLink>
          </li>
          <li className={classes["sub"]}>
            <NavLink
              className={({ isActive }) => {
                return isActive ? classes.active : " ";
              }}
              to="/profile/order_cancellations"
            >
              My Cancellations
            </NavLink>
          </li>
        </ul>
      </li>

      <li className={classes["item"]} id="My-Reviews">
        <NavLink to="#">
          <span>My Reviews</span>
        </NavLink>
        <ul className={classes["item-container"]} />
      </li>

      <li className={classes["item"]} id="My-Wishlists">
        <NavLink to="#">
          <span>My Wishlist &amp; Followed Stores</span>
        </NavLink>
        <ul className={classes["item-container"]} />
      </li>

      <li className={classes["item"]} id="Sell-On-Lazada">
        <NavLink to="#">
          <span>Sell On Muradi</span>
        </NavLink>
        <ul className={classes["item-container"]} />
      </li>
    </ul>
  );
};

export default SidebarList;
