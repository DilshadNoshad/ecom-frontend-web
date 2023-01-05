import { Link, useNavigate } from "react-router-dom";
import Button from "../../UI/buttons/Button";
import classes from "./MyProfile.module.css";

import { executeWithTime, getDateFormate } from "../../../entities/GeneralFunc";

const MyProfile = () => {
  const navigate = useNavigate();

  const userData = JSON.parse(localStorage.getItem("user"));

  const navigateUrl = (e) => {
    e.preventDefault();
    navigate("/profile/edit");
  };

  executeWithTime(undefined, "-myprofile-");

  return (
    <div className={classes["my-profile"]}>
      <div className={classes["my-profile-bd"]}>
        <div className={classes["my-profile-item"]}>
          <h3 className={classes["my-profile-item-title"]}>Full name</h3>
          <div className={classes["my-profile-item-info"]}>
            {userData?.username}
          </div>
        </div>
        <div className={classes["my-profile-item"]}>
          <h3 className={classes["my-profile-item-title"]}>
            <span>Email Address</span> <span className="gray">|</span>&nbsp;
            <Link className={classes.link} to="#">
              Change
            </Link>
          </h3>
          <div className={classes["my-profile-item-info"]}>
            {userData?.email}
          </div>
        </div>
        <div className={classes["my-profile-item"]}>
          <h3 className={classes["my-profile-item-title"]}>
            Mobile <span className="gray">|</span>&nbsp;
            <Link className={classes.link} to="#">
              Change
            </Link>
          </h3>
          <div className={classes["my-profile-item-info"]}>
            {userData?.mobile}
          </div>
        </div>
        <div className={classes["my-profile-item"]}>
          <h3 className={classes["my-profile-item-title"]}>Birthday</h3>
          <div className={classes["my-profile-item-info"]}>
            <span className="gray">{getDateFormate(userData?.dob)}</span>
          </div>
        </div>
        <div className={classes["my-profile-item"]}>
          <h3 className={classes["my-profile-item-title"]}>Gender</h3>
          <div className={classes["my-profile-item-info"]}>
            <span className="gray">{userData?.gender}</span>
          </div>
        </div>
      </div>
      <div className="my-profile-ft">
        <Link className={classes.link} to="#">
          Subscribe to our Newsletter
        </Link>
        <Link onClick={navigateUrl} className={classes.link} to="#">
          Edit Profile
        </Link>
        <Button onClick={navigateUrl} className={classes["md-edit-button"]}>
          edit profile
        </Button>
        <Button
          // onClick={}
          className={classes["md-edit-button"]}
        >
          change password
        </Button>
      </div>
    </div>
  );
};

export default MyProfile;
