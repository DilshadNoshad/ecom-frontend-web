import React, { Fragment } from "react";
import Shope_Info from "../../components/shop_components/Shope_Info";
import Shop_Content from "../../components/shop_components/Shop_Content";
import Shop_Menu from "../../components/shop_components/Shop_Menu";

const MyShop = () => {
  return (
    <Fragment>
      <Shope_Info />
      <Shop_Menu />
      <Shop_Content />
    </Fragment>
  );
};

export default MyShop;
