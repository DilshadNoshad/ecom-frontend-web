import React from "react";
import OutlineButton from "../UI/buttons/OutlineButton";
import classes from "./FlashSaleHeader.module.css";
const FlashSaleHeader = () => {
  return (
    <ul className={classes["flash_sale-header"]}>
      <li>
        <div className={classes["flash_sale-title"]}>On Sale Now</div>
      </li>
      <li>
        <div className={classes["flash_sale-timer"]}>Ending In:</div>
      </li>
      <li>
        <p>counter</p>
      </li>
      <li>
        <OutlineButton className={classes["flash_sale-button"]}>
          Shop All Products
        </OutlineButton>
      </li>
    </ul>
  );
};

export default FlashSaleHeader;
