// import { API } from "../../config";
import React, { useEffect } from "react";
import useHttp from "../../../../hooks/use-http";
import { getAllFlashProducts } from "../../../../Services/products";
import Layout from "../../../UI/layout/Layout";
import LoadingSpinner from "../../../UI/loadingSpinner/LoadingSpinner";
import Shop_Top_Product from "./Shop_Top_Product";

const Shop_Top_Products = () => {
  const {
    sendRequest,
    status,
    data: productsData,
    error,
  } = useHttp(getAllFlashProducts, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  let content;

  if (status === "completed" && productsData && productsData.length > 0) {
    content = <Shop_Top_Product productItems={productsData} />;
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

  return (
    <Layout
      sectionId="HOT DEALS"
      title="🔥 HOT DEALS"
      advanceLayout="Show More"
    >
      {content}
    </Layout>
  );
};

export default Shop_Top_Products;
