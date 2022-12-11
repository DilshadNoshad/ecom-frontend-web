import React from "react";
import { Link } from "react-router-dom";
import styles from "./MallTabsItems.module.css";
const MallTabsItems = (props) => {
  return (
    <li className={styles.tab_menu}>
      <Link to={"#"} className={styles.tab_menu_link}>
        <div className={styles.tab_image}>
          <img src={props.tabImg} alt={props.tabAlt} />
        </div>
        <div className={styles.text_over_flow}>
          <div className={styles.tab_text}>{props.tabName}</div>
        </div>
      </Link>
    </li>
  );
};

export default MallTabsItems;
