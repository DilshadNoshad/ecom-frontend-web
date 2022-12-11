import React from "react";
import { Link } from "react-router-dom";
import CollectionsThumb from "./CollectionsThumb";
import classes from "./CollectionsItems.module.css";
const CollectionsItems = (props) => {
  return (
    <Link
      to={"#"}
      className={`${classes.collection_box} ${classes.collection_box_grid}`}
    >
      <div className={classes["collection-details"]}>
        <div className={classes["coll-head"]}>{props.title}</div>
        <div className={classes["coll_product-count"]}>
          <span>{props.totalItems}</span> &nbsp; Product
        </div>
      </div>
      {props.thumbnail.map((thumb) => {
        return (
          <CollectionsThumb
            key={thumb.id}
            image={thumb.image}
            imageAlt={thumb.alt}
          />
        );
      })}
    </Link>
  );
};

export default CollectionsItems;
