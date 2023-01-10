import React, { Fragment } from "react";
import EditProfile from "../../components/profile/pageContent/EditProfile";
import ProfileBreadcrumbs from "../../components/UI/profileBreadcrumbs/ProfileBreadcrumbs";

const MyProfileEditPage = () => {
  return (
    <Fragment>
      <ProfileBreadcrumbs title="Edit Profile" />
      <EditProfile />
    </Fragment>
  );
};

export default MyProfileEditPage;
