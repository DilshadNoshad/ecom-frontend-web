import React, { Fragment, useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../../Store/auth-context";
import { uiActions } from "../../../Store/ui-slice";
import TooltipMenu from "../../UI/tooltipmenu/TooltipMenu";
import classes from "./SubHeaderList.module.css";
const SubHeaderList = () => {
  const [isaccShow, setAccIsShow] = useState();
  const [istrackShow, setTrackIsShow] = useState();
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const isLoggedIn = authCtx.isLoggedIn;
  //const loggedInUsername = (authCtx.userData?.username === 'undefined')?'':authCtx.userData?.username;
  const loggedInUsername = authCtx.userData ? authCtx.userData.username : "";
  // console.table(authCtx.userData);
  const dispatch = useDispatch();
  // const isLoggedIn = useSelector((state) => state.auth.isloggedIn);
  // const isToken = useSelector((state) => state.auth.token);
  // const userName = useSelector((state) => state.auth.userName);

  // useEffect(() => {
  //   if (isToken) {
  //     dispatch(authAction.useIsLoggedIn(isToken));
  //   }
  // }, [isToken, dispatch]);
  //console.log('-----------sub header-----------');
  //console.log(authCtx.userData);

  const logoutHandler = () => {
    // dispatch(authAction.logout());
    authCtx.logout();
    navigate("/");
    dispatch(uiActions.CloseAuthPop());
  };
  const toggleAccHandler = () => {
    setAccIsShow((prev) => !prev);
    setTrackIsShow(false);
  };
  const toggleTrackHandler = () => {
    setTrackIsShow((prev) => !prev);
    setAccIsShow(false);
  };

  return (
    <Fragment>
      <li>
        <Link to={"#"}>Save more on app</Link>
      </li>
      <li>
        <Link to={"#"}>Sell on muradi</Link>
      </li>
      <li>
        <Link to={"#"}>Costumer care</Link>
      </li>
      <li className={classes.trackorder}>
        <Link onClick={toggleTrackHandler} to={"#"}>
          Track my order
        </Link>
        {istrackShow && (
          <TooltipMenu>
            <div class="my-order-show">
              <div className={classes["track-title"]}>My Last Order</div>
              <p className={classes["last-order"]}>
                <Link to="#">30/08/2022 - Order 343938204858100</Link>
              </p>
              <p className={classes["last-order"]}>
                <Link to="#">30/08/2022 - Order 343938204858100</Link>
              </p>
              <p className={classes["last-order"]}>
                <Link to="#">30/08/2022 - Order 343938204858100</Link>
              </p>
              <div className={classes["track-title"]}>Track my order</div>
              <form className="track-order-form" id="topActionTrackForm">
                <label
                  for="topActionTrackOrderNumber"
                  className={classes["top-input-label"]}
                >
                  Your order number:
                </label>
                <div
                  className={`${classes["top-input-wrap"]} ${classes["track-order-input-wrap"]}`}
                >
                  <input
                    placeholder="eg.123456789"
                    id="topActionTrackOrderNumber"
                    className={classes["order-text"]}
                  />
                  <button type="button" className={classes["button-submit"]}>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                  </button>
                </div>
                <p className={classes["track-order-more-text"]}>
                  For any other inquiries,
                  <Link to="#" title="For any other inquiries, ">
                    Click here
                  </Link>
                </p>
              </form>
            </div>
          </TooltipMenu>
        )}
      </li>
      {!isLoggedIn && (
        <li>
          <Link to={"/login"}>login</Link>
        </li>
      )}
      {!isLoggedIn && (
        <li>
          <Link to={"/register"}>Signup</Link>
        </li>
      )}
      {isLoggedIn && (
        <li className={classes.account}>
          <Link onClick={toggleAccHandler} to={"#"}>
            {loggedInUsername} Account
          </Link>
          {isaccShow && (
            <TooltipMenu>
              <div className={classes.account_popup}>
                <div>
                  <Link className={classes.account_popup_link} to={"/profile"}>
                    <ion-icon name="happy-outline"></ion-icon>
                    <div>Manage My Account</div>
                  </Link>
                </div>
                <div>
                  <Link
                    className={classes.account_popup_link}
                    to={"/profile/my_orders"}
                  >
                    <ion-icon name="cube-outline"></ion-icon>
                    <div>My Orders</div>
                  </Link>
                </div>
                <div>
                  <Link className={classes.account_popup_link} to={"#"}>
                    <ion-icon name="heart-circle-outline"></ion-icon>
                    <div>My Wishlist & Followed Stores</div>
                  </Link>
                </div>
                <div>
                  <Link className={classes.account_popup_link} to={"#"}>
                    <ion-icon name="star-outline"></ion-icon>
                    <div>My Reviews</div>
                  </Link>
                </div>
                <div>
                  <Link
                    className={classes.account_popup_link}
                    to={"/profile/order_returns"}
                  >
                    <ion-icon name="close-circle-outline"></ion-icon>
                    <div>My Returns & Cancellations</div>
                  </Link>
                </div>
                <div>
                  <div
                    onClick={logoutHandler}
                    className={classes.account_popup_link}
                  >
                    <ion-icon name="log-out-outline"></ion-icon>
                    <div>Logout</div>
                  </div>
                </div>
              </div>
            </TooltipMenu>
          )}
        </li>
      )}
      {isLoggedIn && (
        <li>
          <span onClick={logoutHandler}>Signout</span>
        </li>
      )}
    </Fragment>
  );
};

export default SubHeaderList;
