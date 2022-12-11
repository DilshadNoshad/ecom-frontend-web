import React from "react";
import { Fragment } from "react";
import MyOrders from "../../components/profile/pageContent/MyOrders";
import ProfileBreadcrumbs from "../../components/UI/profileBreadcrumbs/ProfileBreadcrumbs";

const MyOrderPage = () => {
  return (
    <Fragment>
      <ProfileBreadcrumbs title="My Orders" />
      <MyOrders />
    </Fragment>
  );
};

export default MyOrderPage;
