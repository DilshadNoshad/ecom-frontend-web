import React from "react";
import MallTabsItems from "./MallTabsItems";
import styles from "./MallTabsList.module.css";
const MallTabsList = (props) => {
  return (
    <ul className={styles.tab_main}>
      {props.mallTabsItems.MallTabs.map((tab) => {
        return (
          <MallTabsItems
            key={tab.id}
            tabName={tab.tabName}
            tabImg={tab.tabImg}
            tabAlt={tab.tabAlt}
          />
        );
      })}
    </ul>
  );
};

export default MallTabsList;
