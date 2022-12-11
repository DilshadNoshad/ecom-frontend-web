import React from "react";
import { Fragment } from "react";
import ManageAccount from "../../components/profile/pageContent/ManageAccount";
import ProfileBreadcrumbs from "../../components/UI/profileBreadcrumbs/ProfileBreadcrumbs";

const ManageAccountPage = () => {
  return (
    <Fragment>
      <ProfileBreadcrumbs title="Manage My Account" />
      <ManageAccount />
    </Fragment>
  );
};

export default ManageAccountPage;
