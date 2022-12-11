import React from "react";
import CatProdFiltersTab from "./CatProdFiltersTab";
import classes from "./CatProdFilters.module.css";
import { Link } from "react-router-dom";
const CatProdFilters = (props) => {
  const reCategoryName = props.catname.replace(/-/g, " ");
  return (
    <div className="filter">
      <div className="filter-info">
        <div className={classes.head}>Related Categories</div>
        <div className={classes.cat}>
          <Link to="#">{reCategoryName}</Link>
        </div>
      </div>
      <CatProdFiltersTab />
    </div>
  );
};

export default CatProdFilters;
