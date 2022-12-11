import React from "react";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import NoItems from "../../components/UI/noItems/NoItems";
import ProfileBreadcrumbs from "../../components/UI/profileBreadcrumbs/ProfileBreadcrumbs";

const MyReturnsPage = () => {
  const navigate = useNavigate();

  const shoppingBtnHandler = () => {
    navigate("/");
  };
  return (
    <Fragment>
      <ProfileBreadcrumbs title="My Returns" />
      <NoItems
        btnText="CONTINUE SHOPPING"
        onClick={shoppingBtnHandler}
        noItemText="There are no returns yet."
      />
    </Fragment>
  );
};

export default MyReturnsPage;
