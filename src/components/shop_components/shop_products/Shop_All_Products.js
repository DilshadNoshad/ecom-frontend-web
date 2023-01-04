import React from "react";
import { useEffect } from "react";
import useHttp from "../../../hooks/use-http";
import { getAllProducts } from "../../../Services/products";
import LoadingSpinner from "../../UI/loadingSpinner/LoadingSpinner";
import Shop_Product from "./Shop_Product";

const Shop_All_Products = () => {
  const {
    sendRequest,
    status,
    data: productsData,
    error,
  } = useHttp(getAllProducts, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  let content;

  if (status === "completed" && productsData && productsData.length > 0) {
    content = <Shop_Product productItems={productsData} />;
  }
  if (status === "completed" && (!productsData || productsData.length === 0)) {
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
  return <div>{content}</div>;
};

export default Shop_All_Products;
