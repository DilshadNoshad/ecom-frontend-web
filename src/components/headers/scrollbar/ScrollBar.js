import React from "react";
import ScrollBarCat from "./ScrollBarCat";
import ScrollBarMallTabs from "./ScrollBarMallTabs";
import MallTabsData from "../../../JSON/malltabs.json";
import classes from "./ScrollBar.module.css";
const ScrollBar = (props) => {
  return (
    <div id={classes["scroll_bar_menu"]} className={props.className}>
      <div className={classes["scroll_menus"]}>
        <ul>
          <ScrollBarCat />
          {MallTabsData.MallTabs.map((tab) => (
            <ScrollBarMallTabs
              key={tab.id}
              tabName={tab.tabName}
              tabImg={tab.tabImg}
              tabAlt={tab.tabAlt}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ScrollBar;
