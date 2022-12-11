import React, { Fragment, useContext } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import AuthContext from "../../Store/auth-context";
import AnonLoginModal from "../auth/anonymousLogin/AnonLoginModal";
import FooterFour from "../footers/footerFourth/FooterFourth";
import FooterSecond from "../footers/footerSecond/FooterSecond";
import FooterThird from "../footers/footerThird/FooterThird";
import Headers from "../headers/Headers";

const Layout = (props) => {
  const location = useLocation();
  const authCtx = useContext(AuthContext);

  const isLandingPage = location.pathname === "/";
  const isLoggedIn = authCtx.isLoggedIn;
  const isShown = useSelector((state) => state.ui.authPopUpIsVisible);

  return (
    <Fragment>
      {!isLoggedIn && isShown && <AnonLoginModal />}
      <Headers />
      <main>{props.children}</main>
      <footer>
        <FooterSecond />
        {isLandingPage && <FooterThird />}
        <FooterFour />
      </footer>
    </Fragment>
  );
};

export default Layout;
