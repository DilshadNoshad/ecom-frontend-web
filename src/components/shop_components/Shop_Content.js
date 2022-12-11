import React from "react";
import { Fragment } from "react";
import FlashSale from "../flashSale/FlashSale";
import Shop_BrandingImg from "./Shop_BrandingImg";
import classes from "./Shop_Content.module.css";
import Shop_HeroImg from "./Shop_HeroImg";
import Shop_Vouchers from "./Shop_Vouchers";
const Shop_Content = () => {
  return (
    <Fragment>
      <section>
        <div className={classes["shop-decoration"]}>
          <Shop_Vouchers />
          <Shop_HeroImg />
          <Shop_BrandingImg image="https://cf.shopee.com.my/file/978e8178954ea197f0a3feb52cd5fa71" />
          <Shop_BrandingImg image="https://cf.shopee.com.my/file/c0f6a35c844d81e03d20ff44a588cb9e" />
          <Shop_BrandingImg image="https://cf.shopee.com.my/file/9e283f9ba54fcc07f81b2a566dce6790" />
          <Shop_BrandingImg image="https://cf.shopee.com.my/file/fa953047d648a991257e6706ded02344" />
        </div>
        <div className={classes["shop-all-products"]}></div>
      </section>
      <FlashSale />
    </Fragment>
  );
};

export default Shop_Content;
