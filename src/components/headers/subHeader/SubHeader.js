import React from "react";
import SubHeaderList from "./SubHeaderList";
import Mobile_logo from "../../../assets/images/muradiLogo_mob.png";
import classes from "./SubHeader.module.css";
import { Link } from "react-router-dom";
const SubHeader = (props) => {
  return (
    <div className={classes["sub_wrapper"]}>
      <div id={classes["sub_header"]} className={props.className}>
        <div className={classes["sub-header_row"]}>
          <a
            href="#sub_menu"
            className={classes["menu_toggle"]}
            id={classes["sub_menu_toggle"]}
            aria-label="open sub menu"
          >
            <span className={classes["sr-only"]}>open sub menu</span>
            <span className={classes["bars"]} aria-hidden="true" title="Menu" />
          </a>
          <Link className={classes["mob_logo"]} to={"/"}>
            <img src={Mobile_logo} alt="muradi mobile logo" />
          </Link>
          <Link
            to={"/cart"}
            className={classes["cart-m_icon"]}
            id={classes["cart-m_icon"]}
            aria-label="open cart"
          >
            <span className={classes["sr-only"]}>open cart</span>
            <span className={classes["cart"]} aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={classes["cart"]}
                viewBox="0 0 512 512"
              >
                <title>Cart</title>
                <circle
                  cx="176"
                  cy="416"
                  r="16"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                />
                <circle
                  cx="400"
                  cy="416"
                  r="16"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                  d="M48 80h64l48 272h256"
                />
                <path
                  d="M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                />
              </svg>
            </span>
          </Link>
        </div>
        <div
          id="sub_menu"
          className={classes["sub_menu"]}
          aria-label="sub menu"
        >
          <a
            href="#sub_menu_toggle"
            className={classes["menu_close"]}
            aria-label="close sub menu"
          >
            <span className={classes["sr-only"]}>close sub menu</span>
            <span
              className={classes["close"]}
              aria-hidden="true"
              title="Close"
            />
          </a>
          <ul>
            <SubHeaderList />
          </ul>
        </div>
        <a
          href="#sub_menu_toggle"
          className={classes["backdrop"]}
          hidden="hidden"
          tabIndex={-1}
        />
      </div>
    </div>
  );
};

export default SubHeader;
