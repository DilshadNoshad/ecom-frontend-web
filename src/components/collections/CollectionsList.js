import React from "react";
import CollectionsItems from "./CollectionsItems";
import classes from "./CollectionsList.module.css";
const CollectionsList = (props) => {
  return (
    <div className={classes["collection-flex_container"]}>
      {props.categoriesItems.Collections.map((collection) => {
        return (
          <CollectionsItems
            key={collection.id}
            title={collection.collTitle}
            totalItems={collection.collTotalItem}
            thumbnail={collection.collThumbnails}
          />
        );
      })}
    </div>
  );
};

export default CollectionsList;
