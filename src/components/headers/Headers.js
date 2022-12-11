import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import MainHeader from "./mainHeader/MainHeader";
import ScrollBar from "./scrollbar/ScrollBar";
import SubHeader from "./subHeader/SubHeader";

const Headers = () => {
  const location = useLocation();
  const [scrollNavbar, setScrollNavbar] = useState(false);
  const [scrollBarMenu, setScrollBarMenu] = useState(false);

  const isLandingPage = location.pathname === "/";

  const changeScrollNavbar = () => {
    if (window.scrollY >= 115) {
      setScrollNavbar(true);
    } else {
      setScrollNavbar(false);
    }
  };

  const ChangeScrollBarMenu = () => {
    if (window.scrollY >= 280) {
      setScrollBarMenu(true);
    } else {
      setScrollBarMenu(false);
    }
    // console.log(window.scrollY);
  };
  window.addEventListener("scroll", changeScrollNavbar);
  window.addEventListener("scroll", ChangeScrollBarMenu);
  return (
    <header className={scrollNavbar ? "header scroll-active" : "header"}>
      <SubHeader className={scrollNavbar ? "submenu hide" : "submenu"} />
      <MainHeader />
      <ScrollBar
        className={
          isLandingPage && scrollBarMenu
            ? "scroll_bar_menu"
            : !isLandingPage
            ? "scroll_bar_menu"
            : "scroll_bar_menu hide"
        }
      />
    </header>
  );
};

export default Headers;
