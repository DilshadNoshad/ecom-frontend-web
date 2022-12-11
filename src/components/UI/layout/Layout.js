import React from "react";
import { Link } from "react-router-dom";
import styles from "./Layout.module.css";
const Layout = (props) => {
  return (
    <div id={props.sectionId}>
      <section>
        {props.advanceLayout ? (
          <div className={styles.flexlayout}>
            <h1 className={styles["sec-title"]}>{props.title}</h1>
            <Link to={"#"}>
              <span className="text">{props.advanceLayout}</span>
            </Link>
          </div>
        ) : (
          <h1 className={styles["sec-title"]}>{props.title}</h1>
        )}
        {props.children}
      </section>
    </div>
  );
};

export default Layout;
