import React, { Fragment } from "react";
import MyProfile from "../../components/profile/pageContent/MyProfile";
import ProfileBreadcrumbs from "../../components/UI/profileBreadcrumbs/ProfileBreadcrumbs";

const MyProfilePage = () => {
  return (
    <Fragment>
      <ProfileBreadcrumbs title="Profile" />
      <MyProfile />
    </Fragment>
  );
};

export default MyProfilePage;
