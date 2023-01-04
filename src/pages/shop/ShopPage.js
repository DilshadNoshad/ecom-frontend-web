import React, { Fragment } from "react";
import Shope_Info from "../../components/shop_components/Shope_Info";
import Shop_Content from "../../components/shop_components/Shop_Content";
import Shop_Menu from "../../components/shop_components/Shop_Menu";
import Shop_Products from "../../components/shop_components/Shop_Products";
import Shop_Top_Products from "../../components/shop_components/shop_products/shop_top_products/Shop_Top_Products";

const ShopPage = () => {
  return (
    <Fragment>
      <Shope_Info />
      <Shop_Menu />
      <Shop_Content />
      <Shop_Top_Products />
      <Shop_Products />
    </Fragment>
  );
};

export default ShopPage;
