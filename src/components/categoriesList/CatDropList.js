import React, { useEffect } from "react";
import useHttp from "../../hooks/use-http";
import { getAllCategories } from "../../Services/categories";
import CatDropItem from "./CatDropItem";
import classes from "./CatDropList.module.css";
const CatDropList = () => {
  const {
    sendRequest,
    status,
    data: categoriesData,
    error,
  } = useHttp(getAllCategories, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  let content;

  if (status === "completed" && categoriesData && categoriesData.length > 0) {
    content = <CatDropItem fetchData={categoriesData} />;
  }
  if (
    status === "completed" &&
    (!categoriesData || categoriesData.length === 0)
  ) {
    content = <p>found no categories</p>;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (status === "pending") {
    content = <p>Loading...</p>;
  }
  return <div className={classes["nav_menu-dropdown"]}>{content}</div>;
};

export default CatDropList;
