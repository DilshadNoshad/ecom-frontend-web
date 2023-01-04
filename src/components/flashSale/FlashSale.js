import React, { useEffect } from "react";
import useHttp from "../../hooks/use-http";
import Layout from "../UI/layout/Layout";
import FlashSaleBody from "./FlashSaleBody";
import classes from "./FlashSale.module.css";
import FlashSaleHeader from "./FlashSaleHeader";
import { getAllFlashProducts } from "../../Services/products";
import LoadingSpinner from "../UI/loadingSpinner/LoadingSpinner";

const FlashSale = () => {
  const {
    sendRequest,
    status,
    data: flashProductsData,
    error,
  } = useHttp(getAllFlashProducts, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  let content;

  if (
    status === "completed" &&
    flashProductsData &&
    flashProductsData.length > 0
  ) {
    content = <FlashSaleBody fetchData={flashProductsData} />;
  }
  if (
    status === "completed" &&
    (!flashProductsData || flashProductsData.length === 0)
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
  console.log(flashProductsData, "-flashsale-");
  return (
    <Layout sectionId="flash-sale" title="Flash Sale">
      <div className={classes["flash-sale_cointainer"]}>
        <FlashSaleHeader />
        {content}
      </div>
    </Layout>
  );
};

export default FlashSale;
