import React, { Fragment, useEffect } from "react";
import useHttp from "../../hooks/use-http";
import { getAllMostPopularProducts } from "../../Services/products";
import LoadingSpinner from "../UI/loadingSpinner/LoadingSpinner";
import MostPopularItems from "./MostPopularItems";
import classes from "./MostPopularWrap.module.css";
const MostPopularWrap = () => {
  const {
    sendRequest,
    status,
    data: PopularProductsData,
    error,
  } = useHttp(getAllMostPopularProducts, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  let content;

  if (
    status === "completed" &&
    PopularProductsData &&
    PopularProductsData.length > 0
  ) {
    content = (
      <div className={classes["most_popular-container"]}>
        <MostPopularItems fetchData={PopularProductsData} />
      </div>
    );
  }
  if (
    status === "completed" &&
    (!PopularProductsData || PopularProductsData.length === 0)
  ) {
    content = <p className="centered">Found no products.</p>;
  }
  if (error) {
    content = <div className="centered focused">{error}</div>;
  }
  if (status === "pending") {
    content = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  return <Fragment> {content}</Fragment>;
};

export default MostPopularWrap;
